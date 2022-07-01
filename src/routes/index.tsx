import styled, { keyframes } from 'styled-components'

import MetricItem from '../components/MetricItem'
import AwardItem from '../components/AwardItem'
import tripleLogo from '../assets/images/triple2x.png'
import appleLogo from '../assets/images/badge-apple4x.png'
import playStoreLogo from '../assets/images/play-store2x.png'
import colors from '../styles/constants/colors'

interface BackgroundProps {
  backgroundImage: string
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
  }
`

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  min-width: 1200px;
  padding: 140px 80px;
  margin: 0 auto;
`

const ContentLogo = styled.div<BackgroundProps>`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-family: sans-serif;
  font-size: 15px;
  color: ${colors.gray700};
  text-align: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  animation: ${fadeIn} 700ms;
`

const MetricsContainer = styled.div`
  animation: ${fadeIn} 700ms 100ms;
`

const AwardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  animation: ${fadeIn} 700ms 200ms;
`

export default function App() {
  return (
    <section>
      <SectionContent>
        <ContentLogo backgroundImage={tripleLogo}>2021년 12월 기준</ContentLogo>
        <div>
          <MetricsContainer>
            <MetricItem number={700} unit="만 명" text="의 여행자" />
            <MetricItem number={100} unit="만 개" text="의 여행 리뷰" />
            <MetricItem number={470} unit="만 개" text="의 여행 일정" />
          </MetricsContainer>
          <AwardsContainer>
            <AwardItem
              year={2018}
              platform="구글 플레이스토어"
              award="올해의 앱 최우수상 수상"
              backgroundImage={playStoreLogo}
            />
            <AwardItem
              year={2018}
              platform="애플 앱스토어"
              award="오늘의 여행앱 선정"
              backgroundImage={appleLogo}
            />
          </AwardsContainer>
        </div>
      </SectionContent>
    </section>
  )
}
