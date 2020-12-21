import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SecondComp from './secondComp'

class FirstComp extends Component{
    
    constructor(props){
        super(props);
        this.state={
            username:'',
            address:'',
            number:''
        };
        //this.handleChange()=this.handleChange.bind()
    }

    //handleChange(event){
    handleChange=(event)=>{
        //console.log(event.target.name+" : "+event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
 
    callFromSecondComponent=(name)=>{
        alert('Hello!!!'+name);
    }

    render(){
        return( 
            <div>
                <input  
                    type='text' name ='username'
                    onChange={this.handleChange} />

                <input type="text" name="address"
                    onChange={this.handleChange} />

                <input type="text" name="number"
                    onChange={this.handleChange} />

                <SecondComp 
                    username={this.state.username}
                    address={this.state.address}
                    number={this.state.number}
                    test='This is test'
                    callFromSecondComponent={this.callFromSecondComponent}
                    
                />
                
                <Link to='/apiCall'><button>Go To ApiCall</button></Link>
            </div>
        );
    }
}

export  { FirstComp };