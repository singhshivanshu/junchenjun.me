import React from 'react'
import { connect } from 'react-redux'
import { changeTheme } from '../../../actions/index'
// import ToolTip from '../ToolTip/index'

const ThemeButton = props => {
    const { theme, changeTheme } = props
    console.log(theme)
    return (
        <div
            className={
                'theme-button-wrapper fade-in-from-left no-animation-on-mobile'
            }
        >
            {/* <ToolTip
                lable={theme == 'theme-light' ? 'Lights out' : 'Lights on'}
            > */}
            <button onClick={() => changeTheme()} className={'theme-button'}>
                <span className="theme-button-heart" />
            </button>
            {/* </ToolTip> */}
        </div>
    )
}

const mapStateToProps = state => {
    return { theme: state.themeReducer.theme }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTheme: () => dispatch(changeTheme()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton)
