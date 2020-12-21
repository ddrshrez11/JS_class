import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import {CONFIG} from './config.js'
import {  CircularProgress,Button } from '@material-ui/core';
import WeatherDisp from './WeatherDisp.js'

class ApiCall extends Component {
    constructor(props){
        super(props)
        
        this.state={
            cityName:this.props.location.state.cityName,
            weather:{},
            loading:true,
            error:false,
        }
    }

    componentDidMount(){
        this.getRemoteData()
        console.log(this.props);
        //console.log(this.props)
    }

    getRemoteData= ()=>{
        let self=this
        let url=CONFIG.WEATHER_API.replace('~',self.state.cityName)
        axios.get(url+CONFIG.WEATHER_API_KEY)
        .then(function(response) {
            console.log(response.data)
            self.setState({
                weather:response.data,
                loading:false
            })
        }) .catch(function(error){
                self.setState ({
                    loading:false,
                    error: true
                })
            })
    }
    handleClick=(event)=>{
        this.props.history.push('/')
    }
    
    
    render() {
        return (
            <div>
                {
                    this.state.error?
                    <div>
                        <h1>There was an Error.</h1><br/>
                        <Button variant="contained" color="primary" type="submit" size="large" style={{ margin:"8px 0px 0px 15px" }}
                        onClick={this.handleClick}>Try Again</Button>
                    </div>:
                        this.state.loading?<div> <CircularProgress/> </div>:
                            <WeatherDisp data={this.state.weather}/>
                }
            </div>
        )
    }
}
export default withRouter(ApiCall);