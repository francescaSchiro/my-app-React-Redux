import styled from 'styled-components';

const CenterCounterWrapper = styled.div`
   
    display: flex;
    flex-direction:column;
    align-content:center;
    justify-content:center;
    text-align: center;
    width: 100%;
    background-color: blueviolet;
    height: 100vh;

    ::before {
        content: "I'm a Counter";
        height: 3em;
        
        /* background-color: blue; */
        color: white;
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 0.2em;
        

    }
   
`

export default CenterCounterWrapper;
