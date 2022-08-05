import React, { MouseEventHandler } from 'react'

type Props = {
  handleClick: MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}

const CountClick = ({handleClick, children}: Props) => {
  console.log('clicked', children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(CountClick)
