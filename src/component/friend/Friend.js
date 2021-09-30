import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import "./friend.css"

const Friend = (props) => {
    const{name,email,phone,id} = props.friend || {}
    const url = `/Friend/${id}`
    let history = useHistory()
    const handleclick =() =>{
        history.push(`${url}`)
    }
    return (
        <div className ="parent">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to ={url}>click me </Link> <br /> <br />
            <button onClick ={handleclick}>visit me</button>
        </div>
    );
};

export default Friend;