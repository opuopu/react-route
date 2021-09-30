import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Friend from '../friend/Friend';
import './fri.css'

const Friends = () => {
    const [fri,setfri] = useState([])

    useEffect(()=>{
   
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setfri(data))
    },[])

    
    return (
        <div>
             <h1>this is friends list</h1>
           <div className ="grids">
           {
                 fri.map(friend => <Friend friend ={friend}/>)
             }
           </div>
        </div>
    );
};

export default Friends;