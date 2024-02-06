import React, {location} from 'react'

function Practice(props) {
  return (
    <div>
      Practice
        {console.log("Practice", location)};
        {/* {console.log("Practice", props)}; */}
    </div>
  )
}

export default Practice
