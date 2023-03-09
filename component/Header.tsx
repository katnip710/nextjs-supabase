import { Flex, Icon } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { default as Link } from 'next/link'
import { useRouter } from 'next/router'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { GoSignOut } from 'react-icons/go'

export default function Header() {
  const router = useRouter()

  const fadeInNav = keyframes`
    0% { opacity: 0; left: 100% }
    100% { opacity: 1: left: 95% }
  `

  return (
    <>
      <Flex
        sx={{
          display: ['none', 'flex', 'flex'],
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          shadow: 'inner',
          width: '10vw',
          height: 'auto',
          position: 'absolute',
          top: '50%',
          left: '95%',
          transform: 'translate(-50%, -50%)',
          animation: `${fadeInNav} 1s ease-in-out`,
          a: {
            padding: '1.2rem 0',
          },
          '.active': {
            '.icon': {
              color: '#2b2a2a',
              backgroundColor: '#FFD700',
            },
          },
          '.icon': {
            fontSize: '3rem',
            color: '#FFF',
            backgroundColor: '#2b2a2a',
            borderRadius: '40%',
            padding: '.7rem',
            cursor: 'pointer',
            ':hover': {
              color: '#2b2a2a',
              backgroundColor: '#fff',
            },
          },
        }}
      >
        <Link className={router.pathname === '/' ? 'active' : ''} href="/">
          <Icon className="icon" as={AiFillHome} />
        </Link>
        <Link className={router.pathname === '/account' ? 'active' : ''} href="/account">
          <Icon className="icon" as={CgProfile} />
        </Link>
        <Link className={router.pathname === '/sign-out' ? 'active' : ''} href="/sign-out">
          <Icon className="icon" as={GoSignOut} />
        </Link>
      </Flex>

      {/* <MobileNav /> */}
    </>
  )
}
