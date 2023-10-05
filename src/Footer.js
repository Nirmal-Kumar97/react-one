import React from 'react'

const Footer = ({length}) => {
    const year = new Date()
    return (
          <footer>
      <div>      
              Copyright &copy; {year.getFullYear()} , {length} List {length === 1 ? "Item": "Items"}
      </div>
          </footer>
  )
}

export default Footer