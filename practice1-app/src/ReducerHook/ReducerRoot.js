import { type } from '@testing-library/user-event/dist/type';
import React,{useReducer} from 'react'


function ReducerRoot() {
    const reducer=(currentState,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return {count:currentState.count+action.payload}
                break;
                case 'DECREMENT':
                    return {count:currentState.count-action.payload} 
                    break;
                    default:
                        return state
        }
    }
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
        <p>count:{state.count}</p>
        <button onClick={()=>{dispatch({
            type:'INCREMENT',
            payload:3
        })}}>INCREMENT</button>
        <button onClick={()=>{dispatch({
            type:'DECREMENT',
            payload:4
        })}}>DECREMENT</button>
    </div>
  )
}

export default ReducerRoot