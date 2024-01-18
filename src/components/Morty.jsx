import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../helpers/const';

const Morty = () => {
  const {id} = useParams();
  const [states, setStates] = useState("");
  const  getUser = async () => {
    const {data} = await axios(`${API}/${id}`)
    console.log(data);
    setStates(data);
  }

  useEffect(() => {
    getUser();
  }, [id])
  return (
    <div>
      <h1>{states.name}</h1>
      <h2>{states.status}</h2>
      <h3>{states.species}</h3>
      <img src={states.image} alt="" />
    </div>
  )
}

export default Morty
