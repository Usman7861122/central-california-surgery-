import type { ServiceContent } from './serviceContent';
import { site } from './site';

/** Text marked "live site" follows centralcaliforniasurgery.com. Everything else is general patient
 *  education and needs review by Dr. Huber before launch. */
const areaNote = 'Patients are welcome from across Modesto, Ceres, Turlock, Manteca, Stockton, Fresno and the greater Central Valley.';
const areas = ['Modesto', 'Stockton', 'Fresno', 'Turlock', 'Ceres', 'Manteca', 'Merced', 'Tracy'];
const local = (topic: string): ServiceContent['local'] => ({
  title: `${topic} in Modesto, CA`,
  text: [
    `Central California Surgery is at 1001 Sylvan Avenue, Building A, in Modesto. Patients also come from Stockton, Fresno and nearby Central Valley towns for ${topic.toLowerCase()}.`,
    'Start with a consultation. We will explain your options in plain words and help you check your insurance benefits.',
  ],
  areas,
});
const insuranceFaq = { q: 'Does insurance cover it?', a: 'We accept all major insurances, including Aetna, Blue Cross, Blue Cross Blue Shield, Cigna, Humana, Medi-Cal and Medicare. Call our office and we will check your benefits.' };
const startFaq = { q: 'How do I get started?', a: `Book a consultation. Call ${site.phone} or use the form on this page, and our team will guide you through each step.` };

