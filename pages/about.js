import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => <Layout title="About">
  <Link href="/">
    <a>GO HOME </a>
  </Link>
  <p> A Javascript Programmer</p>
  <img src="/static/jslogo.png" alt="jslogo" />
</Layout>;

export default About;