export type NavCard = { label: string; href: string; desc?: string; icon?: string; img?: string; tag?: string };
export type NavNode = { label: string; href?: string; intro?: { title: string; text: string }; cards?: NavCard[]; cols?: 2 | 3 };

const L = 'https://www.centralcaliforniasurgery.com';

/** Same structure as the live website menu. */
export const mainNav: NavNode[] = [
  {
    label: 'Services', href: '/#services', cols: 3,
    intro: { title: 'Surgical care, made clear', text: 'Minimally invasive procedures for weight loss and general surgery.' },
    cards: [
      { label: 'Duodenal Switch', href: '/services/duodenal-switch', desc: 'Strong, long-lasting weight loss.', img: '/images/stock/duodenal-switch.jpg' },
      { label: 'Gallbladder', href: '/services/gallbladder', desc: 'Relief from gallstone pain.', img: '/images/stock/gallbladder.jpg' },
      { label: 'Gastric Bypass', href: '/services/gastric-bypass', desc: 'A proven weight loss option.', img: '/images/stock/gastric-bypass.jpg' },
      { label: 'Gastric Sleeve', href: '/services/gastric-sleeve', desc: 'The most common weight loss surgery.', img: '/images/stock/gastric-sleeve.jpg' },
      { label: 'Acid Reflux', href: '/services/acid-reflux', desc: 'Lasting heartburn relief.', img: '/images/stock/acid-reflux.jpg' },
      { label: 'Hernia', href: '/services/hernia', desc: 'Safe, precise hernia repair.', img: '/images/stock/hernia.jpg' },
      { label: 'Weight Loss', href: '/services/weight-loss', desc: 'See every weight loss option.', img: '/images/stock/wl-consult.jpg' },
    ],
  },
  {
    label: 'Patient Info', cols: 3,
    intro: { title: 'Everything before and after surgery', text: 'Forms, videos and guides to help you feel ready.' },
    cards: [
      { label: 'GLP1 Cash Pay', href: '/patient-info/glp1-cash-pay', desc: 'Self-pay GLP-1 programs.', icon: 'pill' },
      { label: 'EDD / FMLA / Medical Records', href: '/patient-info/edd-fmla', desc: 'Leave forms and records requests.', icon: 'doc' },
      { label: 'BMI Calculator', href: '/patient-info/bmi-calculator', desc: 'Check your starting point.', icon: 'calc' },
      { label: 'Webinar', href: '/patient-info/webinars', desc: 'Join an online seminar.', icon: 'video' },
      { label: 'New Patient Packet', href: '/patient-info/new-patient-packet-english-y-en-espanol', desc: 'English and Spanish.', icon: 'clip' },
      { label: 'Animated Surgery Videos', href: '/patient-info/animated-surgery-videos', desc: 'See each procedure step by step.', icon: 'play' },
      { label: 'Preparing for Surgery', href: '/patient-info/preparing-for-surgery', desc: 'What to do before your date.', icon: 'check' },
      { label: 'Minimally Invasive Surgery', href: '/patient-info/minimally-invasive-surgery', desc: 'Smaller cuts, faster recovery.', icon: 'heart' },
      { label: 'Financing', href: 'https://www.prosper.com/vib/healthcare/', desc: 'Payment plans through Prosper.', icon: 'dollar' },
      { label: 'Useful Links', href: '/patient-info/useful-links', desc: 'Trusted outside resources.', icon: 'link' },
    ],
  },
  {
    label: 'Insurance Criteria Resources', cols: 2,
    intro: { title: 'Insurance forms', text: 'Download, complete and return these forms. Some are for your primary doctor.' },
    cards: [
      { label: 'Nutrition ABN Form', href: 'https://sa1s3.patientpop.com/assets/docs/398458.pdf', desc: 'To be signed by patient.', icon: 'pdf', tag: 'PDF' },
      { label: 'Bariatric Surgery ABN Form', href: 'https://sa1s3.patientpop.com/assets/docs/398457.pdf', desc: 'To be signed by patient.', icon: 'pdf', tag: 'PDF' },
      { label: 'History & Physical (H & P) Form', href: 'https://sa1s3optim.patientpop.com/assets/docs/455137.pdf', desc: 'To be completed by your PCP.', icon: 'pdf', tag: 'PDF' },
      { label: 'Medical Release Form', href: 'https://sa1s3.patientpop.com/assets/docs/398456.pdf', desc: 'To be completed by patient.', icon: 'pdf', tag: 'PDF' },
      { label: 'No Smoking Form', href: 'https://sa1s3optim.patientpop.com/assets/docs/455139.pdf', desc: 'To be completed by your PCP.', icon: 'pdf', tag: 'PDF' },
      { label: 'No Drug or Alcohol Form', href: 'https://sa1s3optim.patientpop.com/assets/docs/455138.pdf', desc: 'To be completed by your PCP.', icon: 'pdf', tag: 'PDF' },
      { label: 'General Clearance Form', href: 'https://sa1s3optim.patientpop.com/assets/docs/455136.pdf', desc: 'To be completed by your PCP or specialist.', icon: 'pdf', tag: 'PDF' },
    ],
  },
  {
    label: 'Nutrition', cols: 3,
    intro: { title: 'Eat well, heal well', text: 'Guides, recipes and diet plans for every stage.' },
    cards: [
      { label: 'Nutrition Videos', href: '/nutrition/nutrition-videos', desc: 'Short lessons you can watch anytime.', icon: 'play' },
      { label: 'Recipes', href: '/nutrition/recipes', desc: 'Simple, high-protein meals.', icon: 'utensils' },
      { label: 'Nutrition Seminar', href: '/nutrition/nutrition-seminar', desc: 'Learn with our team.', icon: 'video' },
      { label: 'Nutrition Book', href: '/nutrition/nutrition-book', desc: 'Our full nutrition guide.', icon: 'book' },
      { label: 'Nutrition Resources', href: '/nutrition/nutrition-resources', desc: 'Helpful tools and links.', icon: 'link' },
      { label: 'Nutrition Pre Op Diet', href: 'https://sa1s3.patientpop.com/assets/docs/344181.pdf', desc: 'Your diet before surgery.', icon: 'pdf', tag: 'PDF' },
      { label: 'Handouts (English)', href: '/nutrition/handouts-english', desc: 'Printable guides.', icon: 'doc' },
      { label: 'Handouts (en Espanol)', href: '/nutrition/handouts-en-espanol', desc: 'Guias para imprimir.', icon: 'doc' },
    ],
  },
  {
    label: 'Testimonials', cols: 3,
    intro: { title: 'Real patients, real stories', text: 'Hear from people who started where you are.' },
    cards: [
      { label: 'Video Testimonials', href: '/testimonials/video-testimonials', desc: 'Watch patients share their journey.', icon: 'play' },
      { label: 'Written Testimonials', href: '/testimonials/written-testimonials', desc: 'Read what patients wrote.', icon: 'quote' },
      { label: 'Google Reviews', href: '/testimonials/google-reviews', desc: '4.92 out of 5 from 26 reviews.', icon: 'star' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Location', href: '/location' },
  { label: 'Referrals', href: '/referrals' },
];

export const footerNav = {
  Services: [
    { label: 'Gastric Sleeve', href: '/services/gastric-sleeve' },
    { label: 'Gastric Bypass', href: '/services/gastric-bypass' },
    { label: 'Duodenal Switch', href: '/services/duodenal-switch' },
    { label: 'Hernia Repair', href: '/services/hernia' },
    { label: 'Gallbladder Surgery', href: '/services/gallbladder' },
    { label: 'Acid Reflux', href: '/services/acid-reflux' },
  ],
  Patients: [
    { label: 'Insurance forms', href: '/insurance-forms' },
    { label: 'New patient packet', href: '/patient-info/new-patient-packet-english-y-en-espanol' },
    { label: 'Online seminars', href: '/patient-info/webinars' },
    { label: 'Preparing for surgery', href: '/patient-info/preparing-for-surgery' },
    { label: 'Financing', href: 'https://www.prosper.com/borrower/apply/funnel/registration?type=phl&provider_id=028057&version=pad_no_ls' },
    { label: 'Submit a referral', href: '/referrals' },
  ],
};
