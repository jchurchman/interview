import React from 'react'

const Button = ({ name, onClick, disabled, className, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={className}
    type="button"
    name={name}
  >
    {children}
  </button>
)

export default Button