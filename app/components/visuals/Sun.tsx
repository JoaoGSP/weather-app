'use client'
import styled, { css } from "styled-components"

export const Sun = styled.div<{ cloudy?: boolean, reverse?: boolean, yAxis?: string, xAxis?: string }>`
  position: absolute;
  ${(props) => props.reverse ? css`right: ${props.xAxis};` : css`left: ${props.xAxis};`}
  top: ${props => props.yAxis};
  width: 450px;
  height: 450px;
  border-radius: 100%;
  ${(props) => {
    if (props.cloudy) {
      return css`background: linear-gradient(135deg, rgba(255, 153, 0, 1) 18.23%, rgba(250, 255, 0, 1) 72.92%);`
    }
    return css`background: linear-gradient(180deg, rgba(255, 107, 0, 1) -3.99%, rgba(255, 153, 0, 1) 28.19%, rgba(250, 255, 0, 1) 85.96%);`
  }}
`