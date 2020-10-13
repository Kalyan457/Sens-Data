import React from 'react';
import classes from './MoistureSensors.css';

const moistureSensors = (props) => (
    <div className={classes.moistureSensorDiv}>
        <div className={classes.sensorsNames}>
            <div className={classes.sensorTitles}>Sensor 1</div>
            <div className={classes.sensorTitles}>Sensor 2</div>
            <div className={classes.sensorTitles}>Sensor 3</div>
            <div className={classes.sensorTitles}>Sensor 4</div>
            <div className={classes.sensorTitles}>Sensor 5</div>
        </div>
        <div className={classes.sensorTemps}>
            <div className={classes.sensors}>
                <h2>{props.dataToPopulate.Sensor6} %</h2>
            </div>
            <div className={classes.sensors}>
                <h2>{props.dataToPopulate.Sensor7} %</h2>
            </div>
            <div className={classes.sensors}>
                <h2>{props.dataToPopulate.Sensor8} %</h2>
            </div>
            <div className={classes.sensors}>
                <h2>{props.dataToPopulate.Sensor9} %</h2>
            </div>
            <div className={classes.sensors}>
                <h2>{props.dataToPopulate.Sensor10} %</h2>
            </div>
        </div> 
    </div>
);

export default moistureSensors;