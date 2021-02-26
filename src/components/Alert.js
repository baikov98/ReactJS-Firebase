import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {alertContext} from '../context/alert/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(alertContext)

    return (
        <CSSTransition 
            in={alert.visible}
            timeout={750}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit>
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
            <strong>Внимание</strong>
            {alert.text}
            <button type="button" 
                    className="close" 
                    aria-label="Close"
                    onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </CSSTransition>
    )
}