import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode ? `Could not load your user data: Status code ${statusCode}` : `Could not get the page SORRY!!` }
  </Layout>
);

