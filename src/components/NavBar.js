import React from 'react'
const NavBar = ({ user, setUser }) => {
    const logout = () => {
        window.localStorage.removeItem('loggedInUser')
        setUser(null)
      }
    if (!user)
        return null

        return (
            <div className='regular-shadow mb-1'>
              <nav className='navbar navbar-expand-lg navbar-dark' id='menu'>
                {/* UPDATE user.name PROPERTY IF IT DOESN'T EXIST */}
                <button className='navbar-brand btn btn-link border border-light p-2'>Welcome, {user.first_name}</button>
                
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        Home 
                    </li>
                </ul>
          
          {/* Logout button */}
          <div className='inline my-2 my-lg-0'><button className='btn btn-primary' onClick={logout}>Logout</button></div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar