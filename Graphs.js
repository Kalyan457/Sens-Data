import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Graphs extends Component {

    state={
        sensor1Data:[],
        sensor2Data:[],
        sensor3Data:[],
        sensor4Data:[],
        sensor5Data:[]
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.sensor1Data!==nextState.sensor1Data || 
               this.state.sensor2Data!==nextState.sensor2Data ||
               this.state.sensor3Data!==nextState.sensor3Data ||
               this.state.sensor4Data!==nextState.sensor4Data ||
               this.state.sensor5Data!==nextState.sensor5Data;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component did update!')
     }

    // componentDidMount(){
    //     this.setState({
    //         sensor1Data: this.props.Sensor1,
    //         sensor2Data: this.state.sensor2Data.concat(this.props.Sensor2),
    //         sensor3Data: this.state.sensor3Data.concat(this.props.Sensor3),
    //         sensor4Data: this.state.sensor4Data.concat(this.props.Sensor4),
    //         sensor5Data: this.state.sensor5Data.concat(this.props.Sensor5),
    //     });
    //     console.log(this.props.Sensor1);

    //     console.log(this.state.sensor1Data);
    // }
    
    render(){
        // var sensor1Data = [];
        // sensor1Data.push(this.props.Sensor1);
        
        // var sensor2Data = [];
        // sensor2Data.push(this.props.Sensor2);
        
        // var sensor3Data = [];
        // sensor3Data.push(this.props.Sensor3);
        
        // var sensor4Data = [];
        // sensor4Data.push(this.props.Sensor4);
        
        // var sensor5Data = [];
        // sensor5Data.push(this.props.Sensor5);
        //var sensData = this.getSensorData();
        //console.log(sensData);
        console.log("dsds");
        return(
            <ReactEcharts
                option = { {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['Sensor 1', 'Sensor 2','Sensor 3', 'Sensor 4','Sensor 5']
                    },
                    xAxis: {
                        type: 'category',
                        data: ['9.00 AM', '11.00 AM', '02.00 PM', '04.00 PM', '06.00PM']
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
        );
    }
}

export default Graphs;