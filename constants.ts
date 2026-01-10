
import { StatData, ModuleItem, Organization, QuizQuestion } from './types';

// Real Data from PSA Women and Men Fact Sheet 2024
export const PSA_LITERACY_ENROLLMENT_DATA = [
  { category: 'Func. Literacy', female: 92.9, male: 90.2 },
  { category: 'Basic Literacy', female: 97.1, male: 95.9 },
  { category: 'Elem. Completion', female: 99.8, male: 99.3 },
  { category: 'Sec. Completion', female: 84.8, male: 81.4 },
  { category: 'Elem. Enrollment', female: 88.5, male: 86.9 },
  { category: 'Sec. Enrollment', female: 87.3, male: 81.1 }
];

export const PSA_ATTAINMENT_DATA = [
  { category: 'No Grade', female: 4.1, male: 4.4 },
  { category: 'Elem. Undergrad', female: 18.7, male: 22.5 },
  { category: 'Elem. Grad', female: 10.3, male: 10.9 },
  { category: 'JHS Undergrad', female: 14.6, male: 15.9 },
  { category: 'JHS Completed', female: 20.7, male: 19.7 },
  { category: 'College Undergrad', female: 9.0, male: 7.9 },
  { category: 'College Grad', female: 14.5, male: 10.5 }
];

export const PSA_GRADUATES_BY_DISCIPLINE = [
  { category: 'Business Admin', female: 53355, male: 33263 },
  { category: 'Education Sci.', female: 52615, male: 19224 },
  { category: 'Engineering', female: 17036, male: 33719 },
  { category: 'IT-Related', female: 12437, male: 19294 },
  { category: 'Medical/Allied', female: 17383, male: 7493 }
];

export const PSA_ECONOMIC_PARTICIPATION = [
  { category: 'Labor Force (LFPR)', female: 51.2, male: 75.4 },
  { category: 'Employment Rate', female: 91.8, male: 92.5 },
  { category: 'Unemployment', female: 8.2, male: 7.5 },
  { category: 'Underemployment', female: 13.2, male: 17.7 }
];

