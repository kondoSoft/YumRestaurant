
export const incrementCounter = ()=>{
  return {
    type: 'INCREMENT',
    payload: 1,
  }
}
export const decrementCounter = ()=>{
  return {
    type: 'DECREMENT',
    payload: 1,
  }
}
