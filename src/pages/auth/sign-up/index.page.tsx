import { SignUp } from "components/pages/auth/sign-up"
import { NextPage } from "next"
import Head from "next/head"

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ột Ột - Đăng ký</title>
      </Head>
      <SignUp />
    </>
  )
}

export default SignUpPage
