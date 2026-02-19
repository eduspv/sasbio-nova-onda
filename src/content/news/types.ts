export type NewsItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;   // ✅ texto completo
  date: string;      // YYYY-MM-DD
  category: string;
  image: string;     // ✅ caminho da imagem
};
