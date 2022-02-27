import Link from "next/link";

export type LayoutProps = {
  children: JSX.Element,
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <nav className="navbar bg-base-300">
        <Link href='/'><a className="btn btn-ghost normal-case text-xl">f1Scraper</a></Link>
      </nav>
      <main className="w-3/4 mx-auto my-4 bg-base-300 p-4">{children}</main>
    </div>
  )
}

export default Layout;