import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Details = () => {
    const{userid} = useParams()
    const[user,setuser] = useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${userid}`
fetch(url)
.then(res => res.json())
.then(data => setuser(data))


    },[])
    const history = useHistory()

    const handleclick = () =>{
history.push(`/friends`)
    }
    return (
        <div>
            <h1>details comming soon:{userid}</h1>
            <p>name:{user.name}</p>
            <p>{user.phone}</p>
            <button onClick ={handleclick}>click me go to friends</button>
        </div>
    );
};

export default Details;