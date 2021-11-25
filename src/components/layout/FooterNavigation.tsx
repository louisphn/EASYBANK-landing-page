import { VFC, memo } from 'react';

import { useRouter } from 'next/router';

import { footerMenu } from '../../lib/data';

const HeaderNavigation: VFC = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col h-4/6 justify-between xl:w-4/12 xl:h-[68%] xl:flex-wrap xl:gap-x-8 xl:ml-32">
      {footerMenu.map((item) => (
        <li
          key={item.path}
          onClick={() => router.push(item.path)}
          className="font-light text-center list-none text-white xl:text-left"
        >
          {item.name}
        </li>
      ))}
    </nav>
  );
};

export default memo(HeaderNavigation);
