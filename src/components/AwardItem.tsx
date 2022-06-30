import styled from 'styled-components'

import colors from '../styles/constants/colors'

interface AwardProps {
  year: number
  platform: string
  award: string
  backgroundImage: string
}

const Award = styled.div<Pick<AwardProps, 'backgroundImage'>>`
  display: flex;
  align-items: center;
  height: 54px;
  padding-left: 64px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: ${colors.gray800};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;

  & + & {
    margin-left: 38px;
  }
`

export default function AwardItem({
  year,
  platform,
  award,
  backgroundImage,
}: AwardProps) {
  return (
    <Award backgroundImage={backgroundImage}>
      {year} {platform}
      <br />
      {award}
    </Award>
  )
}
