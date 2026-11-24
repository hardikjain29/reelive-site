/**
 * The website's PostHog setup (EU, memory-only: nothing is stored on the visitor's device),
 * shared by every page (components/Analytics.astro) and the short links (pages/[link].astro).
 */
import { SITE } from '../site';

/**
 * 'live' on reelive.app; 'test' on localhost with `?analytics=test` (PostHog starts but sends
 * nothing); null anywhere else or without a key.
 */
export function analyticsMode(): 'live' | 'test' | null {
  const host = location.hostname;
  if (!SITE.posthogKey) return null;
  if (host === 'reelive.app') return 'live';
  const local = host === 'localhost' || host === '127.0.0.1';
  return local && new URLSearchParams(location.search).get('analytics') === 'test' ? 'test' : null;
}

export async function startPosthog(mode: 'live' | 'test', { pageviews }: { pageviews: boolean }) {
  const { default: posthog } = await import('posthog-js/dist/module.slim');
  posthog.init(SITE.posthogKey, {
    api_host: 'https://eu.i.posthog.com',
    ui_host: 'https://eu.posthog.com',
    persistence: 'memory',
    person_profiles: 'never',
    respect_dnt: true,
    capture_pageview: pageviews,
    capture_pageleave: pageviews,
    autocapture: false,
    rageclick: false,
    capture_dead_clicks: false,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_performance: false,
    disable_session_recording: true,
    disable_surveys: true,
    disable_product_tours: true,
    disable_web_experiments: true,
    disable_external_dependency_loading: true,
    advanced_disable_flags: true,
    before_send: mode === 'test' ? () => null : undefined,
  });
  posthog.register({ origin: 'web' });
  return posthog;
}
