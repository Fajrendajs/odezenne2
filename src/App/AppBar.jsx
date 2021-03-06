import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
      color: palegreen;
    `}

  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
`;

function ControlButton({ name, active }) {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  );
}

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

export default function() {
  return (
    <Bar>
      <Logo>AppBar</Logo>
      <div />
      <ControlButton name="nba" active />
      <ControlButton name="nfl" />
    </Bar>
  );
}
