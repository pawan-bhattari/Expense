import React from 'react'


const ExpenseItem = ({expense,handleDelete,handleEdit}) => {
   const {id,charge,amount} =expense
    
     return (
        
            
          <div> 

              <h3> {charge} </h3>
              <h3> $ {amount} </h3>
              <button className="edit-btn" 
              onClick={()=>handleEdit(id)}
              > Edit </button>
              <button className="edit-btn"
              onClick={()=>handleDelete(id)}
              >  Delete </button>
              
          </div>
           
        
        
      
        
      
    )
}

export default ExpenseItem;

