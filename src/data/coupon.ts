import { site } from './site';

// Real offer from the ProCare Health flyer (public/images/offers/procare-save-10.jpg).
export const coupon = {
  title: 'Save 10% on bariatric vitamins',
  lines: 'Daily vitamins are a big part of life after weight loss surgery. Scan the code or enter CCS10 at checkout to save 10% on ProCare Health bariatric vitamins.',
  code: 'CCS10',
  discount: '10%',
  url: site.links.proCare,
  site: 'procarenow.com',
  path: '/coupon',
  image: '/images/offers/procare-save-10.jpg',
  imageAlt: 'ProCare Health flyer for Central California Surgery patients: save 10% on bariatric vitamins with code CCS10 at checkout at procarenow.com',
};
