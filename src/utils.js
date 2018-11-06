/**
 * GUID jacvascript: generatore id univoci
 */

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}

/**
 * animation TRANSITION used for the Hamburger Menu
 */

export const transition = (ms, x, y, z, t) => `
  -webkit-transition: all ${ms}ms cubic-bezier(${x}, ${y}, ${z}, ${t});
  -moz-transition: all ${ms}ms cubic-bezier(${x}, ${y}, ${z}, ${t});
  -o-transition: all ${ms}ms cubic-bezier(${x}, ${y}, ${z}, ${t});
  transition: all ${ms}ms cubic-bezier(${x}, ${y}, ${z}, ${t});
  -webkit-transition-timing-function: cubic-bezier(${x}, ${y}, ${z}, ${t});
  -moz-transition-timing-function: cubic-bezier(${x}, ${y}, ${z}, ${t});
  -o-transition-timing-function: cubic-bezier(${x}, ${y}, ${z}, ${t});
  transition-timing-function: cubic-bezier(${x}, ${y}, ${z}, ${t});
`;

/**
 * function that gets common Layer Style for Parallax Wrapper components with different color bg
 */

export const commonLayerStyle = (r, g, b, a) => `
  box-sizing:border-box;

  position: absolute;
  
  right: 0;
  bottom: 0;
  left: 0;

  display:flex;
  justify-content: center;
  align-items:center;
  

 
  background-color: rgba(${r}, ${g}, ${b}, ${a});
  font-size:3em;
  -ms-transform-origin-x: 100%;
  transform-origin: 100%;

`;

/**
 * @mediaquery responsive breakpoint for hamburger view
 */

export const breakPoint = () => 650;

// top: 0;