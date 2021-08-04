import React from 'react';

const UserPage = ({ match, location }) => {
    const {
      params: { userId }
    } = match;
  
    return (
      <>
        <p>
          <strong>User ID: </strong>
          {userId}
        </p>
        <p>
          <strong>User Name: </strong>
          {users[userId - 1].name}
        </p>
      </>
    );
  };

  export default UserPage;