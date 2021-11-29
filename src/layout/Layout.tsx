import { FC } from 'react';

import Head from 'next/head';

import { Header, Footer } from '../components/layout';

type Props = {
  pageTitle: string;
};

const Layout: FC<Props> = (props) => {
  const { pageTitle, children } = props;

  return (
    // <div className="relative min-h-[568px] h-auto min-w-[320px] w-screen xl:min-w-auto">
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className="mt-[64px] overflow-y-visible min-h-[calc(100vh-506px)] xl:min-h-[calc(100vh-192px)]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
