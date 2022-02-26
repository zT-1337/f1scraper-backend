import { NextPage } from "next"

export type LayoutProps = {
  children: JSX.Element,
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout;