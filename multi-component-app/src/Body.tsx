import { react } from "@babel/types";
import React, { Component } from "react";

interface IStae{}
interface IProps{}

class Body extends Component<IProps,IStae>{
    constructor(props:IProps){
        super(props);

    };
    render(){
        return(
              <React.Fragment>      
            <h2>Shirts</h2>
            <h2>Pants</h2>
            <h2>T-Shirts</h2>
            <h2>Shirts</h2>
            <h2>Shirts</h2>
            </React.Fragment>
           
        )
    }
};

export default Body;