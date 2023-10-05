import React from 'react'

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  )
}

Header.defaultProps= {
  title: "To do list"
}
export default Header