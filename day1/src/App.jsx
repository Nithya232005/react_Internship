import { useReducer,useState } from "react";
import "./App.css";
const initialState={
  shopping:[]
};
function shopReducer(state, action) {
  switch (action.type) {

    case "Add_TO_Cart":
      return {
        ...state,
        shopping: [...state.shopping, action.payload]
      };

    case "Remove_Cart":
      return {
        ...state,
        shopping: state.shopping.filter(
          item => item.id !== action.payload
        )
      };

    case "Clear_All":
      return {
        ...state,
        shopping: []
      };

    default:
      return state;
  }
}

function App(){
  const[state,dispatch]=useReducer(shopReducer,initialState);
  const products=[{id:1,name:"sunscreen",price:"450"},
    {id:2,name:"moisturizer",price:"499"},
    {id:3,name:"vitamin c serum",price:"470"}];
  return(
  <div className="container">
    <h2>PRODUCTS</h2>
    {products.map(product => (
      <div key={product.id}>
        <p>{product.name}</p>
        <p>₹{product.price}</p>
        <button
          onClick={() =>
            dispatch({
              type: "Add_TO_Cart",
              payload: product
            })
          }
        >ADD TO CART</button>
      </div>
    ))}
    <h2>Cart</h2>
    {state.shopping.map(item=>(<div key={item.id}>{item.name}
      <button onClick={()=>
        dispatch({
          type:"Remove_Cart",
          payload:item.id
        })
      }>Remove</button>
      </div>
      ))}
      <button onClick={()=>dispatch({
        type:"Clear_All"

      })}>clearAll</button>
    
  </div>
  
);

      
  
}
export default App;