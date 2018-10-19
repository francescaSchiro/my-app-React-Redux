import React from 'react';
import styled from "styled-components";


const Hamburger = styled.div``;

export default function Hamburger({ onClick }) {
  return (
    <div key="container">
      <input type="checkbox" id="btnControl" />
      <label class="btn" for="btnControl"> 
      <div class="hamburger hamburger-container">
        <span />
        <span />
        <span />
        <span />
      </div>
      </label>
    </div>
  );
}
