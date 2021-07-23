import React, { Component } from "react";
import Second from "./Second";

interface IState{
    key1:string;
    key2:number;
    key3:any[];
}
interface IProps{}

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
            this.state ={
                "key1":"ReactJS",
                "key2":100,
                "key3":[{"name":"Shirt",Price:100,Rating:4.0,image:"https://cdn.shopclues.com/images1/thumbnails/97700/320/320/144280655-97700063-1552379299.jpg"},
                        { name:"T-Shirt",Price:200,Rating:4.0,image:"https://rukminim1.flixcart.com/image/714/857/kfoapow0-0/t-shirt/w/l/7/s-daredevil-party-wear-wrath-original-imafw2kc8ducmcbp.jpeg?q=50"},
                        {name:"Jeans",Price:300,Rating:4.0,image:"https://5.imimg.com/data5/YB/XR/MY-23322128/men-s-jeans-500x500.jpg"},
                        {name:"Pants",Price:250,Rating:4.0,image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2075907/2020/12/15/63c3cff1-f55e-4089-944b-4ae2892b47f61608031396035-Roadster-Men-Grey-Regular-Fit-Solid-Cargos-611608031394246-1.jpg"} ]
            };
    };


    render(){
        return(
            <React.Fragment>
                
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}>ReactJS with typescript</Second>
            </React.Fragment>
        )
    }
}
export default First;