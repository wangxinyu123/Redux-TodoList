import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const changeInput = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItem = () => ({
    type: ADD_ITEM
})

export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})