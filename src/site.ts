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
