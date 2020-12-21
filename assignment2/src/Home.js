import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, TextField } from '@material-ui/core';

class Home extends Component {
    
    constructor(props){
        super(props)
        this.state={
            city:''
        }
        console.log(this.props)
    }

    handleChange=(event)=>{
        this.setState({
            city:event.target.value
        })
        console.log(this.state.city)
    }
    
    render() {
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar >
                        <div  style={{textAlign:'center'}}><h1>Weather App</h1></div>
                    </Toolbar>
                </AppBar>

                <div style={{ marginTop:100 }}>
                    {/* <Paper elevation={10} variant='outlined' square style={{padding:50,margin:'auto 250px'}}> */}
                    <form>
                        <TextField id="filled-basic" label="City" variant="filled" name='city' placeholder='Enter City'
                         onChange={this.handleChange}
                        />

                        <Button variant="contained" color="primary" type="submit" size="large" style={{ margin:"8px 0px 0px 15px" }}
                        onClick={()=>
                            this.props.history.push('/apicall',{cityName:this.state.city})
                        }
                        >Find</Button>
                    </form>
                    {/* </Paper> */}
                </div>
            </div>
        )
    }
}
export default withRouter(Home);