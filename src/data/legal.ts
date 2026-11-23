/** Legal pages. Written in plain English for Central California Surgery. Have the practice's attorney review before launch. */
export type LegalSection = { h: string; p?: string[]; ul?: string[] };
export type LegalPage = { slug: string; title: string; lede: string; updated: string; meta: string; sections: LegalSection[] };

const contact = 'Call us at (209) 248-7168 or write to Central California Surgery, 1001 Sylvan Avenue, Building A, Modesto, CA 95350.';

export const legalPages: LegalPage[] = [
  {
    slug: 'your-privacy',
    title: 'Privacy Policy',
    lede: 'How Central California Surgery handles information you share on this website.',
    updated: 'November 23, 2026',
    meta: 'Privacy Policy for the Central California Surgery website in Modesto, CA. What we collect, how we use it and your choices.',
    sections: [
      { h: 'Who we are', p: ['This website is run by Central California Surgery, a bariatric and general surgery practice at 1001 Sylvan Avenue, Building A, Modesto, CA 95350. In this policy, "we" and "us" mean Central California Surgery.'] },
      { h: 'Information we collect', p: ['We collect only what you choose to send us and a small amount of technical data.'], ul: [
        'Details you give us: your name, phone number, email address, preferred appointment time and any message you write in our forms or send by email.',
        'Technical data: your browser type, device, pages visited and the time of your visit. This is collected only with your cookie choices (see our Cookie Policy).',
        'Records you send: referral forms and similar documents that you or another doctor send to us.',
      ] },
      { h: 'Please keep medical details out of web forms', p: ['Our website forms and email are not a secure way to share your health history. Please do not include diagnoses, test results or other private medical details. We will talk about these with you by phone or in the office.'] },
      { h: 'How we use information', ul: [
        'To answer your questions and book appointments.',
        'To process referrals from other doctors.',
        'To keep the website safe and working well.',
        'To understand which pages help patients, if you allow analytics cookies.',
        'To meet legal and insurance duties.',
      ] },
      { h: 'Your health information and HIPAA', p: ['Once you become a patient, the health information in your medical record is protected under HIPAA. Our Notice of Privacy Practices explains how we use and share that information and what your rights are. You can ask for a copy at our office.'] },
      { h: 'Who we share information with', p: ['We do not sell your personal information. We share it only with:'], ul: [
        'Service providers who help us run the website, email and scheduling, under duties to protect it.',
        'Other doctors, hospitals and insurers when needed for your care or payment, as the law allows.',
        'Authorities, when the law requires it.',
      ] },
      { h: 'Cookies and third-party content', p: ['We use cookies as described in our Cookie Policy. Some pages show videos from YouTube and maps from Google. Those companies may set their own cookies when the content loads. You can change your choices at any time with the "Cookie settings" link in the footer.'] },
      { h: 'How long we keep information', p: ['We keep website messages only as long as needed to help you and to meet legal duties. Medical records are kept as required by California law.'] },
      { h: 'Your choices and rights', p: ['You can ask us to see, correct or delete the personal information we hold from website messages. California residents may have additional rights under state privacy law. To make a request, contact us using the details below. We may need to confirm who you are first.'] },
      { h: 'Security', p: ['We use reasonable safeguards to protect information. No website or email is completely secure, so please share only what is needed.'] },
      { h: 'Children', p: ['This website is for adults. We do not knowingly collect information from children under 13 through this site.'] },
      { h: 'Changes to this policy', p: ['We may update this policy. The date at the top shows when it last changed.'] },
      { h: 'Contact us', p: [contact] },
    ],
  },
  {
    slug: 'our-terms',
    title: 'Terms & Conditions',
    lede: 'The rules for using the Central California Surgery website.',
    updated: 'November 23, 2026',
    meta: 'Terms and Conditions for using the Central California Surgery website in Modesto, CA.',
    sections: [
      { h: 'Using this website', p: ['By using this website you agree to these terms. If you do not agree, please do not use the site.'] },
      { h: 'For information only', p: ['Everything on this website, including articles, videos, recipes and calculators, is for general education. It is not medical advice and does not replace a visit with a doctor. Reading this site or sending us a message does not create a doctor-patient relationship. That begins only when we agree to treat you.'] },
      { h: 'In an emergency', p: ['If you think you are having a medical emergency, call 911 or go to the nearest emergency room. Do not use this website or its forms for urgent problems.'] },
      { h: 'Results are different for every person', p: ['Patient stories, reviews and videos show individual experiences. Results vary based on your health, your surgery and how closely you follow your care plan. Surgery has risks, and your surgeon will explain them to you.'] },
      { h: 'Forms and messages', p: ['Please keep private medical details out of website forms and email. We cannot promise that a message sent through the website will be read right away. For anything time-sensitive, call us.'] },
      { h: 'Links to other websites', p: ['We link to outside sites such as financing partners, support groups and educational resources. We do not control them and are not responsible for their content or privacy practices.'] },
      { h: 'Our content', p: ['The text, images, logos and design on this site belong to Central California Surgery or its licensors. You may view and print pages for your own personal use. Please do not copy, sell or republish our content without written permission.'] },
      { h: 'Acceptable use', ul: ['Do not try to break, overload or gain unauthorized access to the site.', 'Do not use the site to send spam or harmful code.', 'Do not submit false information or information about another person without permission.'] },
      { h: 'No warranty', p: ['We work to keep this site accurate and available, but we provide it "as is." Information may be out of date, and we do not promise the site will always be error-free or uninterrupted.'] },
      { h: 'Limit of liability', p: ['To the fullest extent the law allows, Central California Surgery is not liable for losses that come from using this website or relying on its content. This does not limit any rights you have as a patient under California law.'] },
      { h: 'Governing law', p: ['These terms follow the laws of the State of California. Any dispute about the use of this website will be handled in the courts located in California.'] },
      { h: 'Changes', p: ['We may update these terms from time to time. Using the site after a change means you accept the new terms.'] },
      { h: 'Contact us', p: [contact] },
    ],
  },
  {
    slug: 'accessibility-statement',
    title: 'Accessibility Statement',
    lede: 'Our goal is a website that everyone can use.',
    updated: 'November 23, 2026',
    meta: 'Accessibility statement for the Central California Surgery website in Modesto, CA, and how to ask for help.',
    sections: [
      { h: 'Our commitment', p: ['Central California Surgery wants every patient and visitor to use this website with ease, including people who use screen readers, keyboards, voice control or other assistive tools. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.'] },
      { h: 'What we do', ul: [
        'Use clear headings and a logical page order.',
        'Make all menus, forms and buttons usable with a keyboard.',
        'Show a visible focus outline when you tab through the page.',
        'Describe meaningful images with text.',
        'Use readable text sizes and strong color contrast.',
        'Respect the "reduce motion" setting on your device.',
      ] },
      { h: 'Known limits', p: ['Some older documents, such as PDF forms, and some content from other websites, such as embedded videos and maps, may not be fully accessible yet. We are working to improve them.'] },
      { h: 'Need help or want to report a problem?', p: ['If you have trouble using any part of this site, or you need information in another format, please tell us. We will work with you to help you get what you need, and we will use your feedback to improve.', contact] },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    lede: 'What cookies are, which ones we use, and how to change your choices.',
    updated: 'November 23, 2026',
    meta: 'Cookie Policy for the Central California Surgery website in Modesto, CA. Learn which cookies we use and how to manage your choices.',
    sections: [
      { h: 'What cookies are', p: ['Cookies are small text files that a website saves in your browser. They help a site work, remember your choices and, when you allow it, show us how the site is used.'] },
      { h: 'The types we use', ul: [
        'Necessary: These keep the site working and remember your cookie choice. They are always on.',
        'Analytics: These help us understand which pages are useful. They are off unless you turn them on.',
        'Videos and maps: Pages that show YouTube videos or Google Maps may let those companies set cookies. These are off unless you turn them on.',
      ] },
      { h: 'Your choices', p: ['When you first visit, a small banner lets you accept all, reject extra cookies, or customize. You can change your mind at any time by selecting "Cookie settings" in the footer of any page.', 'You can also block or delete cookies in your browser settings. If you do, some parts of the site may not work as well.'] },
      { h: 'How long your choice lasts', p: ['We save your choice in your browser so we do not have to ask on every page. It stays until you clear your browser data or change it.'] },
      { h: 'Contact us', p: [contact] },
    ],
  },
];

export const legalBySlug = Object.fromEntries(legalPages.map((p) => [p.slug, p]));
