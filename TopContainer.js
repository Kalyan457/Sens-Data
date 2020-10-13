import React from 'react';
import classes from './TopContainer.css';
import tapImg from '../assets/images/tapImg.JPG';

const topContainer = (props) => (
    <div className={classes.container1}>
        <div className={classes.dropdown1}>
            <select>
                <option>Measurement</option>
                <option>Soil Temperature/Moisture</option>
                <option>Soil Electric Conductivity/Bulk Relative Permittivity</option>
                <option>Soil pH</option>
                <option>Combined Sensor Measurements</option>
                <option>Current Tank Level</option>
                <option>Ambient Temperature/Humidity</option>
            </select>
        </div>
        <div className={classes.dropdown2}>
            <select>
                    <option>Location</option>
                    <option>Bed 1</option>
                    <option>Bed 2</option>
                    <option>Bed 3</option>
                    <option>Bed 4</option>
                    <option>Bed 5</option>
            </select>
        </div>
        <div className={classes.imageOn}>
            <img src={tapImg} alt="Irrigation Image"/>
        </div>
    </div>
);

export default topContainer;