import Home from './pages/Home/Home';
import './App.css';
import { useState, useRef } from 'react';
import image from '../src/assets/anushka-portfolio.png'



function App() {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { clientY, currentTarget } = e;
    const { top, height } = currentTarget.getBoundingClientRect();
    
    // Normalized value: -1 at the very top, 1 at the very bottom
    const relativeY = ((clientY - top) / height - 0.5) * 2;

    // Max travel distance to stay inside parent:
    // (Parent Height 680px - Box Height 400px) / 2 = 140px
    const maxMove = 140; 
    const moveAmount = relativeY * maxMove;

    // Apply the movement directly to the children
    const boxes = containerRef.current.querySelectorAll('.box');
    boxes.forEach((box) => {
      if (box.classList.contains('box-up')) {
        box.style.transform = `translateY(${moveAmount}px)`;
      } else {
        box.style.transform = `translateY(${-moveAmount}px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    const boxes = containerRef.current.querySelectorAll('.box');
    boxes.forEach((box) => {
      // Return to center with the slow transition
      box.style.transform = `translateY(0px)`;
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <div>
          Anushka's Portfolio
        </div>

      </header>

      <div className='portfolio-main-body'>
        <div className='portfolio-main-body-left'>
          <img src={image} ></img>
        </div>
        <div className='portfolio-main-body-right' 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={handleMouseLeave}
          >
          <div className={`box box-up portfolio-skills ${isActive ? 'active' : ''}`}>Skills</div>
          <div className={`box box-down portfolio-experience ${isActive ? 'active' : ''}`} >Experience</div>
          <div className={`box box-up portfolio-projects ${isActive ? 'active' : ''}`} >Projects</div>
          <div className={`box box-down portfolio-education ${isActive ? 'active' : ''}`}>Education</div>
        </div>
      </div>
    </div>
  );
}

export default App;
