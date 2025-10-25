
/**
 * cart = [{id,title,price,description, image,quantity:1}]
 */

// export const cartReducer = (state=[],action)=>{
//     console.log("add to cart action",action)
//     switch(action.type){
//         case "cart/addToCart":{
//              console.log("Adding item to cart:", action.payload);
//             const product = state.find((item=>item.id === action.payload.id))
//             return product ? state.map(item=>{
//                 if(item.id===product.id){
//                     return {...item, quantity:item.quantity+1}

//                 }
//                 return item
//             }) : [...state,{...action.payload, quantity:1}]
//         };
//         case "cart/removeProduct":{
//             const updateProduct = state.filter(item=> item.id !== action.payload) 
//             return updateProduct
//         };
//         case "cart/modifyQuantityToItem":{
//             const modifyQuantity = state.map(item=>{
//                 if(item.id === action.payload.id){
//                     return {...item, quantity:action.payload.quantity}
//                 }
//                 return item
//             })
//             return modifyQuantity
//         }
//         case "cart/clearCart":{
//             return []
//         }
//         default:{
//             return state
//         }
//     }

// }
import { createReducer } from "@reduxjs/toolkit";



export const cartReducer = createReducer( [],(builder)=>{
    builder
    .addCase("cart/addToCart", (state, action)=>{
        const product = state.find(item=>item.id === action.payload.id);
        product ? (product.quantity+= 1) 
        : state.push({...action.payload, quantity:1});
        alert("added")
    })
    .addCase("cart/removeProduct", (state,action)=>{
        return state.filter(item => item.id !== action.payload)
    })
    .addCase("cart/modifyQuantityAnItem", (state,action)=>{
        const productIndex =  state.findIndex(item=>item.id===action.payload.id)
         state[productIndex].quantity=action.payload.quantity
    })
    .addCase("cart/clearCart", ()=>{
       return []
    })
})