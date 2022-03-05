import Link from "next/link";

export type LayoutProps = {
  children: JSX.Element | JSX.Element[],
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="drawer h-screen w-full">
      <input id="drawer-icon" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="drawer-icon" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2"><Link href='/'><a className="btn btn-ghost normal-case text-xl">f1Scraper</a></Link></div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><Link href='/news'><a className="btn btn-ghost normal-case text-xl">News</a></Link></li>
              <li><Link href='/old'><a className="btn btn-ghost normal-case text-xl">Read News</a></Link></li>
              <li><Link href='/bookmarked'><a className="btn btn-ghost normal-case text-xl">Bookmarked</a></Link></li>
              <li><Link href='/login'><a className="btn btn-ghost normal-case text-xl">Login</a></Link></li>
            </ul>
          </div>
        </div>
        <main className="container mx-auto my-4 bg-base-300 p-4">{children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer-icon" className="drawer-overlay"/>
        <ul className="menu pt-4 overflow-y-auto w-80 bg-base-100">
          <li><Link href='/news'><a className="btn btn-ghost normal-case text-xl">News</a></Link></li>
          <li><Link href='/old'><a className="btn btn-ghost normal-case text-xl">Read News</a></Link></li>
          <li><Link href='/bookmarked'><a className="btn btn-ghost normal-case text-xl">Bookmarked</a></Link></li>
          <li><Link href='/login'><a className="btn btn-ghost normal-case text-xl">Login</a></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Layout;