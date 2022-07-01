import styled from 'styled-components'

import colors from '../styles/constants/colors'
import { BackgroundImgContainer, BackgroundProps } from '../styles/shared'

interface AwardProps extends BackgroundProps {
  year: number
  platform: string
  award: string
}

const Award = styled(BackgroundImgContainer)`
  display: flex;
  align-items: center;
  height: 54px;
  padding-left: 64px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: ${colors.gray800};
  background-position: left center;

  & + & {
    margin-left: 38px;
  }
`

export default function AwardItem({
  year,
  platform,
  award,
  backgroundImg,
}: AwardProps) {
  return (
    <Award backgroundImg={backgroundImg}>
      {year} {platform}
      <br />
      {award}
    </Award>
  )
}
