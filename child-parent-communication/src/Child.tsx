import React, { Component } from "react";

interface IState{}

interface Iprops{
    key1 : (arg1:any)=>void;
};

class Child extends Component<Iprops,IState>{
    constructor(props:Iprops){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <button onClick={()=>{this.props.key1({"key1":"ReactJS with typescript",key2:"GO",key3:"MongoDB"})}}>Change</button>
            </React.Fragment>
        ) 
    };
}
export default Child;