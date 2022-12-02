import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Salaries from './components/Salaries'
import NavBar from './components/NavBar'

import salaryService from './services/SalariesService'
import loginService from './services/loginService'

const App = () => {
  const [ user, setUser ] = useState(null)
  const [ salaries, setSalaries ] = useState([])
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      
      notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')
      setSalaries([])
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username entered`, 'error')
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const salaries = await salaryService.getEmployeeSalaries(user)
        setSalaries(salaries)
      }
    }
    fetchData()
}, [user])


// useEffect(() => {
//   const loggedInUser = window.localStorage.getItem('loggedInUser')
//   if (loggedInUser)
//     setUser(JSON.parse(loggedInUser))
// }, [])




  return (
    <div>
      {/* Header of the page */}
      <div className='text-center page-header p-2 regular-text-shadow regular-shadow'>
          <div className='display-4 font-weight-bold'>
            Faculty Salary History
          </div>
      </div>
      
      {/* Notification component that will render only when the notification state is not null */}
      <Notification notification={notification} type={notificationType} />

      {
        user === null && 
        <LoginForm startLogin={handleLogin}/>
      }

      {
        /* Show NavBar when login has happened */
        user !== null && 
        <NavBar user={user} setUser={setUser}/>
      } 

      {
        user !== null &&
        <Salaries
          salaries={salaries} employee = {user}
        />
      }
    </div>
  )
}

export default App;