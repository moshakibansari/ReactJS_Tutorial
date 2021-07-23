import React, { Component } from "react";
 import axios from "axios";
import { TableContainer,Paper, Table, TableHead, TableBody, TableRow,TableCell, Avatar } from "@material-ui/core";
 interface IState{
   res:any;
 }  
 interface IProps{}

 class App extends Component<IProps,IState>{
   constructor(props:IProps){
     super(props);
     this.state ={
       res : []
     };
   };
   componentDidMount(){
     axios.get("https://restcountries.eu/rest/v2/all").then((PosRes)=>{
       this.setState({
         res:PosRes.data
       })
     },(errRes)=>{})
   };
   render(){
     return(
       <React.Fragment>
                    <TableContainer component={Paper} >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>SNO</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>CAPITAL</TableCell>
                            <TableCell>LANGUAGE</TableCell>
                            <TableCell>FLAG</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.res.map((element:any,index:any)=>(
                            <TableRow key={index}>
                              <TableCell>{index+1}</TableCell>
                              <TableCell>{element.name}</TableCell>
                               <TableCell>{element.capital}</TableCell>
                               <TableCell>{element.languages}</TableCell>
                               <TableCell><Avatar src={element.flag}></Avatar></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                     

                    </TableContainer>
                    
       </React.Fragment>     )
   }
 }

export default App;
