import { useState } from "react";
import Navbar from "../pages/Navbar";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";



function Currency() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const baseUrl = 'https://restcountries.com/v3.1/currency/'
    const searchName = (name) => {
        axios(`${baseUrl}${name}`).then((res) => {
            if(res.status === 200) {
                console.log(res.data)
                const api = res.data
                setData(api)
                setLoading(false)
                setError(false)
            }
        }).catch((err) => {
            setError(true)
        })
    }

    const logicButton = () => {
        setLoading(true)
        searchName(input)
    }

    let content = '';

    if (error) {
        content = <h1 className="text-center text-danger">INPUT ERROR!!! PLEASE CHECK YOUR NETWORK</h1>
    } else {
        if (loading) {
            content = <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        } else {
            content = <div className="container ">
                {
                    data.map((item, index) => {
                        return (
                            <div className="container flex-wrap mt-3 m-3 " key={index} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                               <br />
                                <div>
                                    <img src={item.flags.png} width="200" height="120" /><br /><br /><hr />
                                    <h5>Country: {item.name.common}</h5>
                                    <hr />
                                    <h5>population: {item.population}</h5>
                                </div>
                                <hr />
                            </div>
                        )
                    })

                }
            </div>
        }
    }
    return (
        <>
            <div className="container" style={{ marginTop: '40px' }}>
                <input className="form-control " type="text" value={input} onChange={inputHandler} />
                <button className="btn btn-dark mt-3 p-1 w-100" onClick={logicButton}>find</button>


                {content}
            </div>



        </>
    )
}

export default Currency;