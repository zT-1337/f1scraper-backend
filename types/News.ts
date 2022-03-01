export type MediaType = 'IMAGE' | 'VIDEO' | 'OTHER'
export type NewsStatus = 'READ' | 'UNREAD' | 'BOOKMARKED'

export type News = {
  id: number,
  title: string,
  author: string,
  body: string,
  publishedAt: string,
  sourceUrl: string,
  newsStatus: NewsStatus,
  medias: {url: string, mediaType: MediaType}[],
}