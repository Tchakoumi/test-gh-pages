import React from 'react';

function Header({myStyle,children}){

      return <h1 style={{color: myStyle}}>{children}</h1>;
}
{/* <h1 style={{color: this.props.color}}>{this.props.title}</h1>   */}

export default Header;