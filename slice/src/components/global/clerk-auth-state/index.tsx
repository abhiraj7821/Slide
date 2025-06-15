import React from 'react'

import { ClerkLoading,SignedIn,SignedOut,SignInButton, UserButton } from '@clerk/nextjs'
import {User} from 'lucide-react'
import  Loader from "../loader"
import { Button } from '@/components/ui/button'


type Props = {}

function ClerkAuthState({}: Props) {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
            <Button className='rounded-full bg-white text-black hover:bg-black hover:text-white'>
                <User/>
                Login
            </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
            <UserButton.UserProfileLink label='Dashboard' url={`/dashboard`} labelIcon={<User size={16}/>} />
        </UserButton>
      </SignedIn>

    </>
  );
}

export default ClerkAuthState