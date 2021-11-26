import { VFC } from 'react';

import Image from 'next/image';

import PrimaryButton from '../button/PrimaryButton';

const Heading: VFC = () => {
  return (
    <section className="w-screen min-h-[calc(100vh-192px)] flex items-center">
      <div className="bg-white min-w-[320px] w-screen flex flex-col justify-center items-start md:flex-row md:justify-between md:items-center md:overflow-hidden md:min-w-auto">
        <div className="relative w-full md:w-6/12 md:order-2">
          <div className="block w-full min-w-[320px] h-[284px] overflow-hidden md:hidden">
            <Image
              priority
              src={'/assets/images/bg-intro-mobile.svg'}
              layout={'responsive'}
              width={320}
              height={284}
              alt={'background-image'}
            />
          </div>
          <div className="hidden md:block md:w-full md:max-h-full">
            <Image
              priority
              src={'/assets/images/bg-intro-desktop.svg'}
              layout={'responsive'}
              width={320}
              height={284}
              alt={'background-image'}
            />
          </div>
          <div className="absolute block w-[90vw] bottom-0 left-[50%] transform translate-x-[-50%] md:w-full md:-bottom-16">
            <Image
              priority
              src={'/assets/images/image-mockups.png'}
              objectFit={'contain'}
              layout={'responsive'}
              width={320}
              height={420}
              alt={'background-phone'}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center p-8 md:p-0 md:items-start md:ml-32 md:w-3/12 md:h-full md:order-1">
          <h1 className="font-medium text-primary-dark-blue text-center md:text-left">
            Next generation digital banking
          </h1>
          <p className="text-gray-blue w-full text-center mb-8 md:text-left">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <PrimaryButton label={'Request Invite'} />
        </div>
      </div>
    </section>
  );
};

export default Heading;
