import { useState, useEffect } from 'react';
import Navbar from "../pages/Navbar";
import axios from 'axios';
import React from 'react'
import {Link, Outlet} from 'react-router-dom'
  import { Form } from 'react-router-dom';
import Categories from './Categories';

const Population = () => {
  
    const [data, setData] = useState([]);
    const fetchData = () => {
    axios('https://restcountries.com/v3.1/all').then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        const api = res.data;
        setData(api)
      }
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
     <div className="row">
            {
            data.map((item, index) => {
                return (
                  <div className="container flex-wrap mt-3 m-3 " key={index} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                  <br />
                   <div>
                       <img src={item.flags.png} width="180" height="90" /><br /><br /><hr />
                       <h5>Country: {item.name.common}</h5>
                       <hr />
                       <h5>population: {item.population}</h5>
                   </div>
                   <hr />
               </div>
                )
            })}
        </div>   
    </>

  )
}

export default Population