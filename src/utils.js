/**
 * GUID jacvascript: generatore id univoci
 */

export function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };



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