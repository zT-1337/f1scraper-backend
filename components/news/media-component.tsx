import Image from 'next/image';

type MediaType = 'Image' | 'Video' | 'Other';

const MediaComponent = ({url, mediaType}: {url: string, mediaType: MediaType}) => {
  let media = undefined;

  switch(mediaType) {
    case 'Image':
      media = <Image className='object-none float-left' src={url} width={200} height={200} alt={''}/>
      break;
    case 'Video':
      //TODO
      break;
    default:
      media = <p>{'Unsupported media type'}</p>
      break;
  }

  return (
    <div>
      <a href={url}>{media !== undefined && media}</a>
    </div>
  )
}

export default MediaComponent;