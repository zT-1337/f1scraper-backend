import { ChangeEvent, useEffect, useState } from "react";
import Layout from "../../components/layout/layout";

const Login = () => {
  const [password, setPassword] = useState('')

  useEffect(() => {
    setPassword(localStorage.getItem('password') || '')
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    localStorage.setItem('password', event.target.value);
  }

  return (
    <Layout>
      <input type='password' placeholder='password' value={password} onChange={onChange} className='input input-bordered input-primary w-full'/>
    </Layout>
  )
}

export default Login;