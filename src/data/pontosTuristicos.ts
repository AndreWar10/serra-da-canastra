export type PontoTuristico = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  ctaHref: string;
};

export const pontosTuristicos: PontoTuristico[] = [
  {
    id: "capela-itajui",
    nome: "Capela Itajuí",
    imagem: "/images/pontos-turisticos/capela-itajui.png",
    descricao:
      "Capela na região de Babilônia (Delfinópolis), com vista para a serra — parada especial no roteiro.",
    ctaHref:
      "https://www.google.com/maps/place/Capela+do+Itaju%C3%AD/@-20.2997931,-46.7428782,15z/data=!4m14!1m7!3m6!1s0x94b1243833facab9:0xf9733872d39d1f70!2sQueijaria+Vale+da+Gurita!8m2!3d-20.2950572!4d-46.7304649!16s%2Fg%2F11fzfdwgz4!3m5!1s0x94b1258b219a0d6f:0x76cf47b96f6e3652!8m2!3d-20.2997799!4d-46.7429001!16s%2Fg%2F11qh18qyqg?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "queijaria-vale-guirita",
    nome: "Queijaria Vale da Guirita",
    imagem: "/images/pontos-turisticos/queijaria-vale-guirita.png",
    descricao:
      "Produção artesanal do legítimo Queijo Canastra com visita guiada e degustação.",
    ctaHref: "https://www.google.com/maps/search/queijaria+vale+da+guirita",
  },
  {
    id: "caminho-do-ceu",
    nome: "Caminho do Céu",
    imagem: "/images/pontos-turisticos/caminho-do-ceu.png",
    descricao:
      "Mirante com vista panorâmica do alto da serra — perfeito para contemplar o pôr do sol.",
    ctaHref: "https://www.google.com/maps/search/caminho+do+ceu+canastra",
  },
];
