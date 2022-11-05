import React from 'react'

const Footer = ({length}) => {

    const today = new Date();
  return (
    <footer>
      <p>
      {length} List {length === 1 ? "item" : "items" }
      </p>

      <p  style={{fontSize:'10px',textAlign:'center'}}>
      Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer