import React, { useEffect, useState } from 'react'
import { API } from '../helpers/const';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Rick = () => {
    const [state, setState] = useState([]);
    const getUsers = async () => {
        const {data} = await axios(API)
        console.log(data.results);
        setState(data.results)
    }
    useEffect(() => {
        getUsers();
    }, []);
  return (
    <div>
      <h1>Hi</h1>
      {state.map((elem) => (
        <Link to={`/rick/${elem.id}`} key={elem.id}>
            <img src={elem.image} alt="" />
        </Link>
      ))}
    </div>
  )
}

export default Rick
