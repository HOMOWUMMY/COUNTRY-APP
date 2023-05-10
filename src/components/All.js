import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";

function All() {
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
    <div className="App" style={{ margin: 'auto', width: '80%' }}>
      <div className="container text-center">
        
      <br/>
      
      <br/>
        <main className="row" style={{justifyContent: 'space-between',}}>
          {
            data.map((item, index) => {
              return (
                <div className="col flex-wrap mt-3 m-3 " key={index} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', }}>
                  <div className="" style={{ width: '100%'}}>
                    <img src={item.flags.png} width="200" height="120" /><hr />
                    <h5>{item.name.common}</h5>
                  </div>
                </div>
              )
            })

          }

        </main>

      </div>
    </div>
  );
}

export default All;


// const arr = [1,2,4,3,5,4,6, 4]