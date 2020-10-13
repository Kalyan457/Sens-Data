import React, { Component } from 'react';
import classes from './MainPage.css';
import Auxillary from '../hoc/Auxillary';
import tapImg from '../../src/assets/images/tapImg.JPG';
import Graphs from '../components/Graphs';
import ReactEcharts from 'echarts-for-react';
import TopContainer from './TopContainer';
import TempSensors from './TempSensors';
import MoistureSensors from './MoistureSensors';

class MainPage extends Component {
    state={
        sensorsData:[],
        sensor1Data:[],
        sensor2Data:[],
        sensor3Data:[],
        sensor4Data:[],
        sensor5Data:[],
        sensor6Data:[],
        sensor7Data:[],
        sensor8Data:[],
        sensor9Data:[],
        sensor10Data:[]
    }

    async componentDidMount(){
        this.refreshData();
        this.interval = setInterval(() => {
            this.refreshData();
            this.getGraphdata();
          }, 10000);
        
    }

    refreshData() {
        fetch('https://localhost:44308/api/values')
            .then(response => response.json())
            .then(data => {
                this.setState({sensorsData:data});
            });
    }

    getGraphdata() {
        this.setState({sensor1Data: this.state.sensor1Data.concat(this.state.sensorsData.Sensor1)});
        this.setState({sensor2Data: this.state.sensor2Data.concat(this.state.sensorsData.Sensor2)});
        this.setState({sensor3Data: this.state.sensor3Data.concat(this.state.sensorsData.Sensor3)});
        this.setState({sensor4Data: this.state.sensor4Data.concat(this.state.sensorsData.Sensor4)});
        this.setState({sensor5Data: this.state.sensor5Data.concat(this.state.sensorsData.Sensor5)});
        this.setState({sensor6Data: this.state.sensor6Data.concat(this.state.sensorsData.Sensor6)});
        this.setState({sensor7Data: this.state.sensor7Data.concat(this.state.sensorsData.Sensor7)});
        this.setState({sensor8Data: this.state.sensor8Data.concat(this.state.sensorsData.Sensor8)});
        this.setState({sensor9Data: this.state.sensor9Data.concat(this.state.sensorsData.Sensor9)});
        this.setState({sensor10Data: this.state.sensor10Data.concat(this.state.sensorsData.Sensor10)});
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    

    render(){
        const dataToPopulate = this.state.sensorsData;
        return(
            
            <Auxillary>
                <TopContainer />
                <div className={classes.enclosingContainer}>
                    <div className={classes.container2}>
                        <h1>Bed 1 Soil Temperature</h1>
                        <TempSensors dataToPopulate={dataToPopulate}/>
                        <h1>Bed 1 Soil Moisture</h1>
                        <MoistureSensors dataToPopulate={dataToPopulate} />
                    </div>
                    <div className={classes.container3}>
                        <div className={classes.temperatureGraphDiv}>
                            <ReactEcharts style={{height:'260px',marginTop:'20px'}}
                                option = { {
                                    tooltip: {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                        data: ['Sensor 1', 'Sensor 2','Sensor 3', 'Sensor 4','Sensor 5']
                                    },
                                    xAxis: {
                                        type: 'category',
                                        data: ['9.00 AM', '9.30 AM', '10.00 AM', '10.30 AM', '11.00AM']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [
                                        {
                                            name: 'Sensor 1',
                                            data: this.state.sensor1Data,
                                            type: 'line'
                                        },
                                        {
                                            name:'Sensor 2',
                                            data: this.state.sensor2Data,
                                            type: 'line'
                                        },
                                        {
                                            name: 'Sensor 3',
                                            data: this.state.sensor3Data,
                                            type: 'line'
                                        },
                                        {
                                            name:'Sensor 4',
                                            data: this.state.sensor4Data,
                                            type: 'line'
                                        },
                                        {
                                            name: 'Sensor 5',
                                            data: this.state.sensor5Data,
                                            type: 'line'
                                        }
                                    ]
                                }}
                            />
                        </div>
                        <div className={classes.moistureGraphDiv}>
                        <ReactEcharts style={{height:'260px'}}
                                option = { {
                                    tooltip: {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                        data: ['Sensor 1', 'Sensor 2','Sensor 3', 'Sensor 4','Sensor 5']
                                    },
                                    xAxis: {
                                        type: 'category',
                                        data: ['9.00 AM', '9.30 AM', '10.00 AM', '10.30 AM', '11.00AM']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [
                                        {
                                            name: 'Sensor 1',
                                            data: this.state.sensor6Data,
                                            type: 'line'
                                        },
                                        {
                                            name:'Sensor 2',
                                            data: this.state.sensor7Data,
                                            type: 'line'
                                        },
                                        {
                                            name: 'Sensor 3',
                                            data: this.state.sensor8Data,
                                            type: 'line'
                                        },
                                        {
                                            name:'Sensor 4',
                                            data: this.state.sensor9Data,
                                            type: 'line'
                                        },
                                        {
                                            name: 'Sensor 5',
                                            data: this.state.sensor10Data,
                                            type: 'line'
                                        }
                                    ]
                                }}
                            />
                        </div>
                    </div> 
                    <div className={classes.clear}></div>
                </div>
                
            </Auxillary>
        );
    }
}

export default MainPage;