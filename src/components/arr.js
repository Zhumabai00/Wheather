import axios from "axios";
import React, { useState } from "react";
import './style.scss'

const Arr = () => {
    const [state, setState] = useState({})
    const [city, setCity] = useState('')
    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
            .then((res) => setState(res.data))
    }


    return (
        <div className="main">
            <section className="weather">
                <div className="app">
                    <h1 className="top">Прогноз погоды</h1>
                    <div className="weather__from">
                        <input type="text" className="weather__input" onChange={(e) => setCity(e.target.value)} />
                        <button type="button" className="button" onClick={() => getWeather()}>Получить</button>
                    </div>
                    {
                        JSON.stringify(state) === '{}' ? (
                            <p className="text-padding">"здесь будет ваша погода"</p>
                        ) : (
                            <>
                                <div className="weathear__top">
                                    <h2 className="city">{state.name}</h2>
                                    <p className="contry">{state.sys.country}</p>
                                </div>
                                <div className="weather__main">
                                    <p className="degree">{Math.round(state.main.temp - 273, 15)}°C</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </section>
        </div >
    );
}

export default Arr;

