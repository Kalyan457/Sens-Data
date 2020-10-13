import React, { Component } from 'react';
import classes from './TempSensors.css';

class TempSensors extends Component {
    render(){
        return(
                <div className={classes.temperatureSensorDiv}>
                        <div className={classes.sensorsNames}>
                            <div className={classes.sensorTitles}>Sensor 1</div>
                            <div className={classes.sensorTitles}>Sensor 2</div>
                            <div className={classes.sensorTitles}>Sensor 3</div>
                            <div className={classes.sensorTitles}>Sensor 4</div>
                            <div className={classes.sensorTitles}>Sensor 5</div>
                        </div>
                        <div className={classes.sensorTemps}>
                            <div className={classes.sensors}>
                                <h2>{this.props.dataToPopulate.Sensor1}<span>&#176;</span> F </h2>
                            </div>
                            <div className={classes.sensors}>
                                <h2>{this.props.dataToPopulate.Sensor2}<span>&#176;</span> F</h2>
                            </div>
                            <div className={classes.sensors}>
                                <h2>{this.props.dataToPopulate.Sensor3}<span>&#176;</span> F</h2>
                            </div>
                            <div className={classes.sensors}>
                                <h2>{this.props.dataToPopulate.Sensor4}<span>&#176;</span> F</h2>
                            </div>
                            <div className={classes.sensors}>
                                <h2>{this.props.dataToPopulate.Sensor5}<span>&#176;</span> F</h2>
                            </div>
                        </div> 
                </div>
        );
    }
}

export default TempSensors;