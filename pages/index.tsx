import Header from '@/component/Header'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
// import { Auth } from '@supabase/auth-ui-react'
import type { NextPage } from 'next'
import Account from '../component/Account'

const Home: NextPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <div className="row">
          <div className="col-6">
            <h1 className="header">Supabase Auth + Storage</h1>
            <p className="">
              Experience our Auth and Storage through a simple profile management example. Create a
              user profile and upload an avatar image. Fast, simple, secure.
            </p>
          </div>
          <div className="col-6 auth-widget">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
              providers={['github', 'facebook']}
              socialLayout="horizontal"
            />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <h3>Account</h3>
          <Account session={session} />
        </>
      )}
    </div>
  )
}

export default Home