export const more: Record<string, ServiceContent> = {
  'gastric-sleeve': {
    title: 'Gastric Sleeve Surgery in Modesto, CA',
    metaTitle: 'Gastric Sleeve Surgery in Modesto, CA',
    metaDescription: 'Gastric sleeve weight loss surgery in Modesto, CA with Dr. Andy Huber. Learn the benefits, expected weight loss, recovery and how to start. Call (209) 248-7168.',
    eyebrow: 'Weight loss surgery',
    lede: 'Gastric sleeve is a popular weight loss surgery known for steady results and low rates of complications. Our surgeons help people living with obesity lower their health risks and take back their lives.',
    areaNote,
    photos: [
      { src: '/images/stock/sl-stomach.jpg', alt: "A doctor pointing to a stomach model beside a tablet showing the structure of the stomach", pos: '50% 40%' },
      { src: '/images/stock/sl-measure.jpg', alt: "A nutritionist measuring a patient's waist during a weight loss consultation", pos: '45% 40%' },
      { src: '/images/stock/sl-walk.jpg', alt: "A smiling woman walking in a sunny park while holding small pink hand weights", pos: '50% 40%' },
    ],
    glance: [
      { title: 'Who it is for', text: 'Like other weight loss surgery, it is reserved for people living with obesity. It lowers the risk of health problems that often come with it.' },
      { title: 'What to expect', text: 'Most patients lose about 60% of their excess weight, gradually, over about 18 months.' },
      { title: 'Recovery', text: 'Some patients go home the same day. Others stay a day or two. Most return to work in two to four weeks.' },
    ],
    whatIs: {
      title: 'What is gastric sleeve surgery?',
      text: [
        'Gastric sleeve surgery makes your stomach smaller, in the shape of a sleeve. A smaller stomach means smaller portions and less hunger.',
        'Like other weight loss surgery, it is reserved for people living with obesity. It reduces the risk of harmful health problems that often develop with obesity.',
        'Our team has deep experience with this surgery and a reputation for successful weight loss with low rates of complications.',
      ],
    },
    candidates: {
      title: 'Is gastric sleeve right for you?',
      text: 'Your surgeon will look at your health, your history and your goals before recommending any operation. Here is what patients often value about the sleeve.',
      oftenLabel: 'Often a good fit if you',
      mayLabel: 'Why patients choose it',
      often: ['Are living with obesity', 'Want to lower the health risks that come with obesity', 'Prefer a surgery with no rerouting of the intestines', 'Are ready to build new eating and exercise habits'],
      may: ['Less hunger', 'A shorter operation than gastric bypass', 'No dumping syndrome', 'No adjustments needed', 'No foreign object left in the body'],
    },
    local: local('Gastric sleeve surgery'),
    benefits: {
      title: 'Why patients choose the sleeve',
      text: 'The sleeve is simpler than some other weight loss operations. Here is what that means for you.',
      items: [
        { title: 'Less hunger', text: 'With a smaller stomach, many patients feel less hungry and feel full sooner.' },
        { title: 'Shorter operation', text: 'The operation takes less time than gastric bypass.' },
        { title: 'No rerouting', text: 'Your intestines are not rerouted, and there is no dumping syndrome.' },
        { title: 'Steady weight loss', text: 'Weight comes off gradually over about 18 months, with no adjustments needed.' },
      ],
    },
    recovery: {
      title: 'Recovery after gastric sleeve',
      text: 'Recovery is different for each patient. Your surgeon will go over what to expect before you leave.',
      steps: [
        { label: 'Before surgery', title: 'Get ready', text: 'Learn about the surgery, finish your insurance requirements and follow your pre-op diet. Our team guides you through each step.' },
        { label: 'Hospital', title: 'Same day or a day or two', text: 'Some patients go home the same day. Others spend a day or two in the hospital.' },
        { label: 'First days', title: 'Sip, walk and rest', text: 'Sip liquids all day to stay hydrated. Walk, but do not lift anything heavy. You may have pain medicine and medicine to lower stomach acid. Bowel movements may be difficult or painful at first.' },
        { label: 'Weeks 2 to 4', title: 'Back to work', text: 'Most patients return to work two to four weeks after surgery, depending on healing and physical demands. Avoid hot tubs for three weeks, because they can raise the risk of infection.' },
        { label: 'Long term', title: 'Keep healthy habits', text: 'A healthy diet, regular exercise and a positive mindset keep the weight off. Daily exercise can help you do even better.' },
      ],
    },
    safety: {
      title: 'Safety and honest expectations',
      text: [
        'The sleeve helps most when you pair it with good habits. Most patients lose about 60% of their excess weight, which is different from total weight. Going back to poor eating habits can stop that loss.',
        'Every surgery has risks. Dr. Huber and our team will explain them to you before you decide. Patients who follow their care plan and keep up with follow-up visits do best.',
      ],
    },
    faqs: [
      { q: 'What is gastric sleeve surgery?', a: 'It is a weight loss surgery that makes your stomach smaller. Like other weight loss surgery, it is reserved for people living with obesity, and it reduces the risk of health problems that often come with it.' },
      { q: 'What are the benefits?', a: 'Less hunger, a shorter operation than gastric bypass, no rerouting of the intestines, no dumping syndrome, no adjustments and no foreign object left in the body. Weight loss happens gradually over about 18 months.' },
      { q: 'How much weight can I expect to lose?', a: 'Most patients lose about 60% of their excess weight, which is different from total weight. Daily exercise can help you pass that mark, and going back to poor eating habits can stop it.' },
      { q: 'What does recovery look like?', a: 'Some patients go home the same day, and others stay a day or two. Sip liquids often, walk but do not lift anything heavy, and skip hot tubs for three weeks. Most people return to work in two to four weeks.' },
      insuranceFaq,
      startFaq,
    ],
  },

  'gastric-bypass': {
    title: 'Gastric Bypass Surgery in Modesto, CA',
    metaTitle: 'Gastric Bypass Surgery in Modesto, CA',
    metaDescription: 'Gastric bypass (Roux-en-Y) weight loss surgery in Modesto, CA. Learn how it works, the risks, cost options and recovery. Call (209) 248-7168.',
    eyebrow: 'Weight loss surgery',
    lede: 'Gastric bypass is the most popular weight loss surgery. Our surgeons have helped many patients lose weight and improve their health. Book a consultation to see if it is right for you.',
    areaNote,
    photos: [
      { src: '/images/stock/by-surgeons.jpg', alt: "A surgical team in blue gowns performing bariatric surgery in an operating room", pos: '45% 50%' },
      { src: '/images/stock/by-consult.jpg', alt: "A doctor taking notes while talking with a patient at a desk in a clinic", pos: '55% 40%' },
      { src: '/images/stock/by-vitamins.jpg', alt: "A bottle of vitamin supplements and bowls of pills beside fresh fruit and vegetables", pos: '50% 50%' },
    ],
    glance: [
      { title: 'A smaller pouch', text: 'The surgeon makes your stomach pouch smaller, which limits how much you can eat.' },
      { title: 'A rerouted path', text: 'A Y-shaped section of the small intestine is attached to the pouch, creating a bypass for food.' },
      { title: 'Fewer calories absorbed', text: 'The bypass limits the calories and nutrients your body takes in.' },
    ],
    whatIs: {
      title: 'What is gastric bypass?',
      text: [
        'Gastric bypass is historically the most sought-after weight loss surgery. It is reserved for people living with obesity who have not had success with non-surgical weight loss.',
        'In a Roux-en-Y gastric bypass, the surgeon makes the stomach pouch smaller. Then the surgeon reroutes the digestive system by attaching a Y-shaped section of the small intestine to the pouch.',
        'This creates a bypass for food that limits the calories and nutrients your body absorbs, and the smaller pouch restricts future food intake.',
      ],
    },
    candidates: {
      title: 'Is gastric bypass right for you?',
      text: 'Gastric bypass is a serious decision. Your surgeon will review your health and history with you, and talk through the risks and the benefits.',
      oftenLabel: 'Often discussed when you',
      mayLabel: 'Risks to understand first',
      often: ['Are living with obesity', 'Have tried non-surgical weight loss without success', 'Want a long-established surgical option', 'Are ready for lifelong healthy habits'],
      may: ['Pouch stretching over time', 'Staples coming apart', 'Nutrition, vitamin and mineral gaps', 'Narrowing where stomach and intestine meet', 'Dumping syndrome and gallstones'],
    },
    local: local('Gastric bypass surgery'),
    benefits: {
      title: 'What gastric bypass offers',
      text: 'Two changes work together: a smaller pouch and a rerouted intestine.',
      items: [
        { title: 'Feel full sooner', text: 'A smaller stomach pouch restricts how much food you can eat.' },
        { title: 'Fewer calories absorbed', text: 'The bypass limits the calories and nutrients your body takes in.' },
        { title: 'Long-established option', text: 'It is historically the most sought-after weight loss surgery.' },
        { title: 'Flexible ways to pay', text: 'Insurance, cash pay or financing through our partner Prosper.' },
      ],
    },
    recovery: {
      title: 'Healing after gastric bypass',
      text: 'A few simple steps lower the chance of problems while you heal.',
      steps: [
        { label: 'Before surgery', title: 'Plan and prepare', text: 'Meet your care team, finish your insurance steps and choose how you will cover the cost. Insurance, cash pay and financing are all options.' },
        { label: 'Surgery day', title: 'Roux-en-Y bypass', text: 'Your surgeon makes the pouch smaller and reroutes the small intestine. You get written instructions before you go home.' },
        { label: 'First days', title: 'Rest and hydrate', text: 'Take your pain medicine, drink water, rest and keep moving slowly. A cough pillow helps cushion your belly when you cough or sneeze.' },
        { label: '60 days', title: 'Protect your stomach', text: 'Take a proton pump inhibitor, such as omeprazole, for 60 days after surgery, as your surgeon directs.' },
        { label: 'Healing', title: 'Care for incisions', text: 'Avoid soaking in a bath so your incisions can heal. Keep your follow-up visits and take your vitamins.' },
      ],
    },
    safety: {
      title: 'Know the risks',
      text: [
        'There are risks after surgery. The pouch can stretch over time, and staple lines can come apart. Because the surgery limits what you absorb, you can run short on nutrients, vitamins and minerals.',
        'The connection between the stomach and small intestine can narrow, a problem called stomal stenosis. It can cause nausea, vomiting, reflux and trouble eating, and it needs dilation.',
        'Dumping syndrome happens when food moves too quickly into the small intestine. It can cause nausea, weakness, sweating, fainting and sometimes diarrhea. Gallstones can form after rapid weight loss, and your doctor can treat them with medicine.',
      ],
    },
    faqs: [
      { q: 'What is gastric bypass?', a: 'It is a weight loss surgery for people living with obesity who have not had success with non-surgical methods. The surgeon makes the stomach pouch smaller and reroutes part of the small intestine.' },
      { q: 'What are the risks?', a: 'Pouch stretching, staple lines coming apart, nutrition, vitamin and mineral gaps, stomal stenosis, dumping syndrome and gallstones. Your surgeon will explain each one before surgery.' },
      { q: 'What does gastric bypass cost?', a: 'Every patient is an individual, so every situation is different. Many insurance companies cover the procedure. You can also pay cash, or use financing. We partner with Prosper to help patients who want financing.' },
      { q: 'How can I help myself heal?', a: 'Take a proton pump inhibitor, such as omeprazole, for 60 days after surgery, take your pain medicine, drink water, rest, keep moving slowly, use a cough pillow and avoid soaking in a bath.' },
      insuranceFaq,
      startFaq,
    ],
  },

  hernia: {
    title: 'Hernia Repair in Modesto, CA',
    metaTitle: 'Hernia Repair in Modesto, CA',
    metaDescription: 'Hernia repair in Modesto, CA with Dr. Andy Huber. Learn the types, symptoms, causes and treatment options. Call (209) 248-7168.',
    eyebrow: 'General surgery',
    lede: 'A hernia happens when tissue pushes through a weak spot in a muscle wall. Our surgeons are experienced in both general and bariatric surgery, and they treat hernias every day.',
    areaNote,
    photos: [
      { src: '/images/stock/he-pain.jpg', alt: "A man sitting on a sofa holding his side in discomfort", pos: '50% 22%' },
      { src: '/images/stock/he-exam.jpg', alt: "A doctor examining a seated patient who is holding his abdomen", pos: '50% 45%' },
      { src: '/images/stock/he-walk.jpg', alt: "A man and woman walking along a park path after exercise", pos: '50% 45%' },
    ],
    glance: [
      { title: 'What it is', text: 'An organ or fatty tissue squeezes through a weak spot in the surrounding muscle or connective tissue.' },
      { title: 'The main sign', text: 'A lump or bulge in the affected area, sometimes with pain when you bend, cough or lift.' },
      { title: 'Treatment', text: 'Lifestyle changes and medicine can help. Surgery is used in severe cases, or when other methods have not worked.' },
    ],
    whatIs: {
      title: 'What is a hernia?',
      text: [
        'A hernia is the result of an organ or fatty tissue squeezing through a weak spot in a surrounding muscle or connective tissue, called fascia. It can happen in several places on the body, which is why there are many types.',
        'Our team is skilled in both general and bariatric surgery and has extensive experience treating hernias. If you notice symptoms, contact us so you can get the right treatment.',
      ],
    },
    candidates: {
      title: 'Types and symptoms',
      text: 'The most common types are listed here. If you notice a lump or any of these symptoms, see a doctor right away.',
      oftenLabel: 'Common types',
      mayLabel: 'Symptoms to watch for',
      often: ['Inguinal: the inner groin, more common in men', 'Incisional: at a past surgery cut, common in older or inactive patients', 'Femoral: the outer groin, common in women', 'Umbilical: the belly button', 'Hiatal: the upper stomach, near the diaphragm'],
      may: ['A lump or bulge', 'Pain when bending, coughing or lifting', 'Weakness, pressure or a heavy feeling in the belly', 'Burning, aching or gurgling at the bulge', 'Acid reflux, chest pain or trouble swallowing (hiatal)'],
    },
    local: local('Hernia repair'),
    benefits: {
      title: 'Why get treated',
      text: 'A hernia rarely goes away by itself, so an exam is the first step.',
      items: [
        { title: 'A clear answer', text: 'Your surgeon examines you and tells you which type of hernia you have.' },
        { title: 'Options that fit', text: 'Treatment can include lifestyle changes, medicine or surgery, depending on severity.' },
        { title: 'Experienced surgeons', text: 'Our team is skilled in both general and bariatric surgery.' },
        { title: 'Help with causes', text: 'We talk through the things that put pressure on your belly, so you can protect your repair.' },
      ],
    },
    recovery: {
      title: 'Causes, treatment and healing',
      text: 'What puts pressure on your belly matters before and after treatment.',
      steps: [
        { label: 'Causes', title: 'Pressure and weak muscle', text: 'All hernias come from pressure on an opening or a weak muscle. Heavy lifting, diarrhea or constipation, and constant coughing or sneezing can all raise that pressure.' },
        { label: 'Risk factors', title: 'Other causes of weak muscle', text: 'Smoking, obesity and poor nutrition can also weaken muscle.' },
        { label: 'Exam', title: 'Your assessment', text: 'Your doctor looks at how severe the hernia is and chooses the treatment that fits.' },
        { label: 'Treatment', title: 'Diet, medicine or surgery', text: 'Options include lifestyle changes, mainly in diet, medicine, and surgery in severe cases or when other methods have not worked.' },
        { label: 'After surgery', title: 'Follow your plan', text: 'Your surgeon will give you written instructions about activity, lifting and follow-up visits.' },
      ],
    },
    safety: {
      title: 'When to call us',
      text: [
        'See a doctor right away if you notice a lump or bulge, or if you have pain, pressure or a heavy feeling in your belly. For a hiatal hernia, acid reflux, chest pain or trouble swallowing are signs to get checked.',
        'Surgery is not needed for every case. Your doctor will explain whether lifestyle changes, medicine or surgery is best for you, and will go over the risks of any operation.',
      ],
    },
    faqs: [
      { q: 'What is a hernia?', a: 'A hernia is an organ or fatty tissue squeezing through a weak spot in the surrounding muscle or fascia. It can happen in many places, so there are several types.' },
      { q: 'What causes hernias?', a: 'Pressure on an opening or a weak muscle. Heavy lifting, diarrhea or constipation, and constant coughing or sneezing raise the pressure. Smoking, obesity and poor nutrition can weaken muscle.' },
      { q: 'How do I know if I have one?', a: 'The most common sign is a lump or bulge. You may also feel pain when bending, coughing or lifting, or a heavy, pressured feeling in your belly. See your doctor right away.' },
      { q: 'How is a hernia treated?', a: 'Your doctor looks at how severe it is. Options include lifestyle changes, mainly in diet, medicine, and surgery in severe cases or when other methods have not worked.' },
      insuranceFaq,
      startFaq,
    ],
  },

  'acid-reflux': {
    title: 'Acid Reflux Surgery in Modesto, CA',
    metaTitle: 'Acid Reflux Surgery in Modesto, CA',
    metaDescription: 'Acid reflux and heartburn treatment in Modesto, CA, from diet and medicine to surgery. See Dr. Andy Huber. Call (209) 248-7168.',
    eyebrow: 'General surgery',
    lede: 'Acid reflux can make a meal feel like a burning stomach ache. Our team tries diet and medicine first, and talks about surgery when other options do not give you comfort.',
    areaNote,
    photos: [
      { src: '/images/stock/re-heartburn.jpg', alt: "A man with his hand on his chest, showing heartburn discomfort", pos: '50% 12%' },
      { src: '/images/stock/re-doctor.jpg', alt: "A doctor looking at a stomach image on a laptop while a patient describes her symptoms", pos: '50% 45%' },
      { src: '/images/stock/re-meal.jpg', alt: "A plate of roasted chicken with grilled vegetables and fresh cucumber", pos: '50% 50%' },
    ],
    glance: [
      { title: 'What it is', text: 'Gastric fluid moves up from your stomach into your esophagus and causes a burning feeling, known as heartburn.' },
      { title: 'First steps', text: 'Smaller meals, a gap before lying down, exercise, and medicine often help.' },
      { title: 'Surgery', text: 'Surgery is often the last resort, for when medicine cannot give you comfort and reflux affects your quality of life.' },
    ],
    whatIs: {
      title: 'What causes acid reflux?',
      text: [
        'Acid reflux happens when gastric fluid from your stomach moves up into your esophagus. It causes a burning feeling in the upper belly and chest, which is why it is called heartburn.',
        'It is usually caused by a hiatal hernia in the stomach. This happens when part of the stomach pushes up through the diaphragm and cannot keep acid from entering the esophagus.',
        'Other risks include lying down after a large meal and being overweight. Citrus, spices and fatty foods can add to the risk.',
      ],
    },
    candidates: {
      title: 'Symptoms and when surgery is discussed',
      text: 'Many people manage reflux with diet and medicine. If those do not give you comfort, ask us whether surgery is an option for you.',
      oftenLabel: 'Common symptoms',
      mayLabel: 'Surgery may be discussed when',
      often: ['Heartburn, a burning feeling in the chest and throat', 'A bitter, acid taste in the throat or mouth', 'Bloating and burping', 'Endless hiccups'],
      may: ['Medicine does not give you comfort', 'Reflux affects your quality of life', 'A hiatal hernia is the cause', 'Diet and lifestyle changes were not enough'],
    },
    local: local('Acid reflux treatment'),
    benefits: {
      title: 'How we help',
      text: 'We use the gentlest treatment that works for you, and move to surgery only when it makes sense.',
      items: [
        { title: 'Diet and habits', text: 'Smaller, more frequent meals and no eating 2 to 3 hours before lying down can help.' },
        { title: 'Medicine', text: 'We can prescribe stronger medicine if over-the-counter products do not work.' },
        { title: 'Surgery if needed', text: 'Surgery is a last resort, used after other treatments have been tried.' },
        { title: 'Honest guidance', text: 'We exhaust other options before recommending surgery.' },
      ],
    },
    recovery: {
      title: 'Treatment options, step by step',
      text: 'Most people start with the first two steps. Here is the usual path.',
      steps: [
        { label: 'Step 1', title: 'Change what and when you eat', text: 'Eat smaller meals more often. Avoid eating at least two to three hours before lying down. Diet and exercise can help too, and foods with citrus, spices or high fat may add to reflux.' },
        { label: 'Step 2', title: 'Try medicine', text: 'Over-the-counter products such as Mylanta, Rolaids, Maalox and Tums help many people. They can have side effects, such as constipation or diarrhea. If they do not work, we can prescribe stronger medicine.' },
        { label: 'Step 3', title: 'Talk about surgery', text: 'If medicine cannot give you comfort, ask us whether surgery is an option for you.' },
        { label: 'Surgery', title: 'Two approaches', text: 'One places a titanium ring around the lower end of the esophagus to stop acid from backing up. The other creates an artificial valve from your stomach to fix a hiatal hernia.' },
        { label: 'After surgery', title: 'Follow your plan', text: 'Your surgeon will give you written instructions about eating, activity and follow-up visits.' },
      ],
    },
    safety: {
      title: 'Honest expectations',
      text: [
        'Surgery is often the last resort for acid reflux. Lifestyle changes and medicine are successful for many people, so our team exhausts all other options before recommending surgery.',
        'Over-the-counter medicines can cause side effects such as constipation or diarrhea, which vary from person to person. If you have any symptom that worries you, make an appointment with us right away.',
      ],
    },
    faqs: [
      { q: 'What causes acid reflux?', a: 'It is usually caused by a hiatal hernia in the stomach. Lying down after a big meal, being overweight, and foods with citrus, spices or high fat can add to the risk.' },
      { q: 'What are the symptoms?', a: 'The most common symptom is heartburn, a burning feeling in the chest and throat. Some people have a bitter acid taste, bloating, burping or endless hiccups.' },
      { q: 'Can I treat acid reflux with diet?', a: 'Often, yes. Eat smaller meals more often, avoid eating for at least two to three hours before lying down, and keep up diet and exercise.' },
      { q: 'Can medicine help?', a: 'Over-the-counter products such as Mylanta, Rolaids, Maalox and Tums help many people, although they can cause constipation or diarrhea. If they do not work, we can prescribe more effective medicine.' },
      { q: 'Is surgery available?', a: 'Yes, but it is often the last resort. One surgery places a titanium ring around the lower esophagus. The other creates an artificial valve from your stomach to fix a hiatal hernia.' },
      insuranceFaq,
      startFaq,
    ],
  },
  'weight-loss': {
    title: 'Weight Loss Surgery in Modesto, CA',
    metaTitle: 'Weight Loss Surgery in Modesto, CA',
    metaDescription: 'Weight loss (bariatric) surgery in Modesto, CA with Dr. Andy Huber. Compare gastric sleeve, gastric bypass and duodenal switch, see who qualifies and how to start. Call (209) 248-7168.',
    eyebrow: 'Weight loss surgery',
    lede: 'Weight loss can change your health and your quality of life. Our team has years of experience with several types of weight loss surgery, and we take time to understand what is right for you.',
    areaNote,
    photos: [
      { src: '/images/stock/wl-robotic.jpg', alt: 'A surgeon at a robotic console in a modern operating room', pos: '70% 40%' },
      { src: '/images/stock/wl-consult.jpg', alt: 'A doctor and a patient with a scale and a weight loss board during a consultation', pos: '50% 40%' },
      { src: '/images/stock/wl-active.jpg', alt: 'A smiling woman hiking on a mountain trail with trekking poles', pos: '70% 30%' },
    ],
    glance: [
      { title: 'Who it is for', text: 'Often a BMI above 40, or above 35 with serious weight-related health risks. Your surgeon will review your full health picture.' },
      { title: 'Our options', text: 'Gastric sleeve, gastric bypass, duodenal switch and revision surgery, done with robotic or laparoscopic methods.' },
      { title: 'Cost and coverage', text: 'Many insurers cover weight loss surgery. We also offer cash pay and financing options.' },
    ],
    whatIs: {
      eyebrow: 'The basics',
      title: 'What is weight loss surgery?',
      text: [
        'Weight loss surgery, also called bariatric surgery, changes your digestive system so you eat less and feel full sooner. It is usually considered after other weight loss attempts have not worked.',
        'For many people it works better over the long term than diet and exercise alone. It is also known to lower, or even remove, the risk of type 2 diabetes.',
        'Obesity means excess body fat that can harm your health. Doctors treat it as a disease. Morbid obesity is a BMI of 40 or more.',
      ],
    },
    candidates: {
      title: 'Is weight loss surgery right for you?',
      text: 'It is not for everyone. Surgery has risks, and it works best with lasting changes to how you eat and move. We will assess your needs first.',
      oftenLabel: 'You may qualify if you have',
      mayLabel: 'Health problems that may improve',
      often: ['A BMI above 40', 'A BMI above 35 with serious weight-related health risks', 'Tried other ways to lose weight without lasting results', 'Readiness to change your eating and exercise habits'],
      may: ['Type 2 diabetes', 'High blood pressure', 'High cholesterol', 'Heart disease risk', 'Arthritis and joint pain', 'Breathing problems', 'Gallbladder disease'],
    },
    local: local('Weight loss surgery'),
    benefits: {
      title: 'Our weight loss options',
      text: 'Each operation works in a different way. Your surgeon will help you choose.',
      items: [
        { title: 'Gastric sleeve', text: 'A smaller, sleeve-shaped stomach. Less hunger and steady weight loss.' },
        { title: 'Gastric bypass', text: 'A small stomach pouch and a rerouted intestine. A long-proven option.' },
        { title: 'Duodenal switch', text: 'A sleeve plus a longer bypass. Often discussed for a higher BMI or diabetes.' },
        { title: 'Revision surgery', text: 'A follow-up operation for patients whose earlier surgery needs a fix.' },
      ],
    },
    recovery: {
      title: 'Your weight loss surgery pathway',
      text: 'We guide you from your first visit through long-term follow-up.',
      steps: [
        { label: 'Step 1', title: 'Consultation', text: 'Meet Dr. Huber. We review your health, your history and your goals, and answer your questions.' },
        { label: 'Step 2', title: 'Insurance and approval', text: 'We help you check your benefits and finish any requirements your insurer has.' },
        { label: 'Step 3', title: 'Prepare', text: 'Learn about the surgery and follow your pre-op plan, including diet changes.' },
        { label: 'Step 4', title: 'Surgery', text: 'Most operations use small incisions, with robotic or laparoscopic methods.' },
        { label: 'Step 5', title: 'Heal and follow up', text: 'We check your progress and support your new habits long after surgery.' },
      ],
    },
    safety: {
      title: 'Safety and honest expectations',
      text: [
        'Every surgery has risks. Dr. Huber will explain them clearly before you decide. Diet and exercise are still needed after surgery.',
        'We accept all major insurances. If you pay yourself, we can talk about cash pay and financing through Prosper.',
      ],
    },
    faqs: [
      { q: 'Who qualifies for weight loss surgery?', a: 'Often people with a BMI above 40, or above 35 with serious weight-related health risks. Your surgeon will assess your full health picture.' },
      { q: 'Which weight loss surgery is best?', a: 'It depends on your health, your goals and your history. We offer gastric sleeve, gastric bypass, duodenal switch and revision surgery, and we help you compare them.' },
      { q: 'Will I still need diet and exercise?', a: 'Yes. Surgery is a tool. Healthy eating and regular movement keep the weight off.' },
      { q: 'How can I pay for surgery?', a: 'Many insurers cover it, you can pay in cash, or you can use financing through Prosper.' },
      startFaq,
    ],
  },
};
