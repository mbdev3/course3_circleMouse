import React,{useState,useCallback} from 'react';
import ReactDOM from 'react-dom';

const width = window.innerWidth;
const height = window.innerHeight;
const circleX = width / 2
const circleY = height / 2
const circleRadius = 20
 
const initialPosition = {x:width /2,y:height/2}


const App = () => {
  const [position,setPosition] = useState(initialPosition)
  const handleMouseMove =useCallback(()=>{

    setPosition({x:event.clientX,y:event.clientY})
},[setPosition])
  return <svg width={width} height={height} onMouseMove={handleMouseMove}>
    
      <circle
        cx={position.x}
        cy={position.y}
        r={circleRadius}
        fill="yellow"
      />
      
    
  </svg>
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);