export const SITE = {
  name: "SAM MECA",
  phone: "+216 94 358 115",
  phoneHref: "tel:+21694358115",
  email: "commercial@sam-meca.com",
  street: "Barraket Sahel, Route Sidi Hamed",
  postalCode: "8050",
  city: "Hammamet",
  country: "Tunisie",
  hours: "Lun – Sam : 8h00 – 18h00",
} as const;

export const ADDRESS_LINE = `${SITE.street}, ${SITE.postalCode} ${SITE.city}, ${SITE.country}`;

export const serviceLinks = [
  { to: "/construction-metallique", label: "Construction métallique" },
  { to: "/chaudronnerie", label: "Chaudronnerie" },
  { to: "/usinage-fabrication-mecanique", label: "Fabrication de pièces mécaniques" },
  { to: "/maintenance-industrielle", label: "Maintenance industrielle" },
] as const;
