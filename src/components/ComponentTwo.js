import React, { useContext } from 'react'
import ComponentThree from './ComponentThree'
import { UserContext, ChannelContext } from '../App'

function ComponentTwo({c}) {
  // the value come from Using Context API.
  const userContaxtValue = useContext(UserContext);
  const channelContextValue = useContext(ChannelContext);

  return (
    <div>
      This is Component Two - {c}
      <ComponentThree />
      <div>
        <br />
        <i>
          Mr. {userContaxtValue} {channelContextValue} is the owner of this website  
        </i>
      </div>
    </div>
    
  )
}

export default ComponentTwo