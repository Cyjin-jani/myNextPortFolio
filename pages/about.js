import Link from 'next/link';
import { Component } from 'react';
import Layout from '../components/Layout';
// fetch 동작이 잘 안되는 경우?가 있어서 넣은듯... (그냥 axios를 쓰자...)
import fetch from 'isomorphic-unfetch';

import Error from './_error';

export default class About extends Component {
  
  // react의 방법. state를 사용, useEffect와 같은 componentDidMount를 사용.
  // state = {
  //   user: null,
  // };
  // componentDidMount() {
  //   fetch('https://api.github.com/users/Cyjin-jani')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user:data
  //       });
  //     })
  // }

  static async getInitialProps() {
    // 미리 정보를 가져와야 해서 async-await구문을 사용함.
    const res = await fetch('https://api.github.com/users/Cyjin-jani');
    // const res = await fetch('https://api.github.com/users/Cyjin-jani1231232qwewqeqw'); //error
    const statusCode = res.status > 200 ? res.status : false;
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data);
      // })
    const data = await res.json(); //fetch특성상 여기도 await을 걸어줌.
    
    // getInitialProps는 객체를 리턴해야 함. (이게 props가 된다.)
    return { user: data, statusCode };
  }
  
  
  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About">
        <p> {user.name} </p>
        <img src={user.avatar_url} alt="Me" />
      </Layout>
    )
  }
}