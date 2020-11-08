import React from 'react';
import Child from './Child';
import counterContext from './CounterContext';
import {useState} from 'react';
import Child2 from './Child2';

function Parent(){
    let countState = useState(1)
    return(
        <counterContext.Provider value={countState}>
            <div>
                <Child />
                <Child2 />
            </div>
        </counterContext.Provider>
    );
}

export default Parent;  