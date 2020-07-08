import React from 'react'
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

const ExpenseForm = ({charge,amount,handleAmount,handleCharge,handleSubmit,edit}) => {
    return (
        <form className="Ex-form" onSubmit={handleSubmit}>
           
            
           {/* <TextField id="charge" type="text" value={charge} onChange={handleCharge}  label="Eg.Rent" /> <br/>

           <TextField id="charge" type="number" value={amount} onChange={handleAmount} placeholder="$" />
            */}
          
          <input type ="text" id = "charge" name="charge" value={charge}
           onChange ={handleCharge}
           placeholder ="eg. rent"/>
         
         <input type ="number"
          value={amount} onChange={handleAmount}
          id = "amount" name="amount" placeholder ="amount"/>
        
         
         <Button className="form-button" variant="outlined" type= "Submit" color="secondary">
         {edit?'edit':'submit'}
      </Button>
        </form>
    )
} 

export default ExpenseForm
