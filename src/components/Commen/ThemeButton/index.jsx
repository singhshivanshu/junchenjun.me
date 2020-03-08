import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToolTip from '../ToolTip/index'
import { changeTheme } from '../../../actions/index'

const ThemeButton = () => {
    const theme = useSelector(state => state.themeReducer.theme)
    const dispatch = useDispatch()
    return (
        <div
            className={
                'theme-button-wrapper fade-in-from-left no-animation-on-mobile'
            }
        >
            <ToolTip
                lable={theme == 'theme-light' ? 'Lights out' : 'Lights on'}
            >
                <button
                    onClick={() => dispatch(changeTheme())}
                    className={'theme-button'}
                >
                    <span className="theme-button-heart" />
                </button>
            </ToolTip>
        </div>
    )
}

export default ThemeButton
