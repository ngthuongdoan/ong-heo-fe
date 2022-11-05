import Login from "components/pages/auth/log-in"
import { NextPage } from "next"
import Head from "next/head"

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ột Ột - Đăng nhập</title>
      </Head>
      <Login />
    </>
  )
}

export default LoginPage
