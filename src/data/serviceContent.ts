import { site } from './site';

export type ServiceContent = {
  title: string;            // H1, with city for local SEO
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lede: string;
  areaNote: string;
  photos: { src: string; alt: string; pos?: string }[]; // 3 Shutterstock photos: hero, candidates, recovery
  glance: { title: string; text: string }[];
  whatIs: { eyebrow?: string; title: string; text: string[] };
  candidates: { title: string; text: string; often: string[]; may: string[]; oftenLabel?: string; mayLabel?: string };
  local: { title: string; text: string[]; areas: string[] };
  benefits: { title: string; text: string; items: { title: string; text: string }[] };
  recovery: { title: string; text: string; steps: { label: string; title: string; text: string }[] };
  safety: { title: string; text: string[] };
  faqs: { q: string; a: string }[];
};

/** Content for each service page. Text marked "from live site" follows centralcaliforniasurgery.com.
 *  The rest is general patient education and needs review by Dr. Huber before launch. */
export const serviceContent: Record<string, ServiceContent> = {
  'duodenal-switch': {
    title: 'Duodenal Switch in Modesto, CA',
    metaTitle: 'Duodenal Switch in Modesto, CA',
    metaDescription: 'Duodenal switch weight loss surgery in Modesto, CA with Dr. Andy Huber. Learn how it works, who it may help, what to eat afterward and how to start. Call (209) 248-7168.',
    eyebrow: 'Advanced weight loss surgery',
    lede: 'A duodenal switch makes the stomach smaller and reroutes part of the small intestine. Together, these changes support strong, lasting weight loss. Dr. Andy Huber performs it with minimally invasive techniques.',
    areaNote: 'Patients are welcome from across Modesto, Ceres, Turlock, Manteca, Stockton, Fresno and the greater Central Valley.',
    photos: [
      { src: '/images/stock/ds-surgical-team.jpg', alt: 'A surgical team performing minimally invasive surgery while watching a monitor', pos: '50% 45%' },
      { src: '/images/stock/ds-consultation.jpg', alt: 'A doctor talking with a patient in a clinic about their care plan', pos: '50% 40%' },
      { src: '/images/stock/ds-protein-meal.jpg', alt: 'A bowl of grilled chicken breast with fresh salad greens, a protein-first meal', pos: '50% 50%' },
    ],
    glance: [
      { title: 'A smaller stomach', text: 'Part of the stomach is removed. The valve that releases food stays in place.' },
      { title: 'A rerouted intestine', text: 'The small intestine is divided into two sections. One receives food, and the other carries bile and digestive juices.' },
      { title: 'Fewer calories absorbed', text: 'Food skips most of the reworked intestine, so your body takes in fewer calories.' },
    ],
    whatIs: {
      title: 'What is a duodenal switch?',
      text: [
        'Many adults do not know how many weight loss options exist. The duodenal switch is one of the more advanced ones. It removes a large part of the stomach and reworks the small intestine.',
        'The stomach valve is kept, so food still leaves the stomach in a natural way. The small intestine is then divided into two sections. One connects to the stomach valve to receive food. The other connects further down and carries bile and digestive juices. Food bypasses most of the reworked intestine, which limits how many calories you absorb.',
        'The smaller stomach and the bypass work together to support weight loss.',
      ],
    },
    candidates: {
      title: 'Is a duodenal switch right for you?',
      text: 'This surgery is often discussed for patients with a higher BMI or type 2 diabetes. The right choice depends on your health, your goals and your history, so Dr. Huber will review everything with you before any decision.',
      often: ['A higher BMI', 'Type 2 diabetes', 'Weight loss that has stalled with other methods', 'Willingness to take vitamins and attend follow-up visits for life'],
      may: ['Type 2 diabetes', 'High blood pressure', 'Sleep apnea', 'Joint pain', 'Acid reflux', 'Low energy and everyday mobility'],
    },
    local: {
      title: 'Duodenal switch in Modesto, CA',
      text: [
        'Central California Surgery is at 1001 Sylvan Avenue, Building A, in Modesto. Patients also come from Stockton, Fresno and nearby Central Valley towns for bariatric care.',
        'Start with a consultation or an online seminar. We will explain your options in plain words and help you check your insurance benefits.',
      ],
      areas: ['Modesto', 'Stockton', 'Fresno', 'Turlock', 'Ceres', 'Manteca', 'Merced', 'Tracy'],
    },
    benefits: {
      title: 'What makes this surgery different',
      text: 'The duodenal switch combines two ideas in one operation: a smaller stomach and a shorter path for absorbing food.',
      items: [
        { title: 'Strong, lasting results', text: 'A smaller stomach plus a bypass supports steady weight loss over time.' },
        { title: 'Less stomach acid', text: 'The part of the stomach that makes acid is removed, not just stapled. This lowers the risk of painful ulcers.' },
        { title: 'The stomach valve stays', text: 'Food still leaves the stomach through its natural valve, so the stomach keeps working.' },
        { title: 'Small incisions', text: 'Minimally invasive surgery means smaller cuts and a gentler start to recovery.' },
      ],
    },
    recovery: {
      title: 'Recovery and eating after surgery',
      text: 'Your care team gives you a clear plan for each stage. Here is the general path.',
      steps: [
        { label: 'Right after', title: 'Rest and watch', text: 'Your team checks your recovery and helps you start moving. You go home with written instructions.' },
        { label: 'Early weeks', title: 'Follow your diet plan', text: 'You move through food stages as your body heals. Your plan explains what to eat and when.' },
        { label: 'Eating well', title: 'Protein first', text: 'Eat enough protein, such as fish, poultry, lean meat, eggs and cheese. Protein helps you heal and can help prevent hair loss. Then add vegetables and fruit.' },
        { label: 'About 18 months', title: 'Your stomach adjusts', text: 'The stomach usually stretches a little to hold normal-sized meals. It never returns to its original size.' },
        { label: 'For life', title: 'Vitamins and check-ups', text: 'Because the intestine is rerouted, you need daily vitamins and regular blood tests. We stay with you for the long term.' },
      ],
    },
    safety: {
      title: 'Safety and honest expectations',
      text: [
        'Every surgery has risks, and Dr. Huber will go over them with you. Because less food is absorbed, vitamin and nutrient levels need lifelong attention.',
        'Many people worry about having part of the stomach removed. It is a common worry, and it should not be a deal breaker if the surgery can help you lose weight.',
        'A duodenal switch is not the only answer. A gastric sleeve or gastric bypass may fit you better, and we will explain each option so you can choose with confidence.',
      ],
    },
    faqs: [
      { q: 'Do I have to have part of my stomach removed?', a: 'Yes. The removed part is mainly acid-producing tissue. Taking it out, rather than stapling it as other procedures do, removes that acid and lowers the risk of painful ulcers. The stomach becomes a smaller version of itself and keeps working.' },
      { q: 'Will my stomach stay small?', a: 'It usually expands slightly after about 18 months so you can eat normal-sized meals, but it never returns to its original size.' },
      { q: 'What should I eat after the procedure?', a: 'Eat enough protein, such as fish, poultry, lean meat, eggs and cheese. Keep vegetables and fruit in your diet, but eat the protein first. Extra protein speeds healing and can help prevent hair loss, a common side effect.' },
      { q: 'How is it different from gastric bypass or gastric sleeve?', a: 'A sleeve only makes the stomach smaller. A bypass makes a small pouch and reroutes the intestine. A duodenal switch does both a sleeve and a longer intestinal bypass, which is why it is often discussed for patients with a higher BMI.' },
      { q: 'Does insurance cover it?', a: 'We accept all major insurances, including Aetna, Blue Cross, Blue Cross Blue Shield, Cigna, Humana, Medi-Cal and Medicare. Call our office and we will check your benefits.' },
      { q: 'How do I get started?', a: `Book a consultation or join an online seminar. Call ${site.phone} or use the form on this page, and our team will guide you through each step.` },
    ],
  },
  gallbladder: {
    title: 'Gallbladder Surgery in Modesto, CA',
    metaTitle: 'Gallbladder Surgery in Modesto, CA',
    metaDescription: 'Gallbladder surgery in Modesto, CA with Dr. Andy Huber. Learn about gallstones, tests, removal, recovery and eating afterward. Call (209) 248-7168.',
    eyebrow: 'General surgery',
    lede: 'Gallstones and gallbladder infections can cause pain that keeps coming back. When your gallbladder is not working properly, Dr. Andy Huber can remove it with minimally invasive surgery and guide you through recovery.',
    areaNote: 'Patients are welcome from across Modesto, Ceres, Turlock, Manteca, Stockton, Fresno and the greater Central Valley.',
    photos: [
      { src: '/images/stock/gb-laparoscopy.jpg', alt: 'A surgeon in blue scrubs beside a monitor showing a laparoscopic view during abdominal surgery', pos: '30% 50%' },
      { src: '/images/stock/gb-ultrasound.jpg', alt: 'A doctor holding an ultrasound probe against a patient\'s abdomen during an exam', pos: '50% 40%' },
      { src: '/images/stock/gb-meal.jpg', alt: 'A plate of baked salmon with fresh spinach and tomato salad and a lemon slice', pos: '60% 50%' },
    ],
    glance: [
      { title: 'What it does', text: 'The gallbladder is a small, pear-shaped organ under the liver. It stores bile after the liver filters it, then releases the bile into the intestine.' },
      { title: 'What can go wrong', text: 'Substances in bile can harden into gallstones. Stones can cause pain and inflammation, and sometimes infection.' },
      { title: 'What removal does', text: 'Your surgeon takes out the gallbladder. Your body keeps working well without it, because the gallbladder has limited responsibilities.' },
    ],
    whatIs: {
      eyebrow: 'The basics',
      title: 'What does the gallbladder do?',
      text: [
        'The gallbladder sits on the right side of your abdomen, under the liver. Its main job is to store bile, a fluid that helps you digest fat, until it is needed in the intestine.',
        'Gallstones are a common problem. They form when substances in bile crystallize and have trouble passing through the gallbladder. They are usually harmless, but they can cause pain and inflammation.',
        'When the gallbladder is not working properly, our surgeons can help. We see patients from Modesto, Stockton, Fresno and nearby areas.',
      ],
    },
    candidates: {
      title: 'When is gallbladder surgery needed?',
      text: 'Many gallstones cause no trouble and do not need surgery. Surgery is discussed when stones or infection cause real problems. Dr. Huber will review your symptoms and test results with you before any decision.',
      oftenLabel: 'Conditions we treat',
      mayLabel: 'Signs to tell a doctor about',
      often: ['Gallstones that cause pain and inflammation', 'Cholecystitis, an infection that can develop when a gallstone cannot move along', 'Gallstone pancreatitis, when a stone blocks the ducts that drain the pancreas', 'Gallbladder cancer, which is rare'],
      may: ['Pain in the upper right belly', 'Severe pain with fever', 'Nausea, especially after fatty meals', 'Bloating or an upset stomach', 'Yellow skin or eyes'],
    },
    local: {
      title: 'Gallbladder surgery in Modesto, CA',
      text: [
        'Central California Surgery is at 1001 Sylvan Avenue, Building A, in Modesto. Patients also come from Stockton, Fresno and nearby Central Valley towns for gallbladder care.',
        'Start with a consultation. We will explain your tests and options in plain words and help you check your insurance benefits.',
      ],
      areas: ['Modesto', 'Stockton', 'Fresno', 'Turlock', 'Ceres', 'Manteca', 'Merced', 'Tracy'],
    },
    benefits: {
      title: 'What surgery can do for you',
      text: 'Removing a gallbladder that keeps causing trouble is a common, well-understood operation.',
      items: [
        { title: 'No more gallbladder attacks', text: 'Once the gallbladder is removed, gallstones in it can no longer cause pain or infection.' },
        { title: 'Little effect on health', text: 'Removal has very little effect on your overall health, because the gallbladder has limited responsibilities.' },
        { title: 'Small incisions', text: 'Minimally invasive surgery means smaller cuts and a gentler start to recovery.' },
        { title: 'Rare complications', text: 'Complications are typically rare, and your surgeon will explain them before surgery.' },
      ],
    },
    recovery: {
      title: 'Tests, recovery and eating afterward',
      text: 'Your care team gives you a clear plan for each step. Here is the general path.',
      steps: [
        { label: 'Before surgery', title: 'Tests first', text: 'An ultrasound is the most common test. It is painless and checks for gallstones and the gallbladder wall. A HIDA scan uses a safe tracer to show whether bile flows from the liver into the gallbladder.' },
        { label: 'Surgery day', title: 'Gallbladder removal', text: 'A surgeon at Central California Surgery removes the gallbladder, a procedure called cholecystectomy. You get written instructions before you go home.' },
        { label: 'First days', title: 'Rest and move gently', text: 'Rest, take short walks and follow your pain and wound care instructions. Call us if you have a fever or pain that gets worse.' },
        { label: 'Eating again', title: 'Start light', text: 'Many people feel better with lighter, lower-fat meals at first. Bile helps digest fat, so rich foods can upset your stomach for a while. Add foods back slowly.' },
        { label: 'Follow-up', title: 'We stay with you', text: 'If you notice ongoing diarrhea or trouble digesting fat, tell us. This is an occasional, small risk, and we can help.' },
      ],
    },
    safety: {
      title: 'Safety and honest expectations',
      text: [
        'Every surgery has risks, and Dr. Huber will go over them with you. After removal, there is an occasional small risk of diarrhea or trouble absorbing fat, since bile helps digest fat. Complications are typically rare.',
        'Surgery is not the only answer for every case. Antibiotics are used when there is an infection, to stop it from spreading. An oral medicine called ursodeoxycholic acid can help dissolve gallstones and lessen symptoms.',
        'If cancer is ever found, radiation therapy and chemotherapy may be used after surgery. Gallbladder cancer is rare and hard to diagnose, and its symptoms often look like gallstones.',
      ],
    },
    faqs: [
      { q: 'What conditions are linked to the gallbladder?', a: 'The main ones are gallstones, cholecystitis (an infection that can develop when a stone cannot move along), gallstone pancreatitis (a stone blocking the ducts that drain the pancreas) and, rarely, gallbladder cancer. Gallstone pancreatitis is the most serious of these.' },
      { q: 'What tests check the gallbladder?', a: 'An ultrasound is the most common test. It is non-invasive and looks for gallstones and the gallbladder wall. A HIDA scan injects a radioactive tracer and follows it through the bile to see whether bile flows from the liver into the gallbladder. It helps show whether you have cholecystitis.' },
      { q: 'What happens if my gallbladder is removed?', a: 'Removal has very little effect on your overall health because the gallbladder has limited responsibilities. Because bile helps digest fat, there is an occasional small risk of diarrhea or fat absorption problems. Complications are typically rare.' },
      { q: 'Can gallstones be treated without surgery?', a: 'Sometimes. Gallstones are usually harmless on their own. An oral medicine called ursodeoxycholic acid can help dissolve stones and lessen symptoms, and antibiotics treat an infection. Dr. Huber will tell you if surgery is the better choice for you.' },
      { q: 'Does insurance cover it?', a: 'We accept all major insurances, including Aetna, Blue Cross, Blue Cross Blue Shield, Cigna, Humana, Medi-Cal and Medicare. Call our office and we will check your benefits.' },
      { q: 'How do I get started?', a: `Book a consultation. Call ${site.phone} or use the form on this page, and our team will guide you through each step.` },
    ],
  },
};
