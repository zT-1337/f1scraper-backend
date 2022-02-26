export type News = {
  id: number,
  title: string,
  author: string,
  body: string,
  publishedAt: string,
  sourceUrl: string,
  medias: {url: string}[],
}