import React,{useState}from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'


const initialExpense=[
  {id:uuidv4(), charge:"Car", amount:1600},
  {id:uuidv4(), charge:"rent", amount:1200}, 
  {id:uuidv4(), charge:"shopping", amount:900}
]

function App() {
  const[expenses,setexpenses] = useState(initialExpense);
  const[charge,setcharge] =useState("")
  const[amount,setamount] = useState("");
  const[edit,setEdit]=useState(false)
  const[Id,setId]=useState(0)


  const handleCharge=(e)=>{
    setcharge(e.target.value)
  }
  
  const handleAmount=(e)=>{
    setamount(e.target.value)
  }
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(charge !=="" && amount > 0){
      const singleExpenses={id:uuidv4(),charge,amount}
      setexpenses([...expenses,singleExpenses]);
     
      setcharge("");
      setamount("");

    }else{
     console.log ("something gone wrong")
    }
  }

  const clearItems=()=>{
   setexpenses([]);

  };
  
  const handleDelete=id=>{
    let tempExpenses = expenses.filter(item=>item.id !==id);
    setexpenses(tempExpenses)
  }

  const handleEdit=id=>{
   let expens = expenses.find(item=>item.id ===id)
   let{charge,amount} =expens;
   setcharge(charge);
   setamount(amount);
   setEdit(false);
   setId(id);

  }
  return (
    <div className="App">  
    
    
    
      
      <h1> Budget Calculator </h1>

       <main className="Main">
      
      <ExpenseForm charge={charge} amount ={amount} handleAmount={handleAmount}
       handleCharge={handleCharge} handleSubmit={handleSubmit}
       edit={edit}
      /> 
      <ExpenseList expenses ={expenses} handleDelete={handleDelete}
       handleEdit={handleEdit} clearItems={clearItems}
      />
      </main>
 
  <h1> Total Spending: <span className="span"> ${expenses.reduce((e,next)=>{
      return (e += parseInt(next.amount));
  },0)}</span>
     
     </h1> 
    </div>
  );
}

export default App;
