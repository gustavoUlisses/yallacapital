export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  previous: string[];
  photo: string;
  linkedin?: string;
}

export const partners: TeamMember[] = [
  {
    name: "Leonardo Schechtmann Tonello",
    role: "Sócio",
    bio: "Atuou em diversas operações de M&A junto aos players mais relevantes do Brasil. Antes de fundar a Yalla Capital, trabalhou na DOMO Invest, uma das gestoras líderes em Venture Capital na América Latina. É formado em Administração de Empresas pela Fundação Getúlio Vargas.",
    previous: ["Goldman Sachs", "Itaú BBA"],
    photo: "/assets/partner1.png",
    linkedin: "https://www.linkedin.com/in/leonardoschechtmanntonello/",
  },
  {
    name: "Cassius Leal",
    role: "Sócio",
    bio: "Trabalhou por 20 anos nos principais bancos de investimento, da Merrill Lynch na Inglaterra e Espanha, à tesoureiro do HSBC para Espanha e Portugal e Managing Director da Goldman Sachs (Head of Structured Equity Latam). Formado em Adm. de Empresas pela FEA – USP com pós em Matemática Aplicada e Finanças pela UC Berkeley e MBA pela Universidade de Chicago.",
    previous: ["Merrill Lynch", "HSBC"],
    photo: "/assets/partner2.png",
    linkedin: "https://www.linkedin.com/in/cassius-leal/",
  },
  {
    name: "Gustavo Corrêa",
    role: "Sócio",
    bio: "Com mais de sete anos de experiência em Investment Banking, acumulou passagens por ABN AMRO, Singular Partners e Itaú BBA, atuando na execução de transações de M&A e Mercado de Capitais em diferentes setores.\n\nEm sua última posição, teve participação relevante na estruturação e consolidação da tese de investimentos da Emergent Cold na América Latina, com atuação direta na execução de transações em mercados como Uruguai, Paraguai, Guatemala, Panamá e Brasil, a partir de dois levantamentos de capital que totalizaram USD 950 milhões. A Emergent Cold, apoiada por investidores institucionais como Bay Grove, Stonepeak e D1 Capital Partners, consolidou-se como uma das maiores plataformas globais de logística e armazenagem refrigerada, figurando entre as cinco maiores do mundo.\n\nÉ formado em Administração de Empresas pela Universidade Presbiteriana Mackenzie, com formação complementar em finanças.",
    previous: ["Domo.VC", "Itaú BBA"],
    photo: "/assets/partner3.png",
    linkedin: "https://www.linkedin.com/in/gustavo-gimenes-correa-679484106/",
  },
];

export const advisors: TeamMember[] = [];
