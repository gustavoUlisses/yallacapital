export interface DealTypeLabels {
  "M&A": string;
  Minoritário: string;
  Desinvestimento: string;
}

export interface InterestOption {
  value: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Pillar {
  n: string;
  title: string;
  description: string;
}

export interface Service {
  n: string;
  title: string;
  headline: string;
  description: string;
  items: readonly string[];
}

export interface Opening {
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface StatKV {
  v: string;
  l: string;
}

export interface Dictionary {
  nav: {
    about: string;
    team: string;
    solutions: string;
    transactions: string;
    careers: string;
    contact: string;
  };

  hero: {
    kicker: string;
    headline: string;
    headlineEmphasis: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: readonly Stat[];
  };

  manifesto: {
    label: string;
    quote: string;
    quoteEmphasis1: string;
    quotePart2: string;
    quoteEmphasis2: string;
    tags: readonly string[];
  };

  valueProps: {
    label: string;
    title: string;
    pillars: readonly Pillar[];
  };

  aboutSnippet: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    cta: string;
    foundersLabel: string;
  };

  transactionsPreview: {
    label: string;
    title: string;
    viewAll: string;
    role: string;
    typeLabels: DealTypeLabels;
  };

  cta: {
    title: string;
    sub: string;
    button: string;
  };

  about: {
    pageLabel: string;
    title: string;
    historyTitle: string;
    p1: string;
    p2: string;
    p3: string;
    stat1: StatKV;
    stat2: StatKV;
    pillarsTitle: string;
    pillars: readonly Pillar[];
    meta: { title: string; description: string };
  };

  team: {
    pageLabel: string;
    title: string;
    linkedinLabel: string;
    meta: { title: string; description: string };
  };

  advisory: {
    pageLabel: string;
    title: string;
    sub: string;
    ctaTitle: string;
    ctaButton: string;
    services: readonly Service[];
    meta: { title: string; description: string };
  };

  transactions: {
    pageLabel: string;
    title: string;
    sub: string;
    colTransaction: string;
    colType: string;
    colDescription: string;
    role: string;
    confidentiality: string;
    typeLabels: DealTypeLabels;
    meta: { title: string; description: string };
  };

  careers: {
    pageLabel: string;
    title: string;
    sub: string;
    openingsTitle: string;
    applyButton: string;
    fallbackTitle: string;
    fallbackSub: string;
    fallbackCta: string;
    openings: readonly Opening[];
    meta: { title: string; description: string };
  };

  contact: {
    pageLabel: string;
    title: string;
    sub: string;
    infoTitle: string;
    addressLabel: string;
    emailLabel: string;
    confidentialityNote: string;
    confidentialityTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      interestLabel: string;
      interestDefault: string;
      interestOptions: readonly InterestOption[];
      messageLabel: string;
      messagePlaceholder: string;
      consentText: string;
      consentAnd: string;
      privacyLink: string;
      submitButton: string;
      submitting: string;
      successTitle: string;
      successSub: string;
    };
    meta: { title: string; description: string };
  };

  footer: {
    description: string;
    navLabel: string;
    contactLabel: string;
    rights: string;
    privacyLink: string;
    cookiesLink: string;
  };

  cookies: {
    bannerText: string;
    cookiesPolicyLink: string;
    and: string;
    privacyPolicyLink: string;
    accept: string;
    decline: string;
    pageTitle: string;
    pageLabel: string;
    lastUpdated: string;
  };

  privacy: {
    pageTitle: string;
    pageLabel: string;
    lastUpdated: string;
  };
}
