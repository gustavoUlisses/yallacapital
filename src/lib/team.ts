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
    bio: "Profissional com ampla experiência em assessoria de M&A e mercado de capitais, tendo participado de transações de grande porte ao longo de sua carreira.",
    previous: ["Goldman Sachs", "Itaú BBA"],
    photo: "/assets/partner1.png",
    linkedin: "https://www.linkedin.com/in/leonardotonello/",
  },
  {
    name: "Cassius Leal",
    role: "Sócio",
    bio: "Com trajetória em bancos de investimento de destaque, possui profundo conhecimento em estruturação de transações e capital solutions para empresas em crescimento.",
    previous: ["Merrill Lynch", "HSBC"],
    photo: "/assets/partner2.png",
    linkedin: "https://www.linkedin.com/in/cassiusleal/",
  },
  {
    name: "Gustavo Corrêa",
    role: "Sócio",
    bio: "Especialista em transações estratégicas e ecossistema de venture capital, com experiência em assessoria a startups e empresas de tecnologia.",
    previous: ["Domo.VC", "Itaú BBA"],
    photo: "/assets/partner3.png",
    linkedin: "https://www.linkedin.com/in/gustavocorrea/",
  },
];

export const advisors: TeamMember[] = [];
