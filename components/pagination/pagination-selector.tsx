import Link from "next/link";

const PaginationSelector = ({activePage, totalPage, href}: {activePage: number, totalPage: number, href: string}) => {
  const pages: JSX.Element[] = getPagination({activePage, totalPage, href});
  
  return (
    <div className='btn-group'>
      {pages}
    </div>
  )
}

const getPagination = ({activePage, totalPage, href}: {activePage: number, totalPage: number, href: string}): JSX.Element[] => {
  if(totalPage < 8) {
    return pagesFromAndTo({from: 1, to: totalPage, activePage, href});
  }

  const result: JSX.Element[] = [];

  if(activePage < 4) {
    result.push(...pagesFromAndTo({from: 1, to: 5, activePage, href}))
    result.push(<PageButton status='Disabled' content={'...'} href={href}/>)
    result.push(<PageButton status='Default' content={totalPage} href={href}/>)
    return result;
  }

  if(totalPage - activePage < 4) {
    result.push(<PageButton status='Default' content={1} href={href}/>)
    result.push(<PageButton status='Disabled' content={'...'}  href={href}/>)
    result.push(...pagesFromAndTo({from: totalPage - 4, to: totalPage, activePage, href}))
    return result;
  }

  result.push(<PageButton status='Default' content={1} href={href}/>)
  result.push(<PageButton status='Disabled' content={'...'} href={href}/>)
  result.push(...pagesFromAndTo({from: activePage - 1, to: activePage + 1, activePage, href}))
  result.push(<PageButton status='Disabled' content={'...'} href={href}/>)
  result.push(<PageButton status='Default' content={totalPage} href={href}/>)

  return result;
}

const pagesFromAndTo = ({from, to, activePage, href}: {from: number, to: number, activePage: number, href: string}): JSX.Element[] => {
  const result: JSX.Element[] = []

  for(let i = from; i <= to; ++i) {
    const status = i === activePage ? 'Active' : 'Default';

    result.push(<PageButton status={status} content={i} href={href}/>)
  }

  return result;
}

const PageButton = ({status, content, href}: {status: 'Active' | 'Disabled' | 'Default', content: string | number, href: string}) => {
  let classNames = 'btn ';

  switch(status) {
    case 'Active':
      classNames += 'btn-active';
      break;
    case 'Disabled':
      classNames += 'btn-disabled';
      break;
    default:
      break;
  }

  return <Link href={`${href}?page=${content}`}><a className={classNames}>{content}</a></Link>
}
 
export default PaginationSelector;