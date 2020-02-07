import React from 'react';
import { withRouter } from 'next/router';

const Message = (props) => {
  // console.log(props)
  const handler = () => {
    // put the path where you want to go, this is a diff way to go to a route
    // like we did in server.js server.get('/users/profile/:id'...
    // 2nd argument to push is the actual route, the custom url, what url will show
    // we use withRouter for components that are not in the pages folder
    // and we want to use the all props from router object: pathname, push, query, components, etc, 
    props.router.push({
      pathname: '/users/profile',
      // profile needs the userId to work
      query: { userId: 1 }
    }, '/users/profile/1')
  }
  return (
    <div>
      <p>Hello</p>
      <div>I am "{props.router.pathname}" page.</div>
      <div>
        Click <span onClick={handler}>here</span> read more about the user 1.
      </div>
    </div>
  )
}

export default withRouter(Message);
