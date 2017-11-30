const initialState = {
  counter: 0,
}
export const counterReducer = (state=initialState,action)=>{
   if (action.type === 'INCREMENT') {
     return Object.assign({},{ counter: state.counter + action.payload})
   }if (action.type === 'DECREMENT') {
     return Object.assign({},{ counter: state.counter - action.payload})
   }
   else {
     return state
   }
 }
