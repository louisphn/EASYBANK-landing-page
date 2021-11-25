import { VFC, memo, useState, useEffect } from 'react';

import Image from 'next/image';

import HeaderNavigation from './HeaderNavigation';
import PrimaryButton from '../button/PrimaryButton';

const Header: VFC = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setActive(true);
    } else setActive(false);
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        setActive(true);
      } else setActive(false);
    });
  }, []);

  return (
    <header className="fixed top-0 z-10 min-w-[320px] w-screen h-[64px] flex justify-center lg:overflow-hidden lg:min-w-auto">
      <div className="container w-11/12 h-full flex justify-between items-center">
        {/* logo */}
        <Image src="/assets/images/logo.svg" width={140} height={20} />
        {/* menu bar */}
        <div onClick={() => setActive(!active)} className="flex flex-col w-[28px] h-[16px] justify-between lg:hidden">
          <span
            className={`block w-full h-[2px] bg-gray-900 tranform transition-all duration-300 ${
              active ? 'rotate-45 translate-y-[8px]' : 'rotate-0'
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-gray-900 transition-all duration-300 ${active ? 'hidden' : 'block'}`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-gray-900 tranform transition-all duration-300 ${
              active ? '-rotate-45 translate-y-[-6px]' : 'rotate-0 translate-y-0'
            }`}
          ></span>
        </div>
        <HeaderNavigation active={active} />
        <div className="hidden lg:block">
          <PrimaryButton label={'Request Invite'} />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
