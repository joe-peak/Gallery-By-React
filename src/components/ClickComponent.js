require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

class ClickComponent extends React.Component{
  constructor()
  {
    super();
    this.state={textContent:'Hello React......'};
  }
/*
  getInitialState只能在React.CreateClass()中可以用
  getInitialState()
  {
    return {textContent:'Hello React......'};
  }*/
  componentWillMount()
  {
    alert('will');
  }

  componentDidMount()
  {
     alert('did');
  }

 componentWillUpdate()
 {
   alert('will update');
 }

 componentDidUpdate()
 {
   alert('Did update');
 }
  

  clickHandler()
  {
    let nodeEl=this.refs.textBlock;
    if(nodeEl.style.color!=='rgb(255, 255, 255)')
    {
      nodeEl.style.color='rgb(255, 255, 255)';
    }
    else
    {
      nodeEl.style.color='rgb(1, 2, 255)';
    }

    this.setState({xxx:'I am updated.....'});
  }
  render()
  {
    let style={fontSize:'20px',fontWeight:'bold'};
    return(
       <div>
        <p style={{color:'green'}} onClick={(e)=>this.clickHandler(e)}><button className='btn'>TestClick</button><span  style={style} ref='textBlock'> &nbsp;  &nbsp;  &nbsp; {this.props.xxx} </span></p>
       </div>
    );
  }
}

ClickComponent.defaultProps = {};
export default ClickComponent;