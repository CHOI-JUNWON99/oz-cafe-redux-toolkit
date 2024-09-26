import { legacy_createStore, combineReducers } from "redux"
import data from "../assets/data"

export const addToCart = (options, quantity, id) => {
    return {
        type: 'addToCart',
        payload: { options, quantity, id }
    }
}

export const removeFromCart = (id) => {
    return {
        type: `removeFromCart`,
        payload: { id }
    }
}

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToCart': return [...state, action.payload]
        // action.payload가 { id } 형태이므로, action.payload.id로 접근
        case 'removeFromCart': return state.filter((el) => action.payload.id !== el.id)
        default: return state
    }
}

export const menuReducer = (state = data.menu, action) => {
    return state
}

const rootReducer = combineReducers({ cartReducer, menuReducer })

export const store = legacy_createStore(rootReducer)