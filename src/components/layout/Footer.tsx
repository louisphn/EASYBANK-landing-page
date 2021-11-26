import { VFC, memo } from 'react';

import Image from 'next/image';

import PrimaryButton from '../button/PrimaryButton';
import FooterNavigation from './FooterNavigation';
import SNSIcons from './SNSIcons';

const Footer: VFC = () => {
  return (
    <footer className="overflow-hidden flex justify-center items-center z-0 py-8 bg-primary-dark-blue min-w-[320px] w-screen h-[506px] xl:px-24 xl:h-[192px] xl:min-w-auto">
      <div className="container overflow-hidden flex flex-col h-[506px] justify-around items-center xl:flex-row xl:h-[192px]">
        {/* navigation + sns icons + image group */}
        <div className="flex flex-col w-full h-4/6 justify-around xl:justify-start xl:flex-row xl:items-center">
          {/* image and sns icons group */}
          <div className="flex flex-col justify-center xl:justify-between">
            <div className="block mx-auto mb-6 max-w-[140px] h-[20px] xl:my-0 xl:mx-0">
              <Image
                src="/assets/images/logo-footer.svg"
                alt={'logo-footer'}
                width={140}
                height={20}
              />
            </div>
            <SNSIcons />
          </div>
          <FooterNavigation />
        </div>
        <div className="flex flex-col h-1/6 justiy-between items-center xl:items-end xl:h-auto xl:whitespace-nowrap">
          <PrimaryButton label={'Request Invite'} />
          <p className="text-light-gray mt-4">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
