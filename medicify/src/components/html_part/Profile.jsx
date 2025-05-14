import React, { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = localStorage.getItem('medicify_user');
    if (getUser) {
      setUser(JSON.parse(getUser));
    }
  }, []);

  if (!user) {
    return <h3>Loading user information...</h3>; // You can customize this message or use a spinner
  }

  return (
    <>
      <br />
      <h1>User Profile</h1>
      <br />
      <h3>UserName: {user.firstname} {user.lastname}</h3>
      <br />
      <h3>Email: {user.email}</h3>
    </>
  );
}

export default Profile;
