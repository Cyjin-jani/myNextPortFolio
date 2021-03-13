import Layout from '../components/Layout';
import { withRouter } from'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p> Lorem ipsum Lorem  </p>
    <p> Lorem ipsum Lorem  </p>
    <p> Lorem ipsum Lorem  </p>
    <p> Lorem ipsum Lorem  </p>
  </Layout>
)

export default withRouter(Post);