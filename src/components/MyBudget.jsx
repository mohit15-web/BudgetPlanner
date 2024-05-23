import { useContext, } from "react"
import { myContext } from "../MyContext"

function MyBudget() {
  const {state} = useContext(myContext)
  return (
    <div>
        <h1  className="text-4xl font-semibold my-4">My Budget Planner</h1>
        <div className='flex gap-4 py-6'>
            <h1 className='border p-4 bg-slate-100 rounded-lg text-xl font-semibold tracking-wide'>Budget : {state.budget} </h1>
            <h1  className='border p-4 bg-slate-100 rounded-lg text-xl font-semibold tracking-wide text-green-700'>Remaining Rs. {state.remaining}</h1>
            <h1  className='border p-4 bg-blue-200 text-blue-600 rounded-lg text-xl font-semibold tracking-wide'>Spent So Far :{state.spent} </h1>
        </div>
    </div>
  )
}

export default MyBudget