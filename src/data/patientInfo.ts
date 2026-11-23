/** Patient Info pages. Text follows centralcaliforniasurgery.com (Patient Info menu), lightly edited into plain English.
 *  Items marked "added" are our own wording and need review by Dr. Huber before launch. */
import { site } from './site';

export type Link = { label: string; href: string; external?: boolean; desc?: string };
export type Img = { src: string; alt: string; pos?: string; fit?: 'contain' };
export type Recipe = {
  title: string; blurb: string; image?: Img;
  meta: { label: string; value: string }[];
  groups: { title?: string; items: string[] }[];
  steps: string[]; notes?: string[]; source?: string;
};
export type Block =
  | { type: 'prose'; tight?: boolean; eyebrow: string; title: string; text: string[]; links?: Link[]; image?: Img }
  | { type: 'steps'; eyebrow: string; title: string; text?: string; items: { title: string; text?: string }[] }
  | { type: 'checklists'; eyebrow: string; title: string; text?: string; groups: { title: string; items: string[] }[]; note?: string }
  | { type: 'cards'; eyebrow: string; title: string; text?: string; items: { title: string; text: string }[]; image?: Img }
  | { type: 'books'; eyebrow: string; title: string; text?: string; image: Img; items: { title: string; author: string }[] }
  | { type: 'quotes'; eyebrow: string; title: string; text?: string; items: { text: string; name: string; meta?: string; stars?: number; href?: string }[] }
  | { type: 'recipes'; eyebrow: string; title: string; text?: string; items: Recipe[] }
  | { type: 'table'; eyebrow: string; title: string; text?: string; head: string[]; rows: string[][]; note?: string }
  | { type: 'faq'; eyebrow: string; title: string; items: { q: string; a: string; links?: Link[] }[] }
  | { type: 'downloads'; eyebrow: string; title: string; text?: string; items: { title: string; text: string; href: string }[] }
  | { type: 'videos'; eyebrow: string; title: string; text?: string; items: { title: string; id: string }[] }
  | { type: 'contact'; eyebrow: string; title: string; text?: string; items: { label: string; value: string; href?: string }[] }
  | { type: 'links'; tight?: boolean; eyebrow: string; title: string; text?: string; groups: { title: string; items: Link[] }[] }
  | { type: 'bmi' };

export interface PatientPage {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  lede: string;
  image: string;
  alt: string;
  pos?: string;
  crumb?: string;
  hideMore?: boolean;
  blocks: Block[];
}

const pdf = (id: string) => `https://sa1s3.patientpop.com/assets/docs/${id}.pdf`;
const ext = (label: string, href: string): Link => ({ label, href, external: true });

