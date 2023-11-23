import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "test", amount: 10, category: "Utilities" },
    { id: 2, description: "test1", amount: 10, category: "Utilities" },
    { id: 3, description: "test2", amount: 10, category: "Utilities" },
    { id: 4, description: "test3", amount: 10, category: "Utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
