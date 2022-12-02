import React from 'react'
import Salary from './Salary'

const Salaries = (props) => { 
    if (props.salaries === [])
    return null

  return (
    <div className='m-5 p-2 rounded regular-shadow' id="salaries">
      <h2 className='ml-2'>Your Salaries</h2>
      <table cellPadding={10}>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>
        { props.salaries.map(s =>
            <Salary
              salary={s} employee = {props.employee}
            //   user = {user}
            //   key={s.Id}
            /> 
          )
        }
      </table>
    </div>
  )
}

export default Salaries;