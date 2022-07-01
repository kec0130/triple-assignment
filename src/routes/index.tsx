import styled from 'styled-components'

import MetricItem from '../components/MetricItem'
import AwardItem from '../components/AwardItem'
import tripleLogo from '../assets/images/triple2x.png'
import appleLogo from '../assets/images/badge-apple4x.png'
import playStoreLogo from '../assets/images/play-store2x.png'
import colors from '../styles/constants/colors'
import { BackgroundImgContainer, FadeInContainer } from '../styles/shared'

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  min-width: 1200px;
  padding: 140px 80px;
  margin: 0 auto;
`

const ContentLogo = styled(BackgroundImgContainer)`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-size: 15px;
  color: ${colors.gray700};
  text-align: center;
`

const AwardsContainer = styled(FadeInContainer)`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

export default function App() {
  return (
    <section>
      <SectionContent>
        <FadeInContainer duration={700} delay={0}>
          <ContentLogo backgroundImg={tripleLogo}>2021년 12월 기준</ContentLogo>
        </FadeInContainer>
        <div>
          <FadeInContainer duration={700} delay={100}>
            <MetricItem number={700} unit="만 명" text="의 여행자" />
            <MetricItem number={100} unit="만 개" text="의 여행 리뷰" />
            <MetricItem number={470} unit="만 개" text="의 여행 일정" />
          </FadeInContainer>
          <AwardsContainer duration={700} delay={200}>
            <AwardItem
              year={2018}
              platform="구글 플레이스토어"
              award="올해의 앱 최우수상 수상"
              backgroundImg={playStoreLogo}
            />
            <AwardItem
              year={2018}
              platform="애플 앱스토어"
              award="오늘의 여행앱 선정"
              backgroundImg={appleLogo}
            />
          </AwardsContainer>
        </div>
      </SectionContent>
    </section>
  )
}
