import { connect } from 'react-redux'
import ButtonBar from './ButtonBar'

import { add, remove, open, close } from '../actions'

function mapStateToProps() {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addClickhandler: () => dispatch(add()),
    removeClickhandler: () => dispatch(remove()),
    openClickhandler: () => dispatch(open()),
    closeClickhandler: () => dispatch(close()),
  }
}

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons)

export default ButtonContainer