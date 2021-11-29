import LatestArticles from '../components/articles';
import Heading from '../components/heading';
import Introduction from '../components/introduction';
import Layout from '../layout/Layout';

const Index = () => {
  return (
    <Layout pageTitle={'Easy Bank'}>
      <Heading />
      <Introduction />
      <LatestArticles />
    </Layout>
  );
};

export default Index;
