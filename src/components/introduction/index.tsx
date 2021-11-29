import { VFC } from 'react';

import { introductionData } from '../../lib/data';
import ImageText from './ImageText';

const Introduction: VFC = () => {
  return (
    <section className="bg-light-gray px-8 py-16 xl:py-32">
      <div className="container xl:flex xl:flex-col xl:items-start xl:px-[128px]">
        <div>
          <h2 className="text-4xl text-center font-light text-primary-dark-blue xl:text-left">
            Why choose Easybank?
          </h2>
          <p className="text-gray-blue font-light text-center xl:my-8 xl:w-8/12 xl:text-left">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="w-full mt-12 xl:mt-0 xl:flex xl:gap-x-12">
          {introductionData.map(({ src, title, description }) => (
            <ImageText key={title} {...{ src, title, description }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
