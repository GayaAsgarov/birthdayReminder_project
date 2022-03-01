import React, { useState } from 'react';
import { usersData } from './Users';
import User from './User';

const App = () => {

  const [users, setUsers] = useState(usersData);

  const clear =()=>{
    setUsers([]);
  }

  return (
    <div className='container'>
      <div className="users-box">
        <h2>{users.length} birthdays today</h2>
        <div className="people">
          {users.map((user)=>{
            const { id, imgURL, name, age} = user;
            return(
              <User  key={id} imgURL={imgURL} name={name} age={age} />
            );
          })}
        </div>
        <button className='btn' onClick={clear}>clear all</button>
      </div>
    </div>
  )
}

export default App

