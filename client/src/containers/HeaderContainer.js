import HeaderComponent  from '../components/HeaderComponent';
import { toggleMenu } from '../actions/headerActions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    menuOpened: state.menuOpened
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: () => {
      dispatch(toggleMenu())
    }
  }
}
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default HeaderContainer;
