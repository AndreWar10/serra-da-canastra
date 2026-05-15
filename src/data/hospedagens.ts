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
    imagem: "/images/hospedagens/vale-do-ceu.png",
    localizacao: "Estrada Vargem Bonita, KM 11,5 — São Roque de Minas, MG",
    telefone: "(35) 9 9917-1086",
    email: "reservas@valedoceu.tur.br",
    atendimento: "Segunda a sábado, das 8h às 18h",
    ctaLabel: "Clique e reserve",
    ctaHref: "http://valedoceu.tur.br/",
  },
  {
    id: "passaredo",
    nome: "Pousada e Chalés Passaredo Canastra",
    imagem: "/images/hospedagens/passaredo.png",
    localizacao: "São João Batista do Glória, Km 12 — Palmeiras, MG",
    telefone: "(19) 99684-5282",
    ctaLabel: "Reserve pelo Booking",
    ctaHref:
      "https://www.booking.com/hotel/br/pousada-e-chales-passaredo-canastra.pt-br.html?aid=1874385&label=serra-da-canastra-C8uB1XlPkhR8I50vXZovIgS390284832421%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-384525726944%3Alp9100600%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YSoO9VWsFCsboSiHsPRZAYk&sid=c1314777d4d595a078322dbf7c8ac27b&dest_id=-645994&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778539390&srpvid=cd7f9fa26efd0071&type=total&ucfs=1&",
  },
  {
    id: "chales-marisa",
    nome: "Chalés da Marisa",
    imagem: "/images/hospedagens/chales-marisa.png",
    localizacao: "Vargem Bonita — São Roque de Minas, MG",
    telefone: "(35) 9 9917-1086",
    ctaLabel: "Reserve pelo Booking",
    ctaHref:
      "https://www.booking.com/hotel/br/chales-da-marisa-serra-da-canastra.pt-br.html?aid=1874385&label=serra-da-canastra-C8uB1XlPkhR8I50vXZovIgS390284832421%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-384525726944%3Alp9100600%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YSoO9VWsFCsboSiHsPRZAYk&sid=856038a4679edd5afd1d323432e56886&dest_id=-670897&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=10&hpos=10&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778539131&srpvid=947b9f2bf8fa028b&type=total&ucfs=1&",
  },
  {
    id: "casa-campo",
    nome: "Casa de Campo no coração da Serra da Canastra",
    imagem: "/images/hospedagens/casa-campo.png",
    localizacao: "Vale da Babilônia, Delfinópolis — CEP 37910-000, MG",
    ctaLabel: "Reserve pelo Booking",
    ctaHref:
      "https://www.booking.com/hotel/br/casa-no-vale-da-babilonia-serra-da-canastra.pt-br.html?aid=1874385&label=serra-da-canastra-C8uB1XlPkhR8I50vXZovIgS390284832421%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-384525726944%3Alp9100600%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YSoO9VWsFCsboSiHsPRZAYk&sid=856038a4679edd5afd1d323432e56886&dest_id=-639933&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=26&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778539485&srpvid=89eb9fe7757d001c&type=total&ucfs=1&",
  },
];
