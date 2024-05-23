import { createContext } from "react"

export const myContext = createContext()

export const initialState = {
    expenses:[],
    budget:2000,
    remaining:2000,
    spent:0
}

export const reducer = (state,action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
                remaining: state.remaining - action.payload.cost,
                spent: state.spent + action.payload.cost
            }
            case "DELETE_EXPENSE":{
                let arr =state.expenses.filter(exp => {
                    console.log(exp);
                    return exp.id !== action.payload.id
                })
                console.log(arr);
                return {
                    ...state,
                    expenses: [...arr],
                    remaining: state.remaining + action.payload.cost,
                    spent: state.spent - action.payload.cost
                }
            }
                

        default:
            return state;
    }
}