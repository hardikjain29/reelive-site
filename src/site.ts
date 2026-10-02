/** Everything that changes at launch or with pricing lives here. */
export const SITE = {
  name: 'Reelive',
  url: 'https://reelive.app',
  supportEmail: 'support@reelive.app',
  /** Launch day: set to true. The buttons become App Store links and Safari shows the Smart App Banner. */
  appStoreLive: false,
  appStoreId: '6817827655',
  appStoreUrl: 'https://apps.apple.com/app/id6817827655',
  freeReels: 2,
  /** Visible templates, rounded down (re-count before launch). */
  templates: '1,300+',
  prices: { yearly: '$49.99', yearlyPerWeek: '$0.96', weekPass: '$5.99' },
  description:
    'Add all your photos and videos, choose the kind of reel you want, and Reelive picks the best moments and cuts them to the music.',
} as const;

/**
 * Who runs Reelive, for the Impressum, the Privacy Policy and the Terms.
 */
export const OPERATOR = {
  name: 'Hardik Jain',
  street: 'Palisadenstr. 42',
  city: '10243 Berlin',
  country: 'Germany',
  email: 'support@reelive.app',
  /** Optional, but a second quick way to reach us besides email is recommended for the Impressum. */
  phone: null as string | null,
  /** USt-IdNr or Wirtschafts-ID, only if one has been issued. */
  vatId: null as string | null,
  /** The data protection authority of the Land the operator lives in. */
  authority: 'the Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin',
  /** Court for disputes with merchants (not consumers): the operator's city. */
  courtCity: 'Berlin',
} as const;

/** Fair-use limits for Pro (the backend's PRO_DAILY_REEL_CAP and PRO_MAX_ACTIVE_REELS). */
export const PRO_LIMITS = { perDay: 30, atOnce: 3 } as const;

/** Shown on every legal page. Update when a text changes. */
export const LEGAL_UPDATED = '2 October 2026';
