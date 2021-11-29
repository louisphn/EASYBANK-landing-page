import { VFC } from 'react';

import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ImageText: VFC<Props> = ({ src, title, description }) => {
  return (
    <div className="my-12 flex flex-col items-center xl:items-start">
      <div className="w-[72px]">
        <Image
          src={`/assets/images${src}`}
          objectFit={'scale-down'}
          width={72}
          height={72}
          alt={'icon'}
        />
      </div>
      <h3 className="font-light text-2xl text-center text-primary-dark-blue my-4 xl:my-8 xl:whitespace-nowrap xl:text-left">
        {title}
      </h3>
      <p className="font-light text-gray-blue text-center xl:text-left">
        {description}
      </p>
    </div>
  );
};

export default ImageText;
