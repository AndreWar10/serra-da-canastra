export type PontoTuristico = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  ctaHref: string;
};

export const pontosTuristicos: PontoTuristico[] = [
  {
    id: "igreja-itajai",
    nome: "Igreja Itajaí",
    imagem: "/images/pontos-turisticos/igreja-itajai.jpg",
    descricao:
      "Pequena capela centenária encravada na paisagem da serra, ponto de parada obrigatória.",
    ctaHref: "https://www.google.com/maps/search/igreja+itajai+canastra",
  },
  {
    id: "queijaria-vale-guirita",
    nome: "Queijaria Vale da Guirita",
    imagem: "/images/pontos-turisticos/queijaria-vale-guirita.jpg",
    descricao:
      "Produção artesanal do legítimo Queijo Canastra com visita guiada e degustação.",
    ctaHref: "https://www.google.com/maps/search/queijaria+vale+da+guirita",
  },
  {
    id: "caminho-do-ceu",
    nome: "Caminho do Céu",
    imagem: "/images/pontos-turisticos/caminho-do-ceu.jpg",
    descricao:
      "Mirante com vista panorâmica do alto da serra — perfeito para contemplar o pôr do sol.",
    ctaHref: "https://www.google.com/maps/search/caminho+do+ceu+canastra",
  },
];
