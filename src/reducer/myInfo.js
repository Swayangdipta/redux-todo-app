import {SET_INFO } from '../action/action-types'

const initialState = []

export default ((state= initialState,action)=>{
    switch(action.type){
        case SET_INFO:
            return [...state,action.payload]
        default:
            return state
    }
})