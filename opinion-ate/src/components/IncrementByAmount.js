import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, incrementByAmount} from '../features/counter/counterSlice'

export default function IncrementByAmount() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
        <button
            aria-label="increment"
            onClick={() => dispatch(increment())}
        >   
            increment
        </button>
        <button
            onClick={() => dispatch(decrement())}
        >
            decrement
        </button>
        
        <input type="number" id="inputValue">

        </input>
        <button onClick={() => dispatch(incrementByAmount(document.getElementById('inputValue').value))}>
            add value    
        </button> 
        {count}
    </div>
  )
}