export const patientPages: PatientPage[] = [
  {
    slug: 'glp1-cash-pay',
    title: 'GLP1 Cash Pay',
    metaDescription: 'Paying cash for GLP-1 medicine in Modesto, CA. Learn the steps to get started with Central California Surgery and see GoodRx cash prices for Wegovy.',
    eyebrow: 'Patient info',
    lede: 'Medicare and Medi-Cal no longer cover GLP-1 medicines for weight management. Here is how cash pay works at our office.',
    image: '/images/stock/wl-consult.jpg',
    alt: 'A doctor and a patient with a scale during a weight loss consultation',
    pos: '50% 35%',
    blocks: [
      {
        type: 'prose',
        eyebrow: 'What changed',
        title: 'Medicare and Medi-Cal changes',
        text: [
          'On January 1, 2026, Medicare and Medi-Cal stopped covering GLP-1 medicines for weight management.',
          'If you want to keep using your GLP-1, you will need to pay cash. Several discount medication apps work at most large retail pharmacies and can lower your cost.',
        ],
      },
      {
        type: 'steps',
        eyebrow: 'How it works',
        title: 'Steps to getting started',
        items: [
          { title: 'Schedule an appointment', text: 'See a provider in our office. Your office visit is covered by insurance.' },
          { title: 'Get assessed', text: 'Your provider assesses you and decides the best form of treatment.' },
          { title: 'We send a prescription', text: 'It goes to the pharmacy you choose and is marked as cash pay.' },
          { title: 'Sign up for GoodRx', text: 'Download the GoodRx app on your phone.' },
          { title: 'Choose your pharmacy', text: 'Select the pharmacy that received your prescription.' },
          { title: 'Enter your prescription', text: 'Add your prescription information in the app.' },
          { title: 'Show the price at the pharmacy', text: 'The app gives you confirmation pricing. Show it to the pharmacist.' },
        ],
      },
      {
        type: 'table',
        eyebrow: 'Cash pay pricing through GoodRx',
        title: 'Wegovy tablet prices',
        head: ['Dosage', 'Quantity', 'Retail price', 'GoodRx price'],
        rows: [
          ['1.5 mg', '30 tablets', '$1,639.02', '$149.00'],
          ['4 mg', '30 tablets', '$1,638.98', '$149.00'],
          ['9 mg', '30 tablets', '$1,638.98', '$299.00'],
          ['25 mg', '30 tablets', '$1,638.98', '$299.00'],
        ],
      },
      {
        type: 'table',
        eyebrow: 'Cash pay pricing through GoodRx',
        title: 'Wegovy carton prices',
        head: ['Dosage', 'Quantity', 'Retail price', 'GoodRx price'],
        rows: [
          ['4 prefilled pens of 0.25 mg / 0.5 ml', '1 carton', '$1,638.97', '$199.00'],
          ['4 prefilled pens of 0.5 mg / 0.5 ml', '1 carton', '$1,787.89', '$199.00'],
          ['4 prefilled pens of 1 mg / 0.5 ml', '1 carton', '$1,638.98', '$349.00'],
          ['4 prefilled pens of 1.7 mg / 0.75 ml', '1 carton', '$1,629.83', '$349.00'],
          ['4 prefilled pens of 2.4 mg / 0.75 ml', '1 carton', '$1,638.98', '$349.00'],
          ['4 prefilled pens of 7.2 mg / 0.75 ml', '1 carton', '$1,609.75', '$399.00'],
        ],
        note: 'Prices come from GoodRx and can change. Check the GoodRx app for the price today.',
      },
    ],
  },
  {
    slug: 'edd-fmla',
    title: 'EDD / FMLA / Medical Records',
    metaDescription: 'How to request disability (EDD/SDI) and FMLA forms, pay the filing fee and request medical records from Central California Surgery in Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'Need leave or disability paperwork after surgery, or a copy of your records? Start here.',
    image: '/images/stock/ds-consultation.jpg',
    alt: 'A surgeon talking with a patient in a consultation room',
    pos: '50% 40%',
    blocks: [
      {
        type: 'table',
        eyebrow: 'FMLA and disability (EDD) form requests',
        title: 'Fees',
        head: ['Request', 'Fee'],
        rows: [
          ['File for disability online (SDI)', '$30'],
          ['File for disability on paper', '$30'],
          ['FMLA (patient and caregiver, if needed)', '$30'],
          ['Additional work forms', '$30'],
        ],
      },
      {
        type: 'faq',
        eyebrow: 'Questions',
        title: 'Disability and FMLA: common questions',
        items: [
          {
            q: 'How do I start my claim?',
            a: 'Start your claim on or after your surgery day on the EDD website. Once you have filed and paid our office, we send the practitioner part on or after the day you leave the hospital.',
            links: [ext('Start on the EDD website', 'https://edd.ca.gov/sdi_online')],
          },
          {
            q: 'How do I pay the office?',
            a: 'Pay at the front office, call (209) 248-7168 ext. 128, or use our Square link. Please include your name and date of birth.',
            links: [ext('Pay with Square', 'https://checkout.square.site/merchant/MLDRP0JWJ03FH/checkout/5EEDZVS2KT5BPTAECWHGB37L')],
          },
          {
            q: 'When does disability start?',
            a: 'We usually start your disability on your surgery date. We release you back to work the day after your one month follow-up visit. Family members get two weeks off from the surgery date. We do not approve intermittent time off. A provider must approve any change to the start date or any extension first.',
          },
          {
            q: 'How do I file a new disability claim online?',
            a: 'File through SDI Online. You first complete a one-time registration with Benefit Programs Online. SDI Online is simple to use and open 24 hours a day, 7 days a week, for patients, doctors and employers.',
            links: [ext('SDI Online', 'https://www.edd.ca.gov/Disability/SDI_Online.htm'), ext('Benefit Programs Online', 'https://edd.ca.gov/Benefit_Programs_Online.htm')],
          },
          {
            q: 'Can I file by mail instead?',
            a: 'Yes. To order the paper Claim for Disability Insurance Benefits (DE 2501), visit the EDD forms page or call 1-800-480-3287 (English), 1-866-658-8846 (Spanish) or TTY 1-800-563-2441.',
            links: [ext('EDD forms', 'https://www.edd.ca.gov/Forms/')],
          },
          {
            q: 'How do I file a new disability claim on paper through your office?',
            a: 'Pay the $30 filing fee and pick up the red SDI form at the front office. Fill it out by hand.',
          },
          {
            q: 'How do I submit my FMLA, accommodation or other work forms?',
            a: 'Give your forms to the front desk and they will pass them to our Forms department. If your employer asks for a fax number, they can fax the forms to (209) 846-9641.',
          },
        ],
      },
      {
        type: 'contact',
        eyebrow: 'Questions about forms?',
        title: 'Reach our forms team',
        text: 'We will do our best to get back to you quickly. If you leave a voicemail, include your name, date of birth and question.',
        items: [
          { label: 'Text or call', value: site.phone, href: site.phoneHref },
          { label: 'Phone extension', value: 'Ext. 128' },
          { label: 'Disability email', value: 'disability@centralcaliforniasurgery.com', href: 'mailto:disability@centralcaliforniasurgery.com' },
          { label: 'Fax for employers', value: '(209) 846-9641' },
        ],
      },
      {
        type: 'contact',
        eyebrow: 'Medical records requests',
        title: 'Request your medical records',
        text: 'Send your request, including form completion requests, by email. There is no fee to request your own medical records.',
        items: [{ label: 'Records email', value: 'Records@CentralCaliforniaSurgery.com', href: 'mailto:Records@CentralCaliforniaSurgery.com' }],
      },
    ],
  },
  {
    slug: 'bmi-calculator',
    title: 'BMI Calculator',
    metaDescription: 'Check your body mass index (BMI) with our free adult BMI calculator from Central California Surgery in Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'Check your starting point in seconds. Nothing you enter is saved or sent.',
    image: '/images/stock/sl-measure.jpg',
    alt: 'A nutritionist measuring a patient during a weight loss consultation',
    pos: '50% 40%',
    blocks: [
      { type: 'bmi' },
      {
        type: 'prose',
        eyebrow: 'What your number means',
        title: 'BMI and weight loss surgery',
        text: [
          'BMI, or body mass index, compares your weight to your height. A BMI of 40 or more is called morbid obesity.',
          'Weight loss surgery is often considered when BMI is above 40, or above 35 with serious weight-related health problems. BMI is only one part of the picture. Your surgeon will look at your full health history.',
        ],
        links: [{ label: 'Explore weight loss surgery', href: '/services/weight-loss' }],
      },
    ],
  },
  {
    slug: 'webinars',
    title: 'Webinar',
    metaDescription: 'Watch the Central California Surgery weight loss surgery webinar online. Learn about your options before your consultation in Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'Watch our online seminar from home, at your own pace.',
    image: '/images/stock/ds-surgical-team.jpg',
    alt: 'A surgical team in a bright operating room',
    pos: '50% 40%',
    blocks: [
      {
        type: 'videos',
        eyebrow: 'Online seminar',
        title: 'Watch the webinar',
        text: 'Learn about weight loss surgery with Central California Surgery. Have questions after you watch? Call us or book a consultation.',
        items: [{ title: 'Central California Surgery webinar', id: 'xzSO7QjGxKk' }],
      },
    ],
  },
  {
    slug: 'new-patient-packet-english-y-en-espanol',
    title: 'New Patient Packet',
    metaDescription: 'Download the Central California Surgery new patient packet in English or Spanish (en Español) before your visit in Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'Download your new patient packet in English or en Español.',
    image: '/images/stock/by-consult.jpg',
    alt: 'A surgeon talking with a patient at a desk',
    pos: '50% 40%',
    blocks: [
      {
        type: 'downloads',
        eyebrow: 'Choose your language',
        title: 'New patient packet',
        text: 'Both files are PDFs. Open one to read it, print it or save it.',
        items: [
          { title: 'New Patient Packet (English)', text: 'PDF', href: pdf('413819') },
          { title: 'New Patient Packet (en Español)', text: 'PDF', href: pdf('413818') },
        ],
      },
    ],
  },
  {
    slug: 'animated-surgery-videos',
    title: 'Animated Surgery Videos',
    metaDescription: 'Watch animated videos of sleeve gastrectomy, gastric bypass and duodenal switch surgery from Central California Surgery in Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'See each weight loss procedure step by step in a short animated video.',
    image: '/images/stock/wl-robotic.jpg',
    alt: 'A surgeon at a robotic console in a modern operating room',
    pos: '70% 40%',
    blocks: [
      {
        type: 'videos',
        eyebrow: 'Step by step',
        title: 'Watch how each surgery works',
        text: 'Press play to watch. Your surgeon will help you decide which procedure may fit you.',
        items: [
          { title: 'Sleeve Gastrectomy', id: 'dl1w8bxItT0' },
          { title: 'Gastric Bypass', id: 'l4vREUUv9Lw' },
          { title: 'Loop Duodenal Switch', id: '0yyGvPoFGFE' },
          { title: 'Standard Duodenal Switch', id: 'BitgTPlFdY4' },
        ],
      },
    ],
  },
  {
    slug: 'preparing-for-surgery',
    title: 'Preparing for Surgery',
    metaDescription: 'How to prepare for surgery: working with your doctor, planning your home and what to expect on the day. Central California Surgery, Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'Preparing in body and mind is an important step toward a good result. Knowing your role helps you recover faster and have fewer problems.',
    image: '/images/stock/re-doctor.jpg',
    alt: 'A doctor explaining a plan to a patient',
    pos: '50% 35%',
    blocks: [
      {
        type: 'prose',
        eyebrow: 'Before you begin',
        title: 'Get ready, step by step',
        text: [
          'Once you and your surgeon decide that surgery will help you, preparing mentally and physically becomes your next step. Understanding the process and your part in it helps you recover more quickly and have fewer problems.',
        ],
        links: [{ label: 'See the full surgery pathway', href: '/services/weight-loss' }],
      },
      {
        type: 'checklists',
        eyebrow: 'Your checklist',
        title: 'Plan ahead',
        groups: [
          {
            title: 'Working with your doctor',
            items: [
              'Your surgeon gives you a full physical exam. Routine tests, such as blood tests and X-rays, are usually done a week before surgery.',
              'Talk with your surgeon and family doctor about which medicines to stop before surgery.',
              'Ask about options for preparing for possible blood replacement, including donating your own blood.',
              'If you are overweight, losing weight is a good idea.',
              'Stop aspirin and anti-inflammatory medicines one week before surgery to lower bleeding.',
              'If you smoke, stop or cut down to lower surgery risks and help recovery.',
              'Treat any tooth, gum, bladder or bowel problems before surgery to lower the risk of infection.',
              'Eat a balanced diet and take a daily multivitamin with iron.',
              'Tell your doctor about any infection. Surgery cannot happen until all infections have cleared.',
            ],
          },
          {
            title: 'Home planning',
            items: [
              'Ask someone to help with daily tasks like cooking, shopping and laundry.',
              'Keep items you use often within easy reach, so you reach and bend less.',
              'Remove loose carpets and tape down electrical cords to prevent falls.',
              'Have a stable chair with a firm seat cushion, a firm back and two arms.',
            ],
          },
          {
            title: 'Same-day surgery',
            items: [
              'Have someone ready to take you home. You will not be able to drive for at least 24 hours.',
              'Do not eat or drink in the car on the way home. Anesthesia, food and car motion can cause nausea or vomiting.',
              'At home, wait until you are hungry. Start with a light meal and avoid greasy food for the first 24 hours.',
              'Take pain medicine as directed. Start when you begin to feel uncomfortable, before the pain is severe.',
            ],
          },
        ],
        note: 'These are general suggestions for most types of surgery. Please talk with your surgeon about your own pre-operative plan before your operation.',
      },
    ],
  },
  {
    slug: 'minimally-invasive-surgery',
    title: 'Minimally Invasive Surgery',
    metaDescription: 'Minimally invasive and robotic surgery in Modesto, CA. Smaller cuts, less pain and a faster recovery. See the procedures Central California Surgery performs.',
    eyebrow: 'Patient info',
    lede: 'Smaller cuts, less pain and a faster return to your life.',
    image: '/images/stock/gb-laparoscopy.jpg',
    alt: 'Surgeons performing laparoscopic surgery',
    pos: '50% 40%',
    blocks: [
      {
        type: 'prose',
        eyebrow: 'What it is',
        title: 'Minimally invasive surgery',
        text: [
          'Minimally invasive surgery, also called laparoscopic surgery, has become very popular in the U.S. and around the world over the past two decades. Millions of general surgery procedures now use these methods.',
          'Instead of one large open cut, the surgeon uses a few small tube-like devices called trocars, usually 3 to 5 per procedure. A video camera and small instruments go through the trocars to do the surgery.',
          'Gallbladder surgery is a good example. Laparoscopic gallbladder surgery became common in the early 1990s and is now usually outpatient. Most patients return to work and most activities within four to seven days. With open surgery, patients stayed in the hospital four to seven days and often could not work for six to eight weeks.',
          'Minimally invasive surgery is done both as an inpatient stay and as outpatient surgery, where you go home the same day.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Why patients ask for it',
        title: 'The benefits',
        items: [
          { title: 'Less pain', text: 'Small cuts mean less pain after surgery.' },
          { title: 'Less scarring', text: 'Tiny incisions leave smaller scars.' },
          { title: 'Lower infection risk', text: 'Smaller wounds lower the chance of infection.' },
          { title: 'Less blood loss', text: 'Surgeons lose less blood than with open surgery.' },
          { title: 'Shorter stays', text: 'Many patients spend less time in the hospital.' },
          { title: 'Quicker return to work', text: 'Most patients get back to normal life sooner.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'A short history',
        title: 'How the method grew',
        text: [
          'Gynecologists first used laparoscopy to look inside the body in the 1960s. As tools improved, surgeons did more complex operations. General surgeons began to adopt the method in the late 1980s.',
          'Today surgeons use it for gallbladder removal, hernia repair, appendectomy, exploratory surgery, colon surgery and advanced weight loss procedures such as gastric bypass. Patients should take time to think about all their options before agreeing to a plan.',
        ],
      },
      {
        type: 'checklists',
        eyebrow: 'What our surgeons perform',
        title: 'Minimally invasive procedures',
        text: 'These are some of the minimally invasive operations performed at Central California Surgery.',
        groups: [
          {
            title: 'Laparoscopic',
            items: [
              'Gallbladder surgery',
              'Bariatric (weight loss) surgery',
              'Appendectomy',
              'Inguinal hernia repair',
              'Femoral hernia repair',
              'Umbilical hernia repair',
              'Ventral hernia repair',
              'Repair of large hiatal hernia',
              'Repair of paraesophageal hernia',
              'Fundoplication for acid reflux (GERD)',
              'Nissen fundoplication',
              'Common bile duct exploration',
              'Exploratory surgery',
              'Gastrectomy',
              'Gastrojejunostomy',
              'Gastrostomy and jejunostomy tube placement',
              'Liver biopsy',
              'Lysis of adhesions',
              'Small bowel resection',
              'Treatment of small bowel obstruction',
              'Colostomy',
              'Splenectomy',
              'Selected stomach tumors',
            ],
          },
          {
            title: 'Robotic',
            items: [
              'Cholecystectomy (gallbladder removal)',
              'Sleeve gastrectomy',
              'Gastric bypass',
              'Duodenal switch',
              'Ventral hernia repair',
              'Hiatal hernia repair',
              'Nissen fundoplication',
              'Pancreatectomy',
              'Splenectomy',
            ],
          },
          {
            title: 'Other procedures',
            items: [
              'Abdominoperineal resection',
              'Low anterior rectosigmoid colon resection',
              'Colectomy',
              'Inguinal and ventral hernia repair',
              'Hiatal hernia repair',
              'Incisional hernia repair',
              'Panniculectomy',
              'LINX ring placement (heartburn relief)',
              'Incision and drainage',
            ],
          },
        ],
        note: 'And many others.',
      },
    ],
  },
  {
    slug: 'useful-links',
    title: 'Useful Links',
    metaDescription: 'Trusted outside resources: local hospitals and medical groups for weight loss surgery, from Central California Surgery in Modesto, CA.',
    eyebrow: 'Patient info',
    lede: 'Trusted outside resources for your care and your questions.',
    image: '/images/stock/by-surgeons.jpg',
    alt: 'A surgical team in scrubs',
    pos: '50% 40%',
    blocks: [
      {
        type: 'links',
        eyebrow: 'Trusted resources',
        title: 'Hospitals and health groups',
        text: 'These links open outside websites. We are not responsible for their content.',
        groups: [
          {
            title: 'Local hospitals',
            items: [
              ext('Memorial Medical Center (Modesto, CA)', 'https://www.memorialmedicalcenter.org'),
              ext('Doctors Hospital Manteca (Manteca, CA)', 'https://www.doctorsmanteca.com'),
              ext('Oak Valley Hospital District (Oakdale, CA)', 'https://oakvalleyhospital.com'),
            ],
          },
          {
            title: 'Health organizations',
            items: [
              ext('American Society for Metabolic and Bariatric Surgery (ASMBS)', 'https://www.asmbs.org'),
              ext('The Obesity Society', 'https://www.obesity.org'),
              ext('American College of Surgeons', 'https://www.facs.org'),
              ext('American Diabetes Association (ADA)', 'https://www.diabetes.org'),
            ],
          },
        ],
      },
    ],
  },
];

export const patientBySlug = Object.fromEntries(patientPages.map((p) => [p.slug, p]));
