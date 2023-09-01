import { memo } from 'react'

import useArrow from './hooks/useArrow'

const Arrow = ({
  className, head, from, to, onChange, root = document.body
}) => {
  useArrow({ className, head, from, to, onChange, root })
  return null
}

export default memo(Arrow)
export { DIRECTION, HEAD } from 'arrows-svg'
