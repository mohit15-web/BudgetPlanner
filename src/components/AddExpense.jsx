import { useContext, useState } from 'react';
import MyBudget from './MyBudget';
import Expenses from './Expenses';
import { myContext } from '../MyContext';
function AddExpense() {
  
  const { dispatch } = useContext(myContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  const updateExpense = () => {
    dispatch({type: "ADD_EXPENSE",payload:{id:Date.now(), name,cost}})
    setName("");
    setCost(0);
  };

  return (
    <div className="w-[50%] m-auto h-screen flex justify-center flex-col py-4 px-10 text-xl">
      <MyBudget />
      <Expenses />
      <h1 className="text-4xl font-semibold my-4">Add Expenses</h1>
      <div className="flex gap-10">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Name</label>
          <input 
            type="text" 
            className="border border-gray-400 p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium">Cost</label>
          <input 
            type="number" 
            className="border border-gray-400 p-2 rounded" 
            value={cost}
            onChange={(e) => setCost(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 w-52"
        onClick={updateExpense}
      >
        Save
      </button>
    </div>
  );
}

export default AddExpense;
