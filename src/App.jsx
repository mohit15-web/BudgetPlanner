import AddExpense from "./components/AddExpense";
import MyProvider from "./components/MyProvider";

function App() {
  return (
   <MyProvider>
    <AddExpense/>
   </MyProvider>
  );
}

export default App;
