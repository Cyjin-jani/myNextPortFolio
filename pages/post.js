import Layout from '../components/Layout';

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p> Lorem ipsum Lorem  </p>
    <p> Lorem ipsum Lorem  </p>
    <p> Lorem ipsum Lorem  </p>
    <p> Lorem ipsum Lorem  </p>
  </Layout>
)

export default Post;