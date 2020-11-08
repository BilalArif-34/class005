import React,{useContext} from 'react';
import counterContext from './CounterContext';


function Grandchild(){


  let counterValue=useContext(counterContext)
  console.log(counterValue);



    return(
        <div>
          I am Grand child. counter value :{counterValue[0]}
          <br/>
          <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment
            </button>
        </div>
    );
}

export default Grandchild;

