import React from 'react';
import Grandchild from './Grandchild'


function Child(){

    return(
        <div>
          I am child.<br/>
          <Grandchild />
        </div>
    );
}

export default Child;