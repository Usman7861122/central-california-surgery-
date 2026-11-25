// Content for the Lantern and BARInet pages. Written in our own words.
// Wording about cost follows the programs' own materials ("little to no out-of-pocket cost for eligible procedures").
export interface Partner {
  slug: 'lantern' | 'barinet';
  name: string;
  short: string;
  logo: string; // drop the official logo here: public/images/partners/<slug>.svg/png
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lede: string;
  image: string;
  imageAlt: string;
  intro: { title: string; text: string[] };
  steps: { title: string; text: string }[];
  covered: { title: string; text: string };
  cost: { title: string; text: string; items: string[]; note: string };
  faqs: { q: string; a: string }[];
  other: { name: string; href: string; text: string };
}

export const partners: Record<string, Partner> = {
  lantern: {
    slug: 'lantern', name: 'Lantern', short: 'Lantern (formerly SurgeryPlus)', logo: '/images/partners/lantern.svg',
    title: 'Surgery With Lantern in Modesto, CA',
    metaTitle: 'Lantern (SurgeryPlus) Bariatric Surgery in Modesto, CA | Central California Surgery',
    description: 'Dr. Huber at Central California Surgery works with Lantern, formerly SurgeryPlus. See how the employer benefit works and how to start your weight loss surgery in Modesto.',
    eyebrow: 'Employer surgery benefit',
    lede: 'Your employer may already cover your weight loss surgery through Lantern. Dr. Huber works with Lantern, and our team helps you through every step.',
    image: '/images/stock/by-surgeons.jpg', imageAlt: 'Surgeons working together in an operating room',
    intro: {
      title: 'What is Lantern?',
      text: [
        'Lantern, formerly called SurgeryPlus, is a surgery benefit that some employers offer to their workers. It helps you find a trusted surgeon and plan your care for non-emergency surgery, including bariatric surgery.',
        'You do not pay extra to join. If your employer offers it, you are usually enrolled already. Many employers ask members to use Lantern for weight loss surgery, so it is smart to check before you book.',
      ],
    },
    steps: [
      { title: 'Check your benefit', text: 'Ask your HR team if your employer offers Lantern. Or call our office and we will help you find out.' },
      { title: 'Call us to begin', text: 'Call our office and tell us you have Lantern. We will book your first visit with Dr. Huber and explain what you need to do next.' },
      { title: 'Work with your Lantern Care Advocate', text: 'Lantern gives you a Care Advocate who guides you through the benefit and handles the plan side of things.' },
      { title: 'Have surgery and heal with us', text: 'Dr. Huber and our team take care of you before, during and after your surgery, with follow-up visits to keep you on track.' },
    ],
    covered: {
      title: 'Which surgeries can Lantern cover?',
      text: 'Lantern covers planned, non-emergency surgery, and bariatric surgery is part of it. Dr. Huber offers gastric sleeve, gastric bypass, duodenal switch and revision surgery. What your plan covers depends on your employer, so we confirm it with you before you decide.',
    },
    cost: {
      title: 'What will it cost me?',
      text: 'For eligible procedures, Lantern aims to give you little to no out-of-pocket cost. Your own result depends on the surgery you need and on your employer’s plan.',
      items: ['Surgeon and facility fees', 'Anesthesia', 'Pre-op tests', 'Follow-up care after surgery'],
      note: 'Some plans still have a deductible or other costs, and travel help differs by employer. We go over your exact costs with you at your first visit, so there are no surprises.',
    },
    faqs: [
      { q: 'How do I know if my employer offers Lantern?', a: 'Ask your HR or benefits team, or check your benefits guide. You can also call our office and we will help you look into it.' },
      { q: 'Do I call Lantern or your office first?', a: 'Call our office first. We will book your visit and tell you what Lantern needs from you. If your employer asks you to contact Lantern before surgery, we will let you know.' },
      { q: 'Which weight loss surgeries does Dr. Huber do?', a: 'Gastric sleeve, gastric bypass, duodenal switch and revision surgery. Your plan decides which ones it covers.' },
      { q: 'Is it only for me, or for my family too?', a: 'Coverage for spouses and other dependents depends on your employer’s plan. Call us and we will help you check.' },
      { q: 'Do I need a certain BMI?', a: 'Dr. Huber reviews your health history and your BMI with you at your consult. Your plan may also have its own rules.' },
      { q: 'What if my employer does not offer Lantern?', a: 'We have other ways to pay. We accept most major insurance, and we offer cash pay and financing. Call us and we will go over your options.' },
    ],
    other: { name: 'BARInet', href: '/barinet', text: 'Your employer may use BARInet instead. We work with BARInet too.' },
  },
  barinet: {
    slug: 'barinet', name: 'BARInet', short: 'BARInet', logo: '/images/partners/barinet.png',
    title: 'Surgery With BARInet in Modesto, CA',
    metaTitle: 'BARInet Bariatric Surgery in Modesto, CA | Central California Surgery',
    description: 'Central California Surgery works with BARInet, a national network for employer bariatric benefits. Learn how it works and how to start with Dr. Huber in Modesto.',
    eyebrow: 'Employer bariatric network',
    lede: 'If your health plan uses BARInet for weight loss surgery, you can have your care with Dr. Huber in Modesto. We guide you from first call to follow-up.',
    image: '/images/stock/by-surgeons.jpg', imageAlt: 'Surgeons working together in an operating room',
    intro: {
      title: 'What is BARInet?',
      text: [
        'BARInet is a national network of bariatric surgery programs. Employers use it to give their workers a weight loss surgery benefit with approved surgeons and facilities.',
        'Central California Surgery is part of the network. If your plan uses BARInet, you can choose Dr. Huber and stay close to home.',
      ],
    },
    steps: [
      { title: 'Check your plan', text: 'Look in your benefits guide, or ask your HR team if your plan uses BARInet for bariatric surgery.' },
      { title: 'Call our office', text: 'Tell us you have BARInet. We will book your first visit with Dr. Huber and explain the next steps.' },
      { title: 'We help with the plan side', text: 'Our team helps you with the approvals and paperwork your plan asks for, so you know what to expect.' },
      { title: 'Surgery and follow-up', text: 'Dr. Huber takes care of you before, during and after surgery, with regular visits to help you reach your goals.' },
    ],
    covered: {
      title: 'Which surgeries can BARInet cover?',
      text: 'Dr. Huber offers gastric sleeve, gastric bypass, duodenal switch and revision surgery. Each employer sets its own benefit, so we confirm what your plan covers before you decide.',
    },
    cost: {
      title: 'What will it cost me?',
      text: 'Your cost depends on how your employer set up the benefit. Many members pay little or nothing out of pocket for eligible surgery, but some plans have a deductible or other costs.',
      items: ['Surgeon and facility fees', 'Anesthesia', 'Pre-op tests', 'Follow-up care after surgery'],
      note: 'We check your plan and explain your costs at your first visit, before you commit to anything.',
    },
    faqs: [
      { q: 'How do I know if my plan uses BARInet?', a: 'Check your benefits guide or ask your HR team. You can also call our office and we will help you find out.' },
      { q: 'Do I call BARInet or your office first?', a: 'Call our office first. We will book your visit and tell you what your plan needs from you.' },
      { q: 'Which surgeries does Dr. Huber do?', a: 'Gastric sleeve, gastric bypass, duodenal switch and revision surgery. Your plan decides what it covers.' },
      { q: 'Do I need a certain BMI?', a: 'Dr. Huber reviews your health history and BMI with you at your consult. Your plan may also have its own rules.' },
      { q: 'What if my plan does not use BARInet?', a: 'We accept most major insurance, and we offer cash pay and financing. Call us and we will go over your options.' },
    ],
    other: { name: 'Lantern', href: '/lantern', text: 'Your employer may offer Lantern (formerly SurgeryPlus). We work with Lantern too.' },
  },
};
