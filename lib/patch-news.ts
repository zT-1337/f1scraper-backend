import { NEWS_URL } from "../constants/api";
import { NewsStatus } from "../types/News";

export async function setNewsStatus({id, authHeader, newsStatus}: {id: number, authHeader: string, newsStatus: NewsStatus}) {
  const url = `${NEWS_URL}/${id}`

  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({newsStatus: newsStatus})
  });
}