import styled from 'styled-components'

import colors from '../styles/constants/colors'

interface MetricProps {
  number: number
  unit: string
  text: string
}

const Metric = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: ${colors.gray};
  letter-spacing: -1px;

  strong {
    font-weight: 700;
  }
`

export default function MetricItem({ number, unit, text }: MetricProps) {
  return (
    <Metric>
      <strong>
        <span>{number}</span>
        {unit}
      </strong>
      {text}
    </Metric>
  )
}
