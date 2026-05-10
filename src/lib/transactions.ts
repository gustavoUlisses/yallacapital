export type DealType = "M&A" | "Minoritário" | "Desinvestimento";

export interface Transaction {
  acquirer: string;
  target: string;
  description: string;
  type: DealType;
  role: string;
  targetLogo: string;
  acquirerLogo: string;
}

export const transactions: Transaction[] = [
  {
    target: "Followize",
    acquirer: "Bolt",
    description:
      "Yalla Capital atuou como assessor exclusivo da Followize na venda de 100% da empresa para a Bolt.",
    type: "M&A",
    role: "Advisor exclusivo do vendedor",
    targetLogo: "/assets/logos/followize.png",
    acquirerLogo: "/assets/logos/bolt.png",
  },
  {
    target: "N2B",
    acquirer: "Smartfit",
    description:
      "Assessoria aos acionistas da N2B na captação de participação minoritária estratégica junto à Smartfit.",
    type: "Minoritário",
    role: "Advisor exclusivo do vendedor",
    targetLogo: "/assets/logos/n2b.png",
    acquirerLogo: "/assets/logos/smartfit.png",
  },
  {
    target: "Talentbrand",
    acquirer: "Nexti",
    description:
      "Yalla Capital atuou como assessor exclusivo do Talentbrand na venda de 100% do controle para a Nexti.",
    type: "M&A",
    role: "Advisor exclusivo do vendedor",
    targetLogo: "/assets/logos/talentbrand.png",
    acquirerLogo: "/assets/logos/nexti.png",
  },
  {
    target: "Vixting",
    acquirer: "Sankhya",
    description:
      "Assessoria ao acionista majoritário do Vixting na venda da empresa para a Sankhya.",
    type: "M&A",
    role: "Advisor exclusivo do vendedor",
    targetLogo: "/assets/logos/vixting.png",
    acquirerLogo: "/assets/logos/sankhya.png",
  },
  {
    target: "CodeBuddy (Edify)",
    acquirer: "SuperGeeks",
    description:
      "Assessoria ao grupo Edify no desinvestimento do CodeBuddy para a SuperGeeks.",
    type: "Desinvestimento",
    role: "Advisor exclusivo do vendedor",
    targetLogo: "/assets/logos/edify.png",
    acquirerLogo: "/assets/logos/supergeeks.png",
  },
];
