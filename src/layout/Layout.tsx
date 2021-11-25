import { FC } from 'react'
import Head from 'next/head'

import { Header, Footer } from '../components/layout'

type Props = {
  pageTitle: string
}

const Layout: FC<Props> = (props) => {
  const { pageTitle, children } = props

  return (
    <div className="relative min-h-[568px] min-w-[320px] w-screen h-screen lg:min-w-auto">
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout