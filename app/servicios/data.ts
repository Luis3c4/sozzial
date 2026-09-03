export type ServiceBadge = "Alta" | "Media" | "Premium" | null;

export type ServiceItem = {
  id: string;
  name: string;
  badge: ServiceBadge;
  range: string;
  time: string;
  refill: string;
  price: string;
};

export type Category = {
  key: string;
  label: string;
  services: ServiceItem[];
};

export type NetworkKey = "instagram" | "facebook" | "tiktok" | "x";

export type Network = {
  key: NetworkKey;
  label: string;
  categories: Category[];
};

export const networks: Network[] = [
  {
    key: "instagram",
    label: "Instagram",
    categories: [
      {
        key: "seguidores",
        label: "Seguidores",
        services: [
          { id: "2751", name: "Seguidores Globales", badge: "Alta", range: "10 – 50K", time: "2 h 28 min", refill: "Relleno 30 días", price: "3.78" },
          { id: "5794", name: "Seguidores Económicos", badge: "Media", range: "50 – 1M", time: "3 h 19 min", refill: "Relleno 30 días", price: "2.49" },
          { id: "5796", name: "Seguidores Estables", badge: "Alta", range: "10 – 10M", time: "1 h 31 min", refill: "Relleno 30 días", price: "2.604" },
          { id: "5797", name: "Seguidores Latinos", badge: "Premium", range: "50 – 5K", time: "Sin datos", refill: "Relleno 30 días", price: "3.851" },
        ],
      },
      {
        key: "me-gusta",
        label: "Me gusta",
        services: [
          { id: "3102", name: "Me gusta Globales", badge: "Alta", range: "20 – 20K", time: "45 min", refill: "Relleno 15 días", price: "1.15" },
          { id: "3110", name: "Me gusta Económicos", badge: "Media", range: "50 – 100K", time: "1 h 20 min", refill: "Sin relleno", price: "0.79" },
          { id: "3155", name: "Me gusta Premium", badge: "Premium", range: "20 – 5K", time: "20 min", refill: "Relleno 30 días", price: "1.99" },
        ],
      },
      {
        key: "vistas",
        label: "Vistas de Reels",
        services: [
          { id: "4021", name: "Vistas de Reels Globales", badge: "Alta", range: "100 – 1M", time: "10 min", refill: "Sin relleno", price: "0.35" },
          { id: "4033", name: "Vistas de Reels Económicas", badge: null, range: "100 – 5M", time: "30 min", refill: "Sin relleno", price: "0.19" },
        ],
      },
      {
        key: "comentarios",
        label: "Comentarios",
        services: [
          { id: "6210", name: "Comentarios Aleatorios", badge: "Media", range: "10 – 500", time: "1 h", refill: "Sin relleno", price: "4.20" },
          { id: "6234", name: "Comentarios Personalizados", badge: "Premium", range: "10 – 200", time: "2 h", refill: "Sin relleno", price: "6.90" },
        ],
      },
    ],
  },
  {
    key: "facebook",
    label: "Facebook",
    categories: [
      {
        key: "seguidores",
        label: "Seguidores de página",
        services: [
          { id: "7001", name: "Seguidores Globales", badge: "Alta", range: "50 – 50K", time: "2 h", refill: "Relleno 30 días", price: "4.10" },
          { id: "7009", name: "Seguidores Económicos", badge: "Media", range: "50 – 200K", time: "4 h", refill: "Sin relleno", price: "2.75" },
        ],
      },
      {
        key: "me-gusta",
        label: "Me gusta",
        services: [
          { id: "7102", name: "Me gusta a la Página", badge: "Alta", range: "20 – 20K", time: "1 h 10 min", refill: "Relleno 15 días", price: "1.60" },
          { id: "7118", name: "Me gusta a Publicaciones", badge: null, range: "20 – 50K", time: "40 min", refill: "Sin relleno", price: "0.95" },
        ],
      },
      {
        key: "vistas",
        label: "Vistas de Video",
        services: [
          { id: "7205", name: "Vistas de Video Globales", badge: "Alta", range: "100 – 1M", time: "15 min", refill: "Sin relleno", price: "0.30" },
          { id: "7219", name: "Vistas de Video Económicas", badge: "Media", range: "100 – 5M", time: "35 min", refill: "Sin relleno", price: "0.18" },
        ],
      },
      {
        key: "comentarios",
        label: "Comentarios",
        services: [
          { id: "7310", name: "Comentarios Aleatorios", badge: "Media", range: "10 – 500", time: "1 h 30 min", refill: "Sin relleno", price: "3.95" },
          { id: "7322", name: "Comentarios Personalizados", badge: "Premium", range: "10 – 150", time: "3 h", refill: "Sin relleno", price: "7.20" },
        ],
      },
    ],
  },
  {
    key: "tiktok",
    label: "TikTok",
    categories: [
      {
        key: "seguidores",
        label: "Seguidores",
        services: [
          { id: "8001", name: "Seguidores Globales", badge: "Alta", range: "20 – 50K", time: "1 h", refill: "Relleno 30 días", price: "3.10" },
          { id: "8014", name: "Seguidores Económicos", badge: "Media", range: "20 – 500K", time: "3 h", refill: "Sin relleno", price: "1.95" },
        ],
      },
      {
        key: "me-gusta",
        label: "Me gusta",
        services: [
          { id: "8102", name: "Me gusta Globales", badge: "Alta", range: "50 – 50K", time: "20 min", refill: "Relleno 15 días", price: "0.85" },
          { id: "8119", name: "Me gusta Económicos", badge: null, range: "50 – 200K", time: "50 min", refill: "Sin relleno", price: "0.55" },
        ],
      },
      {
        key: "vistas",
        label: "Vistas de Video",
        services: [
          { id: "8203", name: "Vistas Globales", badge: "Alta", range: "100 – 5M", time: "5 min", refill: "Sin relleno", price: "0.09" },
          { id: "8217", name: "Vistas Premium", badge: "Premium", range: "100 – 1M", time: "10 min", refill: "Sin relleno", price: "0.22" },
        ],
      },
      {
        key: "comentarios",
        label: "Comentarios",
        services: [
          { id: "8310", name: "Comentarios Aleatorios", badge: "Media", range: "10 – 500", time: "1 h", refill: "Sin relleno", price: "3.40" },
          { id: "8325", name: "Comentarios Personalizados", badge: "Premium", range: "10 – 200", time: "2 h 30 min", refill: "Sin relleno", price: "6.15" },
        ],
      },
    ],
  },
  {
    key: "x",
    label: "X",
    categories: [
      {
        key: "seguidores",
        label: "Seguidores",
        services: [
          { id: "9001", name: "Seguidores Globales", badge: "Alta", range: "20 – 20K", time: "3 h", refill: "Relleno 30 días", price: "4.80" },
          { id: "9014", name: "Seguidores Económicos", badge: "Media", range: "20 – 100K", time: "5 h", refill: "Sin relleno", price: "3.20" },
        ],
      },
      {
        key: "me-gusta",
        label: "Me gusta",
        services: [
          { id: "9102", name: "Me gusta Globales", badge: "Alta", range: "20 – 20K", time: "40 min", refill: "Sin relleno", price: "1.35" },
          { id: "9118", name: "Me gusta Económicos", badge: null, range: "20 – 50K", time: "1 h", refill: "Sin relleno", price: "0.90" },
        ],
      },
      {
        key: "vistas",
        label: "Vistas",
        services: [
          { id: "9203", name: "Vistas de Publicación", badge: "Alta", range: "100 – 1M", time: "15 min", refill: "Sin relleno", price: "0.25" },
          { id: "9219", name: "Vistas Económicas", badge: "Media", range: "100 – 5M", time: "30 min", refill: "Sin relleno", price: "0.14" },
        ],
      },
      {
        key: "comentarios",
        label: "Comentarios",
        services: [
          { id: "9310", name: "Comentarios Aleatorios", badge: "Media", range: "10 – 300", time: "1 h 45 min", refill: "Sin relleno", price: "4.60" },
          { id: "9325", name: "Comentarios Personalizados", badge: "Premium", range: "10 – 150", time: "3 h", refill: "Sin relleno", price: "8.10" },
        ],
      },
    ],
  },
];
