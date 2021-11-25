import { VFC, memo } from 'react';
import { useRouter } from 'next/router';

import { footerMenu } from '../../lib/data';

const HeaderNavigation: VFC = () => {
  const router = useRouter();

  return (
    <nav>
      {footerMenu.map((item) => (
        <li
          key={item.path}
          onClick={() => router.push(item.path)}
          className="my-4 font-light text-center list-none text-white"
        >
          {item.name}
        </li>
      ))}
    </nav>
  );
};

export default memo(HeaderNavigation);
