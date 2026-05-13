export type Hospedagem = {
  id: string;
  nome: string;
  imagem: string;
  localizacao: string;
  telefone?: string;
  email?: string;
  atendimento?: string;
  ctaLabel: string;
  ctaHref: string;
};

export const hospedagens: Hospedagem[] = [
  {
    id: "vale-do-ceu",
    nome: "Vale do Céu",
    imagem: "/images/hospedagens/vale-do-ceu.jpg",
    localizacao: "Estrada Vargem Bonita, KM 11,5 — São Roque de Minas, MG",
    telefone: "(35) 9 9917-1086",
    email: "reservas@valedoceu.tur.br",
    atendimento: "Segunda a sábado, das 8h às 18h",
    ctaLabel: "Clique e reserve",
    ctaHref: "https://valedoceu.tur.br",
  },
  {
    id: "passaredo",
    nome: "Pousada e Chalés Passaredo Canastra",
    imagem: "/images/hospedagens/passaredo.jpg",
    localizacao: "São João Batista do Glória, Km 12 — Palmeiras, MG",
    telefone: "(19) 99684-5282",
    ctaLabel: "Reserve pelo Booking",
    ctaHref: "https://www.booking.com",
  },
  {
    id: "chales-marisa",
    nome: "Chalés da Marisa",
    imagem: "/images/hospedagens/chales-marisa.jpg",
    localizacao: "Vargem Bonita — São Roque de Minas, MG",
    telefone: "(35) 9 9917-1086",
    ctaLabel: "Reserve pelo site",
    ctaHref: "https://www.booking.com",
  },
  {
    id: "casa-campo",
    nome: "Casa de Campo no coração da Serra da Canastra",
    imagem: "/images/hospedagens/casa-campo.jpg",
    localizacao: "Vale da Babilônia, Delfinópolis — CEP 37910-000, MG",
    ctaLabel: "Reserve pelo Booking",
    ctaHref: "https://www.booking.com",
  },
];
