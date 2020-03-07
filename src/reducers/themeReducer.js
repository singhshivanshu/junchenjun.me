import { CHANGE_THEME } from '../utilities/constants/action_types'

const initialState = { theme: 'theme-light' }

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                theme:
                    state.theme === 'theme-light'
                        ? 'theme-dark'
                        : 'theme-light',
            }
        default:
            return state
    }
}

export default themeReducer
