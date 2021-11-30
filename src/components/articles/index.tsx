import { VFC } from 'react';

import { latestArticles } from '../../lib/data';
import ArticleCard from './ArticleCard';

const LatestArticles: VFC = () => {
  return (
    <div className="w-screen bg-light-gray py-16 flex flex-col items-center xl:p-32">
      <div className="w-10/12 xl:w-full">
        <h2 className="text-center text-4xl text-primary-dark-blue pb-8 font-light xl:text-left">
          Latest Articles
        </h2>
        <div className="w-full xl:flex xl:gap-6">
          {latestArticles.map(({ src, author, title, description }) => (
            <ArticleCard
              key={`${title.toLowerCase()}-${author.toLowerCase()}`}
              {...{ src, author, title, description }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
