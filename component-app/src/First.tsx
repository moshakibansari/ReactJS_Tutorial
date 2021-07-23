import {Component} from "react";

interface IState{}
interface IProps{}

class First extends Component<IState,IProps>{
    constructor(Props:IProps){
        super(Props);
    };
    render(){
        return (
            <h1>Welcom to ReactJS..!!!</h1>
        )
    }
};

export default First;