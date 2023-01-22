import React, { useContext } from 'react'
import { FirstNameContext } from './App'

export default function Demo() {
    const datafromFirstNameContext = useContext(FirstNameContext)
  return (
    <div>My name is {datafromFirstNameContext.name}. And I am of {datafromFirstNameContext.age} Years Old. </div>
  )
}
