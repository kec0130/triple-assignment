import { useEffect, useState } from 'react'

const FRAME_RATE = 1000 / 60
const easeOutExpo = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x))

export default function useCountUp(to: number, from = 0, duration = 2000) {
  const [count, setCount] = useState(0)
  const totalFrames = Math.round(duration / FRAME_RATE)

  useEffect(() => {
    let currentFrame = from
    const counter = setInterval(() => {
      if (currentFrame === totalFrames) {
        clearInterval(counter)
      }
      const progress = easeOutExpo(currentFrame++ / totalFrames)
      setCount(Math.round(to * progress))
    }, FRAME_RATE)
  }, [from, to, totalFrames])

  return count
}
