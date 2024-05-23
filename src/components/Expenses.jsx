import { useContext } from 'react';
import { myContext } from '../MyContext';
import { IoMdClose } from "react-icons/io";

function Expenses() {
  const { state, dispatch } = useContext(myContext);

  const handleDelete = (id,cost) => {
    console.log("Deleting expense with id:", id);
    dispatch({ type: "DELETE_EXPENSE", payload: { id, cost } });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold my-4">Expenses</h1>
      <div>
        {
          state.expenses.length === 0 
            ? <p className='text-green-500 text-3xl py-2'>No expenses added</p> 
            : state.expenses.map((item) => (
                <div key={item.id} className='flex justify-between border my-2'>
                  <h1 className='p-4'>{item.name}</h1>
                  <div className='p-4 flex justify-center items-center gap-2'>
                    <span>RS. {item.cost}</span>
                    <span 
                      onClick={() => handleDelete(item.id , item.cost)}
                      className='cursor-pointer text-xl'
                    >
                      <IoMdClose />
                    </span>
                  </div>
                </div>
              ))
        }
      </div>
    </div>
  );
}

export default Expenses;
