import { News } from "../../types/News"
import MediaComponent from "./media-component"

const NewsComponent = ({news} : {news: News}) => {
  const mediaComponents = news.medias.map((media) => {
    return <MediaComponent key={media.url} url={media.url} mediaType='Image'/>
  })

  return (
    <article className='prose max-w-none mx-auto w-3/4'>
      <h1>{news.title}</h1>
      <h3>{`${news.author} from ${new Date(news.publishedAt).toLocaleDateString('de-DE')}`}</h3>
      <h4><a href={news.sourceUrl}>{`Source ${news.sourceUrl}`}</a></h4>
      <p>{news.body}</p>
      {mediaComponents.length > 0 && mediaComponents}
    </article>
  )
}

export default NewsComponent