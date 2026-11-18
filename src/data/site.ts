export const site = {
  name: 'Central California Surgery',
  shortName: 'CCS',
  tagline: 'Bariatric & General Surgery in Modesto, CA',
  url: 'https://www.centralcaliforniasurgery.com',
  phone: '(209) 248-7168',
  phoneHref: 'tel:+12092487168',
  address: { line1: '1001 Sylvan Avenue, Building A', city: 'Modesto', state: 'CA', zip: '95350' },
  areas: ['Modesto', 'Stockton', 'Fresno'],
  rating: { score: '4.92', count: 26 },
  links: {
    // live-site pages (kept until these pages are rebuilt)
    live: 'https://www.centralcaliforniasurgery.com',
    privacy: 'https://www.centralcaliforniasurgery.com/your-privacy',
    terms: 'https://www.centralcaliforniasurgery.com/our-terms',
    accessibility: 'https://www.centralcaliforniasurgery.com/accessibility-statement',
    newPatient: 'https://www.centralcaliforniasurgery.com/contents/patient-info/new-patient-packet-english-y-en-espanol',
    webinars: 'https://www.centralcaliforniasurgery.com/contents/patient-info/webinars',
    financing: 'https://www.prosper.com/borrower/apply/funnel/registration?type=phl&provider_id=028057&version=pad_no_ls',
    bariatricAdvantage: 'http://centralcaliforniabariatricsurgery.bariatricadvantage.com/',
    proCare: 'https://procarenow.com/?ref=CCS10&utm_source=affiliate',
    referrals: 'https://www.centralcaliforniasurgery.com/contents/referrals',
  },
  seo: {
    title: 'Bariatric & General Surgeons in Modesto, CA',
    description:
      'Board-certified bariatric and general surgeons serving Modesto, Stockton and Fresno. Gastric sleeve, gastric bypass, duodenal switch, hernia, gallbladder and acid reflux surgery.',
    ogImage: '/images/photos/ccs-4.jpg',
  },
};
export const addressOneLine = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
