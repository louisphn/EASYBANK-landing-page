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
    <div className="overflow-y-visible">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className="mt-[64px] min-h-[calc(100vh-506px)] overflow-x-hidden xl:max-w-screen xl:min-h-[calc(100vh-192px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
