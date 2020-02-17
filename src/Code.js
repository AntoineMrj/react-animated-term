import React from 'react'
import PropTypes from 'prop-types'
import Terminal from './Terminal'

const Code = ({ children, ...rest }) => {
    console.log(children)
  return (
      <div>
      TEST TEST TEST
          <Terminal {...rest} code>
            {children}
          </Terminal>
      </div>
  )
}

Code.propTypes = {
  children: PropTypes.string
}

export default Code
