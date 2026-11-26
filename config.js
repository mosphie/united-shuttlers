// EDIT ME – club details used by the app. Change, save, then redeploy (see README.md).
window.CLUB = {
  name: 'United Shuttlers Sydney Badminton',
  payid: 'pay@unitedshuttlers.example',      // PayID members pay to
  bsb: '000-000',                             // bank transfer details
  acc: '12345678',
  accName: 'United Shuttlers',
  email: 'privacy@unitedshuttlers.example',   // shown in the privacy policy
  fb: 'https://www.facebook.com/',            // default Facebook group link (admins can change in app)
  ig: 'https://www.instagram.com/',           // default Instagram link
  // Real email sign-in codes (Supabase). These two values are public-safe. NEVER put a secret/service_role key here.
  supabaseUrl: 'https://oxcbvigblvbzjbjoquvq.supabase.co',
  supabaseKey: 'sb_publishable_aAd7NQukNdb5u6SaCOBuJQ_YwfCWQZQ',
  demoFallback: true,   // set to false before real members join, so a failed email never falls back to a demo code
  version: '1.6.0',                           // raise this on every release
  build: '2026-11-26'
};
