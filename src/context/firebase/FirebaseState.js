import React from 'react'
import { FireBaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReduser, initialState)
    return (
        <FireBaseContext.Provider>
            {children}
        </FireBaseContext.Provider>
    )
}