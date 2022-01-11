// Imports
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components

// Styling
import './style.scss';

const MeteoWidget = ({ city, zip = '56190' }) => {
    const [temp, setTemp] = useState(-0);
    const { REACT_APP_API_KEY, NODE_ENV } = process.env;
    const APIkey = REACT_APP_API_KEY;
    const devQuery = 'http://localhost:1234';
    const prodQuery = `https://api.openweathermap.org/data/2.5/weather?q=${city},ZIP=${zip},fr&units=metric&APPID=${APIkey}`;
    const query = NODE_ENV === 'production' ? prodQuery : devQuery;

    useEffect(
        () => {
            const runRequest = async () => {
                const res = await axios.get(query);
                let temp = res.data.main.temp;
                console.log(temp);
                temp = Math.round(temp);
                setTemp(temp);
            };
            runRequest();
        }, []);
    return (
        <div className="meteo_widget">
            <span className="meteo_location_container">
                <p className="meteo_city">{city}</p>
                <p className="meteo_zip">{zip}</p>
            </span>
            <p className="meteo_temperature">{temp}°C</p>
        </div>
    )
};

MeteoWidget.propTypes = {

};

export default MeteoWidget;
