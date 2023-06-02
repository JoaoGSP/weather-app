'use client'
import styled from "styled-components";

const Moon = styled.div<{ pettit?: boolean, exhibition?: boolean }>`
  position: ${props => props.exhibition ? 'absolute' : 'relative'};
  width: ${props => props.pettit ? '296px' : '450px'};
  height: ${props => props.pettit ? '296px' : '450px'};
  top: -20%;
  left: -10%;
  mix-blend-mode: screen;
  border-radius: 100%;
  background: radial-gradient(134% 134% at 50% 50%, rgba(199, 199, 231, 0.85) 0%, #C7C7E7 54.17%);
`
const PettitMoon = styled(Moon)`
  width: 296px;
  height: 296px;
`

export { Moon, PettitMoon }