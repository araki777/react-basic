import React from 'react'

type Props = {
  name: string,
  count: number
}

const CountDisplay = ({name, count}: Props) => {
  console.log(`display ${name}`)
  return (
    <div>
      {count}
    </div>
  )
}

export default React.memo(CountDisplay)
