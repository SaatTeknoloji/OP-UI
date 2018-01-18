const CounterReducer = (state= {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('counter reducer action')
      return {
        count: state.count + 1
      }
    default:
      return {
        count: 35
      }
  }
}

export const increment = () => {
  console.log('dispatched worked!')
  return {type:'INCREMENT'}
}

export default CounterReducer

