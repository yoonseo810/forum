'use client'

import { useSession } from 'next-auth/react'

const Profile = () => {
  const session = useSession()

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user)}</div>
  }
  return <div>From client: user in NOT signed in</div>
}

export default Profile
