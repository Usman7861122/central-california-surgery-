export const site = {
  name: 'Central California Surgery',
  shortName: 'CCS',
  tagline: 'Bariatric & General Surgery in Modesto, CA',
  url: 'https://www.centralcaliforniasurgery.com',
  phone: '(209) 248-7168',
  phoneHref: 'tel:+12092487168',
  address: { line1: '1001 Sylvan Avenue, Building A', city: 'Modesto', state: 'CA', zip: '95350' },
  newPatientEmail: 'New@centralcaliforniasurgery.com',
  referralEmail: 'New@centralcaliforniasurgery.com',
  fax: '(209) 846-9641',
  referralPdf: 'https://sa1s3optim.patientpop.com/assets/docs/455395.pdf',
  geo: { lat: 37.666817, lng: -120.975151 },
  // Hours are NOT on the old site: confirm with the practice before launch.
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Friday', open: null, close: null },
    { day: 'Saturday', open: null, close: null },
    { day: 'Sunday', open: null, close: null },
  ],
  hoursNote: 'Hours are in Pacific Time. Closed on major holidays.',
  areas: ['Modesto', 'Stockton', 'Fresno'],
  rating: { score: '4.92', count: 26 },
  links: {
    // live-site pages (kept until these pages are rebuilt)
    live: 'https://www.centralcaliforniasurgery.com',
    privacy: '/your-privacy',
    terms: '/our-terms',
    accessibility: '/accessibility-statement',
    cookies: '/cookie-policy',
    newPatient: '/patient-info/new-patient-packet-english-y-en-espanol',
    webinars: '/patient-info/webinars',
    financing: 'https://www.prosper.com/borrower/apply/funnel/registration?type=phl&provider_id=028057&version=pad_no_ls',
    bariatricAdvantage: 'http://centralcaliforniabariatricsurgery.bariatricadvantage.com/',
    proCare: 'https://procarenow.com/?ref=CCS10&utm_source=affiliate',
    referrals: '/referrals',
  },
  seo: {
    title: 'Bariatric & General Surgeons in Modesto, CA',
    description:
      'Board-certified bariatric and general surgeons serving Modesto, Stockton and Fresno. Gastric sleeve, gastric bypass, duodenal switch, hernia, gallbladder and acid reflux surgery.',
    ogImage: '/images/photos/ccs-4.jpg',
  },
};
export const addressOneLine = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
