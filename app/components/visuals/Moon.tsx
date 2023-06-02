'use client'
import styled from "styled-components";

export const Moon = styled.div<{ pettit?: boolean, exhibition?: boolean, yAxis?: string, xAxis?: string }>`
  position: absolute;
  width: ${props => props.pettit ? '296px' : '450px'};
  height: ${props => props.pettit ? '296px' : '450px'};
  top: ${props => props.yAxis};
  left: ${props => props.xAxis};
  mix-blend-mode: screen;
  border-radius: 100%;
  background: radial-gradient(134% 134% at 50% 50%, rgba(199, 199, 231, 0.85) 0%, #C7C7E7 54.17%);
`
