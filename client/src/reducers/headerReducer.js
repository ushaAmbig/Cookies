
const menuState = { menuOpened:  false };
const headerReducer = (state = menuState, action) => {
  if (action.type === 'TOGGLE_MENU') {
    return Object.assign({}, state, {
      menuOpened: !state.menuOpened.value
    })
  }
  return state;
}

export default headerReducer;