export const MODULE_ITEMS: ModuleItem[] = [
  {
    id: 'concepts-101',
    title: 'Gender Concepts 101: Beyond the Binary',
    description: 'A comprehensive guide to understanding Sex, Gender, Identity, and Expression in the modern world.',
    type: 'Article',
    region: 'Global',
    link: 'https://www.unwomen.org/en/digital-library/multimedia/2018/12/visual-gender-identities',
    icon: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    detailedContent: `Understanding the distinction between sex and gender is the foundation of gender studies. 

### Sex vs. Gender
Sex refers to the biological attributes of humans and animals, including physical features, chromosomes, and hormones. These are typically categorized as male, female, or intersex. Gender, however, refers to the socially constructed roles, behaviors, expressions, and identities that societies consider appropriate for men and women. It influences how people perceive themselves and each other, how they act and interact, and the distribution of power and resources in society.

### The Identity Spectrum
Identity is an internal sense of self. It is not necessarily visible to others. In the modern world, we recognize that gender exists on a spectrum rather than a rigid binary. Non-binary and genderqueer identities challenge the traditional view, allowing for a more inclusive understanding of human experience.

### Why It Matters
When we confuse biological sex with social gender, we often reinforce harmful stereotypes—such as the idea that women are "naturally" more nurturing or men are "naturally" more aggressive. Recognizing gender as a social construct allows us to challenge these limitations and build a society where everyone can pursue their potential regardless of their biological traits.`,
    keyPoints: [
      'Sex is biological; Gender is a social construct and a spectrum.',
      'Gender identity is internal; Gender expression is external presentation.',
      'Binary thinking limits human potential and reinforces stereotypes.',
      'Using correct pronouns is a fundamental act of respect and inclusion.',
      'Intersex individuals highlight the biological diversity of sex beyond XX and XY.'
    ],
    references: [
      { label: 'UN Women: Gender Equality Glossary', url: 'https://trainingcentre.unwomen.org/mod/glossary/view.php?id=36' },
      { label: 'WHO: Gender and Health Framework', url: 'https://www.who.int/health-topics/gender' },
      { label: 'Planned Parenthood: Identity Explained', url: 'https://www.plannedparenthood.org/learn/gender-identity' },
      { label: 'APA: Guidelines for Transgender People', url: 'https://www.apa.org/practice/guidelines/transgender.pdf' }
    ]
  },
  {
    id: 'sogie-explained',
    title: 'Deep Dive: SOGIE Explained',
    description: 'Understanding Sexual Orientation, Gender Identity, and Expression to foster inclusivity.',
    type: 'Article',
    region: 'PH',
    link: 'https://www.amnesty.org.ph/2020/12/sogie-equality-bill-faq/',
    icon: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&q=80&w=800',
    detailedContent: `SOGIE is an acronym that helps us break down the different components of an individual's identity.

### Breaking Down the Acronym
1. **Sexual Orientation:** Describes who a person is attracted to (e.g., Heterosexual, Gay, Lesbian, Bisexual, Pansexual, Asexual).
2. **Gender Identity:** A person's deeply felt internal and individual experience of gender (e.g., Cisgender, Transgender, Non-binary).
3. **Gender Expression:** How a person presents their gender to the world through clothing, hair, voice, and behavior.

### SOGIE in the Philippine Context
In the Philippines, the SOGIE Equality Bill (Anti-Discrimination Bill) has been a subject of long-standing legislative debate. Its goal is to prevent discriminatory acts such as:
- Denial of access to public services or healthcare.
- Refusal of admission or expulsion from schools based on identity.
- Workplace discrimination, including denial of promotion or termination.

### Misconceptions
A common misconception is that SOGIE only applies to the LGBTQ+ community. In reality, **everyone has a SOGIE**. A straight, cisgender man has a sexual orientation (heterosexual) and a gender identity (man). Understanding this helps us realize that SOGIE protection is about human rights for all.`,
    keyPoints: [
      'Orientation is about attraction; Identity is about the self.',
      'Gender Expression does not always "match" Gender Identity.',
      'The SOGIE Equality Bill protects all Filipinos from discrimination.',
      'Safe spaces in schools are proven to improve student mental health.',
      'Inclusive policies lead to more productive and innovative workplaces.'
    ],
    references: [
      { label: 'Amnesty International PH: SOGIE FAQ', url: 'https://www.amnesty.org.ph/2020/12/sogie-equality-bill-faq/' },
      { label: 'Human Rights Watch: PH SOGIE Report', url: 'https://www.hrw.org/news/2023/02/14/philippines-lgbt-rights-under-attack' },
      { label: 'Metro Manila Pride: Education Resources', url: 'https://mmpride.org/resources/' },
      { label: 'UP Center for Women\'s and Gender Studies', url: 'https://cws.up.edu.ph/' }
    ]
  },
  {
    id: 'ph-legal-frameworks',
    title: 'Philippine Legal Frameworks for Gender Rights',
    description: 'Essential laws protecting women and gender rights in the Philippines every student should know.',
    type: 'Law',
    region: 'PH',
    link: 'https://pcw.gov.ph/republic-act-9710-magna-carta-of-women/',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    detailedContent: `The Philippines is a signatory to international treaties like CEDAW and has enacted several landmark domestic laws to promote equality.

### Magna Carta of Women (RA 9710)
Signed in 2009, this is the "Bill of Rights" for Filipino women. it mandates the government to take "special measures" to accelerate the participation of women in all spheres of society. This includes the 5% Gender and Development (GAD) budget requirement for all government agencies.

### Safe Spaces Act (RA 11313)
Also known as the "Bawal Bastos Law," this act expands the definition of sexual harassment to include:
- **Public Spaces:** Catcalling, wolf-whistling, leering, and persistent uninvited comments.
- **Online Spaces:** Gender-based stalking, uploading/sharing photos/videos without consent, and cyber-harassment.
- **Workplaces & Schools:** Enhancing the accountability of employers and school heads.

### Anti-Violence Against Women and Their Children (RA 9262)
This law provides protective measures for victims of domestic violence, covering physical, sexual, psychological, and economic abuse. It allows for Protection Orders that can be issued by the Barangay or the Courts.`,
    keyPoints: [
      'RA 9710 ensures women\'s rights in marriage and family relations.',
      'RA 11313 criminalizes online catcalling and gender-based stalking.',
      'Barangays are the first responders for RA 9262 cases.',
      'Government agencies must allocate 5% of their budget to Gender programs.',
      'Victims of harassment have the right to seek legal counsel and protection.'
    ],
    references: [
      { label: 'Philippine Commission on Women (PCW)', url: 'https://pcw.gov.ph/' },
      { label: 'Official Gazette: RA 11313 Full Text', url: 'https://www.officialgazette.gov.ph/2019/04/17/republic-act-no-11313/' },
      { label: 'Supreme Court: Gender Justice Resource', url: 'https://sc.judiciary.gov.ph/gender-justice/' },
      { label: 'Women\'s Legal and Human Rights Bureau', url: 'https://womenslegal.org/' }
    ]
  },
  {
    id: 'law-ra-7877',
    title: 'RA 7877: Anti-Sexual Harassment Act of 1995',
    description: 'Understanding the first major law addressing sexual harassment in the Philippine workplace and education.',
    type: 'Law',
    region: 'PH',
    link: 'https://pcw.gov.ph/republic-act-7877-anti-sexual-harassment-act-of-1995/',
    icon: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    detailedContent: `Republic Act No. 7877, also known as the "Anti-Sexual Harassment Act of 1995," declares sexual harassment unlawful in the employment, education, or training environment.

### Definition of Harassment
Workplace sexual harassment is committed by an employer, employee, manager, supervisor, agent of the employer, or any other person who, having authority, influence or moral ascendancy over another in a work or training or education environment, demands, requests or otherwise requires any sexual favor from the other.

### Employer Responsibility
The law mandates that it is the duty of the employer or the head of the work-related, educational or training institution to create a Committee on Decorum and Investigation (CODI). This committee is responsible for investigating complaints of sexual harassment.

### Penalties
Any person who violates the provisions of this Act shall, upon conviction, be penalized by imprisonment of not less than one (1) month nor more than six (6) months, or a fine of not less than Ten thousand pesos (P10,000.00) nor more than Twenty thousand pesos (P20,000.00), or both such fine and imprisonment at the discretion of the court.`,
    keyPoints: [
      'Harassment occurs when authority/influence is used to solicit sexual favors.',
      'Applicable in work, education, and training environments.',
      'Institutions MUST establish a CODI (Committee on Decorum and Investigation).',
      'Consent is irrelevant if the act creates a hostile or offensive environment.',
      'Victims can file both administrative and criminal cases simultaneously.'
    ],
    references: [
      { label: 'PCW: RA 7877 Factsheet', url: 'https://pcw.gov.ph/republic-act-7877-anti-sexual-harassment-act-of-1995/' },
      { label: 'CSC: Administrative Rules on Sexual Harassment', url: 'https://www.csc.gov.ph/' }
    ]
  },
  {
    id: 'law-ra-8353',
    title: 'RA 8353: The Anti-Rape Law of 1997',
    description: 'A landmark law that expanded the definition of rape and recognized it as a crime against persons.',
    type: 'Law',
    region: 'PH',
    link: 'https://pcw.gov.ph/republic-act-8353-the-anti-rape-law-of-1997/',
    icon: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    detailedContent: `RA 8353 reclassified rape from a crime against chastity to a crime against persons. This was a critical shift in recognizing the survivor's dignity and human rights.

### Key Changes
1. **Gender-Neutral Victimization:** Recognizes that anyone can be a victim of rape.
2. **Sexual Assault:** Includes non-penile penetration (using objects or other body parts) as a form of rape (Sexual Assault).
3. **Marital Rape:** Explicitly recognizes that rape can occur within marriage.
4. **Presumption of Lack of Consent:** Highlights that "No means No," and the absence of physical resistance does not imply consent.

### Legal Duty
The law provides for the protection of the victim's identity and mandates sensitivity training for law enforcement handling such cases. It also emphasizes that previous sexual history should not be used to justify the crime.`,
    keyPoints: [
      'Rape is a "Crime Against Persons," emphasizing the violation of human dignity.',
      'Sexual assault with objects/other body parts is legally considered rape.',
      'The law explicitly recognizes and penalizes "Marital Rape."',
      'Force, threat, or intimidation are key elements, but lack of resistance is NOT consent.',
      'Identity protection of survivors is a mandatory legal requirement.'
    ],
    references: [
      { label: 'Official Gazette: RA 8353 Full Text', url: 'https://www.officialgazette.gov.ph/1997/09/30/republic-act-no-8353/' },
      { label: 'Gabrela: Advocacy for Survivors', url: 'https://gabrielawomensparty.com/' }
    ]
  },
  {
    id: 'study-intersectionality',
    title: 'Lesson: Intersectionality in Gender Equality',
    description: 'Explore how different forms of discrimination overlap to create unique experiences of marginalization.',
    type: 'Study',
    region: 'Global',
    link: 'https://www.unwomen.org/en/news/stories/2020/6/explainer-intersectional-feminism-what-it-means-and-why-it-matters',
    icon: 'https://images.unsplash.com/photo-1523240715639-93f8bb0a9969?auto=format&fit=crop&q=80&w=800',
    detailedContent: `Intersectionality is a framework for understanding how various social and political identities (e.g., gender, race, class, sexuality, ability, age) overlap to create unique modes of discrimination and privilege.

### The Origin
The term was coined by Kimberlé Crenshaw in 1989. She used it to describe how Black women faced combined discrimination that was neither purely about race nor purely about gender, but a specific intersection of both.

### Why It Matters
In the Philippines, a wealthy woman in Manila faces different challenges than an indigenous woman in a rural province or a woman with a disability. For gender equality to be effective, it must address these layers. A "one-size-fits-all" approach often leaves behind those who are most marginalized.

### Examples in Practice
- **Healthcare:** Transgender individuals may face barriers that cisgender women do not.
- **Employment:** Older women or women from marginalized ethnic groups may experience "double jeopardy" in hiring.`,
    keyPoints: [
      'Identities like gender, class, and ethnicity don\'t exist in isolation.',
      'Intersectionality helps identify who is being left behind in equality movements.',
      'Privilege in one area (e.g., class) can exist alongside marginalization in another (e.g., gender).',
      'The framework encourages more inclusive policy-making.',
      'It challenges "trickle-down" equality that only benefits the most visible members of a group.'
    ],
    references: [
      { label: 'UN Women: Intersectional Feminism Explainer', url: 'https://www.unwomen.org/en/news/stories/2020/6/explainer-intersectional-feminism-what-it-means-and-why-it-matters' },
      { label: 'TED: The Urgency of Intersectionality', url: 'https://www.ted.com/talks/kimberle_crenshaw_the_urgency_of_intersectionality' }
    ]
  },
  {
    id: 'study-gender-neutral',
    title: 'Lesson: Gender-Neutral Language & Inclusivity',
    description: 'Learn how our choice of words can either reinforce stereotypes or build a more inclusive community.',
    type: 'Study',
    region: 'PH',
    link: 'https://pcw.gov.ph/gender-fair-language-guide/',
    icon: 'https://images.unsplash.com/photo-1455391244783-d9574734353e?auto=format&fit=crop&q=80&w=800',
    detailedContent: `Language is more than just a tool for communication; it reflects and shapes our social reality. Gender-fair language is the use of words that treat men and women (and those of other identities) as equals.

### The Problem with Gendered Language
Using "He" or "Man" as a universal pronoun (e.g., "Manpower," "Chairman") often makes women and non-binary people invisible. It reinforces the idea that the male experience is the default human experience.

### Inclusive Alternatives
- Use **"Chairperson"** instead of Chairman.
- Use **"Humanity"** or **"People"** instead of Mankind.
- Use **"Police Officer"** instead of Policeman.
- Use **"They/Them"** when the gender is unknown or if the person prefers it.

### Filipino Language Context
Tagalog is naturally more gender-neutral than English (e.g., "Siya" can mean he, she, or they). However, our social use of titles often adopts Spanish gendered endings (e.g., "Abogado" vs "Abogada"). Being conscious of these choices promotes a sense of belonging for everyone.`,
    keyPoints: [
      'Gender-fair language makes everyone visible and included.',
      'Language shapes our subconscious perceptions of who can do what jobs.',
      'Avoid using "Man" as the universal default for human activities.',
      'Respecting chosen pronouns is a basic requirement of modern inclusivity.',
      'Tagalog offers unique gender-neutral roots that we can leverage.'
    ],
    references: [
      { label: 'PCW: Gender-Fair Language Guide', url: 'https://pcw.gov.ph/gender-fair-language-guide/' },
      { label: 'UNESCO: Gender-Neutral Language Guidelines', url: 'https://en.unesco.org/gender-neutral-language' }
    ]
  },
  {
    id: 'study-vawc-awareness',
    title: 'Lesson: Understanding VAWC (RA 9262)',
    description: 'A deep dive into the types of violence against women and children and the protection available under the law.',
    type: 'Study',
    region: 'PH',
    link: 'https://pcw.gov.ph/republic-act-9262-anti-violence-against-women-and-their-children-act-of-2004/',
    icon: 'https://images.unsplash.com/photo-1577033103444-f58c738e4046?auto=format&fit=crop&q=80&w=800',
    detailedContent: `Violence Against Women and Their Children (VAWC) is not just physical. RA 9262 recognizes four main types of abuse that are punishable by law.

### 1. Physical Violence
Acts that include bodily or physical harm (hitting, pushing, or using weapons).

### 2. Sexual Violence
Acts which are sexual in nature, including rape, sexual harassment, and forcing the victim to view pornographic materials.

### 3. Psychological Violence
Acts that cause mental or emotional suffering, such as intimidation, stalking, public ridicule, or constant shouting. This is often the most common yet least reported form.

### 4. Economic Violence
Acts that make the victim financially dependent, such as withdrawing financial support, preventing the victim from working, or controlling the victim's own earnings.

### Seeking Help
The law allows for **Protection Orders** (Barangay, Temporary, and Permanent) which can order the perpetrator to stay away from the victim and their family. Any concerned citizen who has personal knowledge of the abuse can file for a Protection Order on behalf of the victim.`,
    keyPoints: [
      'VAWC includes physical, sexual, psychological, and economic abuse.',
      'Economic abuse includes withholding financial support to control a partner.',
      'Protection Orders can be obtained at the Barangay level for immediate safety.',
      'The law protects both women and their children.',
      'VAWC is a public crime; anyone with knowledge can report it.'
    ],
    references: [
      { label: 'PCW: RA 9262 Factsheet', url: 'https://pcw.gov.ph/republic-act-9262-anti-violence-against-women-and-their-children-act-of-2004/' },
      { label: 'PNP: Women and Children Protection Center', url: 'https://wcpc.pnp.gov.ph/' }
    ]
  },
  {
    id: 'women-in-stem',
    title: 'Breaking the Glass Ceiling: Women in STEM',
    description: 'An analysis of why women are underrepresented in Science, Technology, Engineering, and Math.',
    type: 'Study',
    region: 'Global',
    link: 'https://www.unesco.org/en/articles/unesco-report-shows-women-still-under-represented-stem-fields',
    icon: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    detailedContent: `The "Glass Ceiling" represents the invisible barriers that prevent qualified women from reaching senior leadership and high-paying roles in STEM fields.

### Global and Local Statistics
Globally, only 35% of STEM students in higher education are women. In the Philippines, while women are highly represented in healthcare (nursing, pharmacy), there is a significant gap in engineering, physics, and computer science.

### Root Causes of the Gap
1. **Gender Stereotypes:** The "Brilliance Gap" starts as early as age 6, where girls begin to believe they are less "naturally gifted" in math than boys.
2. **Lack of Role Models:** If girls don't see women as astronauts, developers, or lead researchers, they are less likely to envision themselves in those roles.
3. **Workspace Culture:** Hostile environments or a lack of inclusive policies (like flexible hours) often drive women out of STEM careers mid-career—a phenomenon known as the "Leaky Pipeline."

### The Solution
Closing the gap requires systematic changes: bias training for educators, mentorship programs, and showcasing the achievements of women like PH's first satellite engineers or global tech leaders.`,
    keyPoints: [
      'Only 3% of Nobel Prizes in science have been awarded to women.',
      'Diversity in tech leads to fewer biased algorithms (e.g., facial recognition).',
      'The Philippines has a high number of female STEM graduates but fewer in tech leadership.',
      'Early exposure to coding and robotics for girls is critical.',
      'Mentorship can increase female retention in STEM by up to 50%.'
    ],
    references: [
      { label: 'UNESCO: Women in Science Data', url: 'https://uis.unesco.org/en/topic/women-science' },
      { label: 'Microsoft Study: Girls in STEM', url: 'https://news.microsoft.com/features/why-do-girls-lose-interest-in-stem-new-research-has-some-answers-and-what-we-can-do-about-it/' },
      { label: 'DOST: Women in Science in PH', url: 'https://www.dost.gov.ph/' },
      { label: 'Girl Scouts of the Philippines: STEM Programs', url: 'https://girlscouts.org.ph/' }
    ]
  },
  {
    id: 'art-allyship',
    title: 'The Art of Allyship: How Men Can Support Gender Equality',
    description: 'Gender equality is not just a women\'s issue. Here is how men can be effective allies.',
    type: 'Article',
    region: 'Global',
    link: 'https://www.heforshe.org/en',
    icon: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    detailedContent: `Allyship is not just a label—it is a continuous practice of using one's influence and privilege to support marginalized groups.

### What is Male Allyship?
Male allyship involves men working in solidarity with women and non-binary people to dismantle systems of patriarchy. It is based on the realization that gender equality benefits everyone. For example, parental leave for fathers allows for more balanced domestic roles and stronger family bonds.

### Stages of Allyship
- **Listening:** Believing women's stories of harassment or bias without being defensive.
- **Calling Out:** Challenging sexist jokes or comments in male-dominated spaces where women aren't present.
- **Amplifying:** Crediting women for their ideas in meetings and ensuring their voices are heard.
- **Systemic Change:** Advocating for equal pay and gender-balanced hiring in organizations.

### The "HeForShe" Movement
Launched by UN Women, this movement invites men and boys as partners for women’s rights. It acknowledges that the struggle for gender equality is a shared responsibility of all of humanity.`,
    keyPoints: [
      'Allyship is a lifelong process of learning and unlearning.',
      'Silence in the face of bias is a form of complicity.',
      'Allies don\'t seek to lead the movement; they seek to support it.',
      'Challenging "toxic masculinity" helps men as much as it helps women.',
      'Equality at home (chores, caregiving) is a key form of active allyship.'
    ],
    references: [
      { label: 'UN HeForShe Official Website', url: 'https://www.heforshe.org/en' },
      { label: 'HBR: Men Who Are Better Allies', url: 'https://hbr.org/2020/10/how-men-can-become-better-allies-to-women' },
      { label: 'White Ribbon Campaign', url: 'https://www.whiteribbon.org.au/' },
      { label: 'Promundo: Engaging Men and Boys', url: 'https://promundoglobal.org/' }
    ]
  },
  {
    id: 'media-representation',
    title: 'Media Representation: The Mirror of Society',
    description: 'How movies, ads, and news shape our perception of gender roles and self-worth.',
    type: 'Article',
    region: 'Global',
    link: 'https://seejane.org/research-in-forms-and-shapes/',
    icon: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    detailedContent: `The media we consume acts as a mirror, reflecting social values, and a window, showing us what is possible. When representation is biased, it limits our imagination.

### Common Media Tropes
1. **The Smurfette Principle:** A cast of several men and only one woman, whose primary trait is being "the female."
2. **Damsel in Distress:** Portraying women as passive victims needing rescue by a male protagonist.
3. **Gendered Toys & Ads:** Marketing domestic toys to girls and adventurous toys to boys, reinforcing roles from childhood.

### The Bechdel Test
A simple tool to evaluate film representation. To pass, a movie must:
1. Have at least two named female characters.
2. Who talk to each other.
3. About something other than a man.
Surprising many, a large percentage of blockbuster movies still fail this basic test.

### Moving Forward
Authentic representation means having diverse voices both in front of and behind the camera. It means telling stories where women are the heroes of their own journeys, and men are allowed to be vulnerable and emotionally complex.`,
    keyPoints: [
      'Media influences subconscious biases from a very young age.',
      'Lack of representation leads to "Symbolic Annihilation" of certain groups.',
      'Diversifying newsrooms leads to more balanced and objective reporting.',
      'Social media algorithms can reinforce gendered beauty standards.',
      'The "Female Gaze" in media focuses on internal experience over objectification.'
    ],
    references: [
      { label: 'Geena Davis Institute on Gender in Media', url: 'https://seejane.org/' },
      { label: 'Unstereotype Alliance by UN Women', url: 'https://www.unstereotypealliance.org/en' },
      { label: 'Bechdel Test Movie Database', url: 'https://bechdeltest.com/' },
      { label: 'Common Sense Media: Gender Research', url: 'https://www.commonsensemedia.org/research' }
    ]
  }
];

