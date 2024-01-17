// import React, { Children, Component } from 'react';
// import Mycars from './Mycars';

function Wrapper({children}) {
            // console.log(children)
            return (
                  <div style={ {backgroundColor:'pink',width:'400px', margin:'5px auto', padding:'10px'}}>
                        {children}
                  </div>
            );

}

export default Wrapper;