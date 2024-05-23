import { useEffect, useReducer } from "react"
import { initialState, myContext, reducer } from "../MyContext"
import PropTypes from 'prop-types'
const MyProvider = ({children}) => {
  const[state,dispatch] = useReducer(reducer,(JSON.parse(localStorage.getItem('expenses')) || initialState))

    useEffect(() => {
      localStorage.setItem('expenses',JSON.stringify(state))
    },[state])

    
  return (
    <myContext.Provider value={{state,dispatch}}>
        {children}
    </myContext.Provider>
  )
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default MyProvider;