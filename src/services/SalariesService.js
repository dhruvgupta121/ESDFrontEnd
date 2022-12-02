import axios from 'axios'

const salariesUrl = `http://localhost:8080/api/salary`

const getEmployeeSalaries = async (employee) => {
  const response = await axios.get(`${salariesUrl}/${Number(employee.employee_id)}`)
  return response.data
}


const exportObject = { getEmployeeSalaries }

export default exportObject