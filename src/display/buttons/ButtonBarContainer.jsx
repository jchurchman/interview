import React from 'react'
import ButtonBar from './ButtonBar'

import { add, remove, open, close } from '../../actions'

const ButtonContainer = ((Component) => (
  <Component
    addButtonClick={add}
    removeButtonClick={remove}
    openButtonClick={open}
    closeButtonClick={close}
  />
))

export default ButtonContainer(ButtonBar)