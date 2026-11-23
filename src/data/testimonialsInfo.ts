/** Testimonials pages. Videos, review text, names and dates come from the live centralcaliforniasurgery.com pages.
 *  Reviews are shown as the patients wrote them (spelling kept). Intro lines marked "added" need review by Dr. Huber's team. */
import type { PatientPage } from './patientInfo';

const g = (id: string) => `https://goo.gl/maps/${id}`;

export const testimonialPages: PatientPage[] = [
  {
    slug: 'video-testimonials',
    title: 'Video Testimonials in Modesto, CA',
    crumb: 'Testimonials',
    metaDescription: 'Watch real patients of Central California Surgery in Modesto, CA share their weight loss surgery journeys in their own words.',
    eyebrow: 'Testimonials',
    lede: 'Real patients, in their own words. Watch how surgery changed their health and their lives.',
    image: '/images/stock/wl-active.jpg',
    alt: 'Active adults enjoying a walk outdoors',
    pos: '50% 40%',
    blocks: [
      {
        type: 'prose',
        eyebrow: 'Patient stories',
        title: 'Hear it from people who started where you are',
        text: [
          'Every journey begins with a first step and a lot of questions. These patients said yes to a healthier life and wanted to share what it was like.',
          'Watch a few, and then book a visit to talk about your own goals with Dr. Huber and the team.',
        ],
        image: { src: '/images/stock/nu-support.jpg', alt: 'A group of patients sitting together at a support meeting', pos: '50% 40%' },
        links: [{ label: 'Read written reviews', href: '/testimonials/written-testimonials' }, { label: 'See Google reviews', href: '/testimonials/google-reviews' }],
      },
      {
        type: 'videos',
        eyebrow: '11 patient videos',
        title: 'Watch their stories',
        items: [
          { title: 'Patient story 1', id: 'KKZjhNatzqY' },
          { title: 'Patient story 2', id: 'PUTuuKkJamI' },
          { title: 'Patient story 3', id: 'GeOLKuTqEJY' },
          { title: 'Patient story 4', id: 'Z9wRq9fsn5s' },
          { title: 'Patient story 5', id: 'VKa2Mf_Knos' },
          { title: 'Patient story 6', id: 'z0lzQaanNa4' },
          { title: 'Patient story 7', id: 'Bng2q-sCKrk' },
          { title: 'Patient story 8', id: '_IrtFJg5CZU' },
          { title: 'Patient story 9', id: 'GvRhdkQrqkA' },
          { title: 'Patient story 10', id: 'SpiJ6xLMLrg' },
          { title: 'Patient story 11', id: 'OVUxYIpN93w' },
        ],
      },
    ],
  },
  {
    slug: 'written-testimonials',
    title: 'Testimonials & Reviews in Modesto, CA',
    crumb: 'Testimonials',
    metaDescription: 'Read written reviews from Central California Surgery patients in Modesto, CA. Rated 4.92 out of 5 from 26 reviews.',
    eyebrow: 'Testimonials',
    lede: 'We are thankful for every patient who takes the time to share their experience. Rated 4.92 out of 5 from 26 reviews.',
    image: '/images/stock/blog-support.jpg',
    alt: 'Two people supporting each other',
    pos: '50% 40%',
    blocks: [
      {
        type: 'quotes',
        eyebrow: 'In their words',
        title: 'What our patients say',
        text: 'These reviews are shown as patients wrote them. Results are different for every person.',
        items: [
          { text: 'I had the Loop DS done on 5/27/20 and I’ve been down to 165 for the last 3yrs. Dr Coirin did an amazing job taking care of me. He explained everything that was going on in detail. He answered all my questions and concerns.', name: 'Sandra V.', meta: '04/17/24', stars: 5 },
          { text: 'Dr. M Coates is wonderful! Great bedside manner. Listens to his patients and their concerns. Nice to have a Dr. that is not rushing out the door making you feel like a number. His skillset is top notch. Highly recommend.', name: 'Rose Montez M.', meta: '01/23/25', stars: 5 },
          { text: 'Dr Huber is such a sweetheart, he made me feel so comfortable and at ease before my surgery.', name: 'Carina C.', meta: '12/20/23', stars: 5 },
          { text: 'Dr. Coirin is a wonderful surgeon. He took the time to answer all my questions in a caring and compassionate way. I recommend him to anyone considering gastric surgery.', name: 'Leslie C.', meta: '03/02/21', stars: 5 },
          { text: 'I am 5 years out and I have not gained my weight back. I do not want to ruin or reverse his awesome work.', name: 'Pilar L.', meta: '03/07/24', stars: 5 },
          { text: 'This has been looong over due!!! Thanks to Dr. Coats and his team I am no longer in danger of dying of obesity!!! They are a awesome team!!! I recommend them to everyone that is thinking about any weight loss surgery!!!!', name: 'Pinkie P.', meta: '12/13/19', stars: 5 },
          { text: 'Doctor Coats changed my life! I lost over 100 pounds and met my goal and then met the doctors goal for my weight. My husband had RNY by younger Dr Coats and is not diabetic anymore and has lost 80 pounds already.', name: 'Jolyne C.', meta: '11/13/19', stars: 5 },
          { text: 'I was wheel chair bound the last time I weighed before my surgery I was some where arround 370 pounds I now weigh aproxamatly 150 pounds. I would have the surgery again if I had to. I am never I repete never hungry. I love the new me.', name: 'Wendessa W.', meta: '09/18/19', stars: 5 },
          { text: 'Miss Prudence is a big help for me. I could not have done it without her help and guideance.', name: 'Esther M. R.', meta: '05/23/19', stars: 5 },
          { text: 'My visit was very informative and helpful. They explained all my options and are preparing me for my surgery. And have expressed that they will be available before during and after my transformation to a better me.', name: 'Ramon G.', meta: '08/09/18', stars: 5 },
          { text: 'I received the best care and presented with all the information and research that help me decide the right surgery to use as a tool to loose my excess weight and have a healthier future. I can’t wait to start my journey.', name: 'Dawn L.', meta: '06/13/18', stars: 5 },
          { text: 'Dr Coirin went above an beyond not only weight loss. But. My life.', name: 'Fawn H.', meta: '02/17/20', stars: 5 },
        ],
      },
    ],
  },
  {
    slug: 'google-reviews',
    title: 'Google Reviews in Modesto, CA',
    crumb: 'Testimonials',
    metaDescription: 'Read Google reviews of Central California Surgery in Modesto, CA. Rated 4.92 out of 5 from 26 reviews.',
    eyebrow: 'Testimonials',
    lede: 'Rated 4.92 out of 5 from 26 reviews. Read what patients wrote on Google, and open any review to see the original.',
    image: '/images/stock/he-exam.jpg',
    alt: 'A surgeon talking with a patient',
    pos: '50% 40%',
    blocks: [
      {
        type: 'quotes',
        eyebrow: 'Google reviews',
        title: 'Five stars from our patients',
        text: 'Each card opens the original review on Google.',
        items: [
          { text: 'The staff is so nice can’t wait for my next appointment', name: 'Shanell Brown', meta: 'Google review', stars: 5, href: g('GQvNzB3qtfEfXbkYA') },
          { text: 'Best decision I ever made! I’m 10mo out and 130lb lighter! No more medications for blood pressure, Stomach issues it anything. I feel amazing. I love my tool. Thank you Dr Coirin for changing my life and saving it.', name: 'Sandi Virk', meta: 'Google review', stars: 5, href: g('q1H6Bx2oeEJqQ8PCA') },
          { text: 'I have had a wonderful experience with Dr. Patrick Coates. He has a fantastic bedside manner and treats his patients with the utmost care, both mentally and physically I have felt cared for by his staff and him the day of my surgery. I can’t recommend him highly enough.', name: 'Gary Burns', meta: 'Google review', stars: 5, href: g('4HKTNDKdkxoiArst7') },
          { text: 'Dr Coates son will be performing my surgery. Staff is wonderful. They take the time to answer all my questions. I’ve had over 5 different people call to confirm my surgery date and to assure me I will be taken care of', name: 'Drose182', meta: 'Google review', stars: 5, href: g('4BueYPqbEUYWRie99') },
          { text: 'I truly wish i would of had my surgery sooner...never to late...Best decision i made...Dr Coates ...Thank you, your the Best in my book...God Bless u always....', name: 'Lorraine Mercado', meta: 'Google review', stars: 5, href: g('jtR5QcezY65KnxpG6') },
          { text: 'Dr Antonio Coirin is by far the best surgeon I’ve seen. He’s skilled, patient, compassionate & thoughtful at every approach. Most surgeons are all done w/you post surgery, but not him.. he’s very careful in monitoring the patient & addresses issues head-on. Dr Coirin gave me the gift of getting my life back.', name: 'Christie A', meta: 'Google review', stars: 5, href: g('egQ1t9gs2QewDNRR9') },
          { text: 'I had the gastric bypass in 2011, it changed my life for the better and then i didn’t stick to the new habits and now have gain some weight back; I am now looking into revision surgery.', name: 'Randy Limburg', meta: 'Google review', stars: 5, href: g('UA6UJcouKYcECPtq7') },
        ],
      },
    ],
  },
];

export const testimonialBySlug = Object.fromEntries(testimonialPages.map((p) => [p.slug, p]));
