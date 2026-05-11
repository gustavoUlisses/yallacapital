import type { Dictionary } from "../types";

const en: Dictionary = {
  nav: {
    about: "Yalla",
    team: "Team",
    solutions: "Advisory",
    transactions: "Transactions",
    careers: "Careers",
    contact: "Contact",
  },

  hero: {
    kicker: "Independent M&A Boutique — São Paulo",
    headline: "Every transaction begins long before",
    headlineEmphasis: "the transaction.",
    sub: "Independent advisory in M&A, fundraising, and capital solutions. Few simultaneous mandates — maximum dedication to each client.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View transactions",
    stats: [
      { value: "+$12B", label: "in advised transactions" },
      { value: "+20 years", label: "of banking experience" },
      { value: "100%", label: "sell-side exclusive advisory" },
    ],
  },

  manifesto: {
    label: "Our philosophy",
    quote: "Independence to act in the",
    quoteEmphasis1: "client's best interest.",
    quotePart2: "Experience to deliver",
    quoteEmphasis2: "the best outcome.",
    tags: [
      "Selective mandates",
      "Analytical depth",
      "Flawless execution",
      "Long-term relationships",
    ],
  },

  valueProps: {
    label: "Our approach",
    title: "Three pillars that guide every transaction",
    pillars: [
      {
        n: "01",
        title: "Selective Mandates",
        description:
          "We work with a small number of clients simultaneously. This allows us to provide dedicated attention, genuine analytical depth, and total commitment to every mandate.",
      },
      {
        n: "02",
        title: "Excellence in Execution",
        description:
          "The quality of execution is what sustains long-term relationships. Every detail matters — from thesis preparation to transaction close.",
      },
      {
        n: "03",
        title: "Growth Through Relationships",
        description:
          "Our business comes from repeat clients and referrals. This reflects the trust we build in every transaction and the results we deliver.",
      },
    ],
  },

  aboutSnippet: {
    label: "About us",
    title: "Independence that builds trust",
    p1: "Yalla Capital is an independent boutique founded by professionals with backgrounds at Goldman Sachs, Merrill Lynch, and Itaú BBA — with over US$12 billion in advised transactions throughout their careers.",
    p2: "Our independence allows us to act exclusively in our clients' best interests. No conflicts of interest. No hidden agenda.",
    cta: "Learn our story",
    foundersLabel: "Founders' previous experience",
    statLabel: "in advised transactions",
  },

  transactionsPreview: {
    label: "Selected transactions",
    title: "Results that speak for themselves",
    viewAll: "View all",
    role: "Exclusive advisor",
    typeLabels: {
      "M&A": "Acquisition",
      Minoritário: "Minority stake",
      Desinvestimento: "Divestiture",
    },
  },

  cta: {
    title: "Thinking about a strategic transaction?",
    sub: "The earlier we talk, the better the outcome. Our process begins long before the transaction itself.",
    button: "Get in touch",
  },

  about: {
    pageLabel: "About us",
    title: "A boutique built on trust and execution",
    historyTitle: "Our story",
    p1: "Founded by professionals with experience at Goldman Sachs, Merrill Lynch, Itaú BBA, HSBC, and Domo.VC, Yalla Capital brings together decades of experience in high-value transactions in the Brazilian and international markets.",
    p2: "Our founders have participated in over US$12 billion in advised transactions throughout their careers — and brought that knowledge to build a firm with a clear purpose: to be the best possible partner for companies at transformational moments.",
    p3: "Based in São Paulo, we operate across the entire value chain of a transaction: from initial strategic positioning to closing.",
    stat1: { v: "+$12B", l: "in advised transactions" },
    stat2: { v: "100%", l: "exclusive client advisory" },
    pillarsTitle: "The pillars of our approach",
    pillars: [
      {
        n: "01",
        title: "Selective Mandates",
        description:
          "We believe quality surpasses quantity. With few simultaneous mandates, we ensure complete dedication to each client and each transaction.",
      },
      {
        n: "02",
        title: "Analytical Depth",
        description:
          "Our preparation begins long before the transaction. We develop theses, strategic narratives, and materials with the same rigor as the world's leading investment banks.",
      },
      {
        n: "03",
        title: "Excellence in Execution",
        description:
          "From structuring to closing, we manage every step with precision. Flawless execution is what turns good deals into great transactions.",
      },
      {
        n: "04",
        title: "Full Independence",
        description:
          "No conflicts of interest. Our compensation is aligned with client success. We work exclusively for those who hire us.",
      },
    ],
    meta: {
      title: "About | Yalla Capital",
      description:
        "Learn about Yalla Capital, an independent financial advisory boutique specialized in M&A.",
    },
  },

  team: {
    pageLabel: "Team",
    title: "Experience that makes the difference",
    linkedinLabel: "View on LinkedIn",
    meta: {
      title: "Team | Yalla Capital",
      description: "Meet the partners of Yalla Capital and their backgrounds.",
    },
  },

  advisory: {
    pageLabel: "Solutions",
    title: "Advisory at every stage of the journey",
    sub: "From initial preparation to transaction close, we offer exclusive and dedicated advisory at the most important moments in a company's life.",
    ctaTitle: "Want to understand how we can help?",
    ctaButton: "Get in touch",
    services: [
      {
        n: "01",
        title: "M&A Transactions",
        headline: "Company sales and acquisitions",
        description:
          "We advise on majority control transactions and strategic minority stakes. From thesis preparation to closing, we act as exclusive partners to our clients at every stage of the process.",
        items: [
          "Sale or acquisition thesis structuring",
          "Materials preparation (teaser, CIM, financial model)",
          "Buyer or target mapping and outreach",
          "Negotiation and due diligence process support",
          "Coordination through to closing",
        ],
      },
      {
        n: "02",
        title: "Private Placements",
        headline: "Private investment fundraising",
        description:
          "We structure and lead capital-raising processes with private equity funds, family offices, and strategic investors — with the narrative, positioning, and process tailored to the company's profile.",
        items: [
          "Thesis and valuation definition",
          "Investment memorandum preparation",
          "Investor mapping and qualification",
          "Competitive process management",
          "Investment terms structuring",
        ],
      },
      {
        n: "03",
        title: "Joint Ventures & Partnerships",
        headline: "Strategic partnership structuring",
        description:
          "We advise on the conception and structuring of strategic partnerships and joint ventures, ensuring that terms, governance, and long-term alignments reflect our clients' interests.",
        items: [
          "Strategic fit analysis",
          "Governance and shareholder agreement structuring",
          "Partnership financial modeling",
          "Terms negotiation",
        ],
      },
      {
        n: "04",
        title: "Liquidity Planning",
        headline: "Preparation for transformational events",
        description:
          "Many companies reach a liquidity event without adequate preparation. We work with business owners in advance to build the positioning, narrative, and conditions that maximize value at the right time.",
        items: [
          "Diagnostics and opportunity mapping",
          "Narrative and market positioning development",
          "Potential buyer or investor identification",
          "Data and governance preparation",
          "Process timing and strategy",
        ],
      },
    ],
    meta: {
      title: "Solutions | Yalla Capital",
      description:
        "Yalla Capital's financial advisory solutions: M&A, fundraising, joint ventures, and liquidity planning.",
    },
  },

  transactions: {
    pageLabel: "Transactions",
    title: "Selected transactions",
    sub: "In all transactions listed below, Yalla Capital acted as exclusive advisor to the sellers or shareholders.",
    colTransaction: "Transaction",
    colType: "Type",
    colDescription: "Description",
    role: "Exclusive advisor",
    confidentiality:
      "For confidentiality reasons, not all transactions are publicly disclosed. Those listed above were disclosed with client authorization.",
    typeLabels: {
      "M&A": "Acquisition",
      Minoritário: "Minority stake",
      Desinvestimento: "Divestiture",
    },
    meta: {
      title: "Transactions | Yalla Capital",
      description: "Selected transactions advised by Yalla Capital.",
    },
  },

  careers: {
    pageLabel: "Careers",
    title: "Build your career in M&A",
    sub: "At Yalla Capital you will have direct exposure to real transactions, learn from partners who came from the world's top institutions, and contribute from day one.",
    openingsTitle: "Open positions",
    applyButton: "Apply",
    fallbackTitle: "Didn't find the right position?",
    fallbackSub:
      "We are always open to speaking with talented professionals. Send your résumé and a brief introduction.",
    fallbackCta: "Send your résumé",
    openings: [
      {
        title: "M&A Intern",
        type: "Internship",
        location: "São Paulo, SP",
        description:
          "Support in financial analysis, client materials preparation, and transaction process assistance. Compensation: R$3,500/month.",
      },
      {
        title: "Analyst / Associate — Investment Banking",
        type: "Full-time",
        location: "São Paulo, SP",
        description:
          "Responsible for financial modeling, due diligence, teaser and CIM preparation, and support to the partner team on transactions.",
      },
    ],
    meta: {
      title: "Careers | Yalla Capital",
      description: "Career opportunities at Yalla Capital.",
    },
  },

  contact: {
    pageLabel: "Contact",
    title: "Let's talk",
    sub: "If you are thinking about a strategic transaction or want to understand how we can help, get in touch. Processes begin long before the transaction.",
    infoTitle: "Contact information",
    addressLabel: "Address",
    emailLabel: "Email",
    confidentialityNote:
      "All information shared with us is treated with absolute confidentiality. Our Privacy Policy details how we collect, use, and protect your data.",
    confidentialityTitle: "Confidentiality note:",
    form: {
      nameLabel: "Name *",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Company name",
      emailLabel: "Email *",
      emailPlaceholder: "your@email.com",
      interestLabel: "Type of interest",
      interestDefault: "Select",
      interestOptions: [
        { value: "ma", label: "M&A — Company sale or acquisition" },
        { value: "captacao", label: "Investment fundraising" },
        { value: "joint-venture", label: "Joint venture / partnership" },
        { value: "carreira", label: "Career opportunities" },
        { value: "outro", label: "Other" },
      ],
      messageLabel: "Message *",
      messagePlaceholder: "How can we help?",
      consentText: "I agree with the",
      consentAnd: "and authorize the use of my data for commercial contact purposes.",
      privacyLink: "Privacy Policy",
      submitButton: "Send message",
      submitting: "Sending...",
      successTitle: "Message sent",
      successSub: "We will get back to you shortly. Thank you for reaching out.",
    },
    meta: {
      title: "Contact | Yalla Capital",
      description: "Get in touch with Yalla Capital.",
    },
  },

  footer: {
    description:
      "Independent financial advisory boutique in M&A and capital solutions.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    rights: "All rights reserved.",
    privacyLink: "Privacy",
    cookiesLink: "Cookies",
  },

  cookies: {
    bannerText: "We use cookies to improve your browsing experience. By continuing, you agree to our",
    cookiesPolicyLink: "Cookie Policy",
    and: "and",
    privacyPolicyLink: "Privacy Policy",
    accept: "Accept",
    decline: "Decline",
    pageTitle: "Cookie Policy",
    pageLabel: "Privacy",
    lastUpdated: "Last updated: May 2025",
  },

  privacy: {
    pageTitle: "Privacy Policy",
    pageLabel: "Privacy",
    lastUpdated: "Last updated: May 2025",
  },
};

export default en;
