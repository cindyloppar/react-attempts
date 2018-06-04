import {createStore} from 'redux'

const reducer = function(state,action){
    if(action.type ==="INC"){
        return state + action.value;
    }

}

const store = createStore(reducer, 0);

store.subscribe(()=>
console.log("store changed", store.getState())
)

store.dispatch({type:"INC", value:1});
store.dispatch({type:"INC", value:1});
store.dispatch({type:"INC", value:1});
store.dispatch({type:"INC", value:1});
