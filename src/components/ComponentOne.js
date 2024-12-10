import React from 'react'
import ComponentTwo from './ComponentTwo'

function componentOne({count}) {
  return (
    <div>
      This is Component One - {count}
      <ComponentTwo c={count}/>
    </div>
  )
}

export default componentOne