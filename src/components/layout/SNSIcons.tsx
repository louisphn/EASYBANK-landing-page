import { memo } from 'react';

import Image from 'next/image';

const SNSIcons = () => {
  const icons = [
    '/icon-facebook.svg',
    '/icon-youtube.svg',
    '/icon-twitter.svg',
    '/icon-pinterest.svg',
    '/icon-instagram.svg',
  ];
  return (
    <ul className="flex justify-center xl:justify-start">
      {icons.map((icon) => (
        <li key={icon} className="mx-4 xl:my-4 xl:first:ml-0 xl:first:mr-4 ">
          <Image
            src={`/assets/images${icon}`}
            alt={'sns-icon'}
            width={28}
            height={28}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(SNSIcons);
