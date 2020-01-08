import React from 'react';
import { withRouter } from 'next/router';

const Message = (props) => {
  const handler = () => {
    // put the path where you want to go, this is a diff way to go to a route
    // 2nd argument to push is the actual route
    // we use withRouter for components that are not in the pages folder
    props.router.push({
      pathname: '/users/profile',
      query: { userId: 1 }
    }, '/users/profile/1')
  }
  return (
    <div>
      <p>Hello</p>
      <div>I am "{props.router.pathname}" page.</div>
      <div>
        Click <span onClick={handler}>here</span> read more.
      </div>
    </div>
  )
}

export default withRouter(Message);
