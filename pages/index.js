// link를 사용해서 페이지가 리로딩 되면서 이동하는 것이 아닌, 그저 빠르게 리다이렉트를 할 수 있게 된다.
// 즉, 서버에 요청을 보내서 다시 html파일부터 불러들이는게 아니라, 그냥 js파일만 가지고 페이지를 그려낸다.

import Link from "next/link";
import Layout from '../components/Layout';


const Index = () => 
  <Layout title="Home"> 

    <Link href="/about">
      <a>GO TO ABOUT</a>
    </Link>
    
    <p>Welcome to the home </p>
  </Layout>;

export default Index;