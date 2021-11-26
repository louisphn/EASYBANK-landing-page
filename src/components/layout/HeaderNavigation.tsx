import { VFC, memo } from 'react';

import { useRouter } from 'next/router';

import { headerMenu } from '../../lib/data';

interface Props {
  active: boolean;
}

const HeaderNavigation: VFC<Props> = ({ active }) => {
  const router = useRouter();

  if (!active) return <></>;
  return (
    <nav className="absolute z-10 top-[64px] left-0 w-screen h-screen bg-gradient-to-b from-primary-dark-blue to-transparent xl:w-screen xl:min-w-auto xl:h-[64px] xl:top-0 xl:bg-none">
      <ul className="absolute transform left-[50%] top-8 translate-x-[-50%] w-11/12 bg-white flex flex-col items-center rounded-xl py-8 xl:top-0 xl:transform xl:justify-between xl:w-4/12 xl:mt-[2px] xl:min-w-[468px] xl:bg-transparent xl:py-0 xl:flex-row">
        {headerMenu.map((item) => (
          <li
            key={item.toLowerCase()}
            onClick={() => router.push(`/${item.toLowerCase()}`)}
            className="pointer-events-auto cursor-pointer text-primary-dark-blue my-4 text-xl"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(HeaderNavigation);
