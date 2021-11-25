import { memo } from 'react';
import Image from 'next/image';

const SNSIcons = () => {
  const icons = ['/icon-facebook.svg', '/icon-youtube.svg', '/icon-twitter.svg', '/icon-pinterest.svg', '/icon-instagram.svg']
  return (
    <ul className="flex">
      {icons.map((icon) => (
        <li key={icon} className="mx-4">
          <Image src={`/assets/images${icon}`} width={28} height={28} />
        </li>
      ))}
    </ul>
  )
}

export default memo(SNSIcons);