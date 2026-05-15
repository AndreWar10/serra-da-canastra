export type MenuItem = {
  id: string;
  label: string;
  href: string;
};

export const menuItems: MenuItem[] = [
  { id: "cachoeiras", label: "Cachoeiras", href: "#cachoeiras" },
  { id: "paisagens", label: "Belas Paisagens", href: "#paisagens" },
  { id: "gastronomia", label: "Gastronomia", href: "#gastronomia" },
  { id: "trilhas", label: "Trilhas", href: "#trilhas" },
  { id: "parque", label: "Parque Nacional", href: "#parque" },
  { id: "hospedagens", label: "Hospedagens", href: "#hospedagens" },
  { id: "localizacao", label: "Localização", href: "#localizacao" },
];
