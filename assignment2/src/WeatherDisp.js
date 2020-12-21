import { AppBar, Toolbar, Card, Grid} from '@material-ui/core';
import React, { Component } from 'react'

export default class WeatherDisp extends Component {
    render() {
        let weather=this.props.data;
        return (
            <div> 
            <AppBar position="static" >
                <Toolbar >
                    <div  style={{textAlign:'center'}}><h1>Weather App</h1></div>
                </Toolbar>
            </AppBar>


                <Card style={{margin:'50px 250px',textAlign:'left', paddingLeft:'20px'}}>
                    <Grid container spacing={2}>
                        <Grid item sm='1' style={{margin:10}}>
                        </Grid>
                        <Grid item sm='5' style={{margin:10}}>
                            <div style={{fontSize:50,fontWeight:700}}>{weather.main.temp}ºC</div>
                            <div>{weather.weather[0].main}</div>
                        </Grid>
                        <Grid item sm='5' style={{margin:10}}>
                            <div style={{ color:'brown',fontSize:16}}>
                                {new Date().toDateString()}
                            </div>
                            <div style={{ fontSize:30, fontWeight:900}}>
                                {weather.name},{weather.sys.country}
                            </div>
                            <div>   
                                Feels Like: {weather.main.feels_like}ºC
                            </div>
                        </Grid>


                        <Grid item sm='1' style={{margin:10}}>
                        </Grid>
                        <Grid item xs='3' sm='5' style={{margin:10}}>
                            <div>Min. Temperature: {weather.main.temp_min}</div>
                            <div>Max. Temperature: {weather.main.temp_max}</div>
                        </Grid>
                       
                        <Grid item xs='3' sm='5' style={{margin:10}}>
                            <div>Humidity: {weather.main.humidity}</div>
                            <div>Pressure: {weather.main.pressure} Pascal</div>
                        </Grid>
                        
                        <Grid item sm='1' style={{margin:10}}>
                        </Grid>
                        <Grid item xs='3' sm='5' style={{margin:10}}>
                            <div>Sunrise: {new Date(weather.sys.sunrise).toLocaleTimeString()}</div>
                            <div>Sunset: {new Date(weather.sys.sunset).toLocaleTimeString()}</div>
                        </Grid>

                        <Grid item xs='3' sm='5' style={{margin:10}}>
                            <div>Wind Speed {weather.wind.speed}</div>
                            <div>Wind Direction: {weather.wind.deg}º</div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}
