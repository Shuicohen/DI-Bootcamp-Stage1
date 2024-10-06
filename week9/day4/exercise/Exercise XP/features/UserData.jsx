import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../features/userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  
  const { users, loading, error } = useSelector((state) => state.userReducer || {});

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  console.log("Redux State Users: ", users);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users && users.length > 0 ? ( 
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        ))
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default UserData;
