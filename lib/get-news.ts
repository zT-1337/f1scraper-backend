import { URLSearchParams } from "url";
import { NEWS_URL } from "../constants/api";
import { News } from "../types/News";
import { Page } from "../types/page";

export async function fetchNewsPage({page, pageSize}: {page: number, pageSize: number}): Promise<Page<News>> {
  const urlSearchParams = new URLSearchParams({'page': page.toString(), 'pageSize': pageSize.toString()})
  const url = `${NEWS_URL}?${urlSearchParams.toString()}`

  const respone = await fetch(url);
  return await respone.json();
}