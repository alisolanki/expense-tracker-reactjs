import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "exp1",
      date: new Date(2021, 4, 30),
      type: "Car Insurance",
      amount: 100,
    },
    {
      id: "exp2",
      date: new Date(2021, 5, 1),
      type: "Second Expense",
      amount: 101,
    },
    {
      id: "exp3",
      date: new Date(2021, 5, 2),
      type: "One More Expense",
      amount: 101,
    },
    {
      id: "exp4",
      date: new Date(2021, 5, 3),
      type: "Investments",
      amount: 101,
    },
  ];
  return (
    <div>
      <h1 className="app-title">Expense Tracker App</h1>
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
    </div>
  );
}

export default App;
