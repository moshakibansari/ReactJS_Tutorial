const {createStore} = require("redux");

const initialState = {
    bal:10000
};

const reducer = (state=initialState,action)=>{
        switch(action.type){
            case "DEPOSIT":
                return{
                    bal:state.bal+action.Payload
                }
                case "WITHDRAW":
                    return{
                        bal:state.bal-action.Payload
                    }
        }
}

const store = createStore(reducer);
 store.subscribe(()=>{
     console.log(store.getState());
 });


store.dispatch({type:"WITHDRAW",Payload:1000});
store.dispatch({type:"DEPOSIT",Payload:5000});
store.dispatch({type:"WITHDRAW",Payload:2000});
store.dispatch({type:"DEPOSIT",Payload:10000});