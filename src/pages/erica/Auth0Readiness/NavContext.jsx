import { createContext, useContext, useState } from 'react'

const NavContext = createContext(null)

export function NavProvider({ children }) {
  const [path, setPath] = useState('/')
  const [search, setSearch] = useState('')

  const navigate = (to) => {
    const [pathname, searchStr] = (to || '/').split('?')
    setPath(pathname)
    setSearch(searchStr ? `?${searchStr}` : '')
  }

  return (
    <NavContext.Provider value={{ path, search, navigate }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  return useContext(NavContext)
}
