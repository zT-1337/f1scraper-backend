import { useState } from "react"
import { News, NewsStatus } from "../../types/News"
import MediaComponent from "./media-component"
import Router from 'next/router'

const NewsComponent = ({news} : {news: News}) => {
  const [newsState, setNewsState] = useState(news.newsStatus);

  const onNewsStatusButtonClicked = async (newsStatus: NewsStatus) => {
    const response = await fetch(`/api/news/${news.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': localStorage.getItem('password') || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newsStatus: newsStatus})
    })

    console.log(response);

    if(response.status === 401) {
      Router.push('/login');
      return;
    }

    if(!response.ok) {
      console.log('something went wrong');
    }

    setNewsState(newsStatus);
  }

  const mediaComponents = news.medias.map((media) => {
    return <MediaComponent key={media.url} url={media.url} mediaType={media.mediaType}/>
  })

  return (
    <article className='prose max-w-none mx-auto w-3/4'>
      <h1>{news.title}</h1>
      <h3>{`${news.author} from ${new Date(news.publishedAt).toLocaleDateString('de-DE')}`}</h3>
      <h4><a href={news.sourceUrl}>Source</a></h4>
      <p>{news.body}</p>
      <div className='w-full my-4'>
        <NewsStatusButton isSelected={newsState === 'UNREAD'} newsStatus={'UNREAD'} onClick={onNewsStatusButtonClicked}/>
        <NewsStatusButton isSelected={newsState === 'READ'} newsStatus={'READ'} onClick={onNewsStatusButtonClicked}/>
        <NewsStatusButton isSelected={newsState === 'BOOKMARKED'} newsStatus={'BOOKMARKED'} onClick={onNewsStatusButtonClicked}/>
      </div>
      {mediaComponents.length > 0 && mediaComponents}
    </article>
  )
}

const NewsStatusButton = ({isSelected, newsStatus, onClick}: {isSelected: boolean, newsStatus: NewsStatus, onClick: (newsStatus: NewsStatus) => void}) => {
  let classNames = 'btn mb-4 block sm:inline sm:mr-4';

  if(isSelected) {
    classNames += ' btn-primary';
  }

  return (
    <button className={classNames} onClick={() => onClick(newsStatus)}>{newsStatus}</button>
  )
}

export default NewsComponent