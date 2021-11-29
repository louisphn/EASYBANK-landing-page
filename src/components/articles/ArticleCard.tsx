import { VFC } from 'react';

import Image from 'next/image';

interface Props {
  src: string;
  author: string;
  title: string;
  description: string;
}

const ArticleCard: VFC<Props> = ({ src, author, title, description }) => {
  return (
    <div className="rounded-md overflow-hidden flex flex-col items-center my-8 bg-white">
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          width={240}
          height={240}
          src={`/assets/images${src}`}
          layout={'responsive'}
          objectFit={'cover'}
          alt={'article-photo'}
        />
      </div>
      <div className="w-11/12 py-6 xl:w-10/12">
        <p className="text-gray-blue font-light text-sm">By {author}</p>
        <h3 className="text-primary-dark-blue font-light xl:py-4">{title}</h3>
        <p className="text-gray-blue font-light text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
