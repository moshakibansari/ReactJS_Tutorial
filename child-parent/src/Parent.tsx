import React, {Component} from "react";
import Child from "./Child";
interface IState{
    arg1:any;
    arg2:any;
    arg3:any;
}

interface IProps{}

class Parent extends Component<IProps,IState>{
        constructor(props:IProps){
            super(props);
            this.state = {
                arg1:"",
                arg2:"",
                arg3:""
                
            };

        };
       fun_one = (arg1:any):void=>{
           this.setState({
               arg1:arg1
           })

       };
       fun_two = (arg1:any):void=>{
        this.setState({
            arg2:arg1
        })
    };
    fun_three = (arg1:any):void=>{
        this.setState({
            arg3:arg1
        })
    };

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.arg1}{this.state.arg2}{this.state.arg3}</h1>
                <Child fun_one={this.fun_one}
                       fun_two={this.fun_two}
                       fun_three={this.fun_three}></Child>
            </React.Fragment>
        )

    }

};

export default Parent;