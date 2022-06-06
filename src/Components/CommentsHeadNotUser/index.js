import React from 'react'
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

function CommentsHeadNotUser() {
  return (
    <div>
      <p>Please feel free to authentificate yourself pressing on the button and left your comment.</p>
      <LoginButton />
      <LogoutButton />
    </div>
  )
}

export default CommentsHeadNotUser;