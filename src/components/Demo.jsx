import React, { useState,useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";


const Demo = () => {
  const [user, setUser] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val() });
      });
      setUser(arr);
    });
  }, [db]);
  return (
    <div className='text-center'>{user.map((item, index) => (
      <div key={index}>
        <h2>Name: {item.username}</h2>
        <p>Email: {item.email}</p>
      </div>
    ))}</div>
  )
}

export default Demo