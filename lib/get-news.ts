import { URLSearchParams } from "url";
import { NEWS_URL } from "../constants/api";
import { News, NewsStatus } from "../types/News";
import { Page } from "../types/page";

export async function fetchNewsPage({page, pageSize, newsStatus}: {page: number, pageSize: number, newsStatus: NewsStatus | undefined}): Promise<Page<News>> {
  const urlSearchParams = new URLSearchParams({'page': page.toString(), 'pageSize': pageSize.toString()})

  if(newsStatus !== undefined) {
    urlSearchParams.append('newsStatus', newsStatus);
  }

  const url = `${NEWS_URL}?${urlSearchParams.toString()}`

  const respone = await fetch(url);
  return await respone.json();
}

export function parsePageParam({pageParam, defaultValue}: {pageParam: string, defaultValue: number}): number {
  const page = parseInt(pageParam);

  if(isNaN(page) || page < 1) {
    return defaultValue;
  }

  return page;
}