export const ORGANIZATIONS: Organization[] = [
  {
    name: 'Philippine Commission on Women (PCW)',
    description: 'The primary policymaking body on gender equality concerns.',
    url: 'https://pcw.gov.ph/'
  },
  {
    name: 'UN Women',
    description: 'The United Nations entity dedicated to gender equality.',
    url: 'https://www.unwomen.org/'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "What is 'Allyship'?",
    options: ["A type of ship used in the navy", "Being friends only with people of the same gender", "Actively supporting the rights of a marginalized group you are not part of", "Agreeing with everything someone says"],
    correctAnswer: 2,
    explanation: "Allyship is the practice of emphasizing social justice, inclusion, and human rights by members of an ingroup, to advance the interests of an oppressed or marginalized outgroup."
  },
  {
    question: "Which Philippine law is known as the 'Bawal Bastos Law'?",
    options: ["RA 9710", "RA 11313", "RA 7877", "RA 9262"],
    correctAnswer: 1,
    explanation: "RA 11313 or the Safe Spaces Act protects against gender-based sexual harassment in public spaces and online."
  },
  {
    question: "Which country consistently ranks #1 in the Global Gender Gap Report?",
    options: ["Philippines", "Iceland", "Norway", "New Zealand"],
    correctAnswer: 1,
    explanation: "Iceland has been the world's most gender-equal country for over a decade according to the World Economic Forum."
  },
  {
    question: "What does the 'S' in SOGIE stand for?",
    options: ["Social", "Sexual", "Safety", "Support"],
    correctAnswer: 1,
    explanation: "SOGIE stands for Sexual Orientation, Gender Identity, and Expression."
  },
  {
    question: "The Magna Carta of Women is also known as which Republic Act?",
    options: ["RA 9262", "RA 11313", "RA 9710", "RA 7877"],
    correctAnswer: 2,
    explanation: "RA 9710 is the Magna Carta of Women, a comprehensive women's human rights law that seeks to eliminate discrimination through the recognition, protection, fulfillment, and promotion of the rights of Filipino women."
  },
  {
    question: "Which of these is considered 'Economic Violence' under RA 9262?",
    options: ["Shouting at a partner", "Withdrawing financial support to control a partner", "Pushing someone during an argument", "Ignoring a partner's messages"],
    correctAnswer: 1,
    explanation: "Economic violence refers to acts that make or attempt to make a woman financially dependent upon her husband/partner, such as withholding financial support or controlling her own earnings."
  },
  {
    question: "What is the 'Glass Ceiling'?",
    options: ["A decorative ceiling made of glass", "A visible barrier that protects employees", "An invisible barrier that prevents marginalized groups from reaching senior roles", "A transparent management style"],
    correctAnswer: 2,
    explanation: "The glass ceiling is a metaphor used to represent an invisible barrier that prevents a given demographic from rising above a certain level in a hierarchy."
  },
  {
    question: "In the context of gender, what is the difference between 'Equality' and 'Equity'?",
    options: ["They are exactly the same", "Equality is about sameness; Equity is about fairness and providing what is needed to be successful", "Equality is for men; Equity is for women", "Equity is about sampling; Equality is about totals"],
    correctAnswer: 1,
    explanation: "Equality means giving everyone the exact same resources. Equity means giving people what they need to reach an equal outcome, recognizing that different people start from different places."
  }
];
