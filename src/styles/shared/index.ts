import styled, { keyframes } from 'styled-components'

export interface BackgroundProps {
  backgroundImg: string
}

export const BackgroundImgContainer = styled.div<BackgroundProps>`
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`

interface AnimationProps {
  duration: number
  delay: number
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const FadeInContainer = styled.div<AnimationProps>`
  opacity: 0;
  animation: ${fadeIn} ${({ duration }) => duration}ms ${({ delay }) => delay}ms
    forwards;
`
