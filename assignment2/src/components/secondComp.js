import React, { Component } from 'react'
//import ThirdComp from './thirdComponent.js'

class SecondComp extends Component{
    render(){
        return(
            <div style={{backgroundColor:'blue',color:'black'}}>
                values from component 1:<br/>
                {this.props.username}<br/>
                {this.props.address}<br/>
                {this.props.number}<br/>
                {this.props.test}<br/>
                <button onClick={()=>this.props.callFromSecondComponent(this.props.username)}>Call Function</button><br/>
            </div>
        );
    }
}

export default SecondComp;