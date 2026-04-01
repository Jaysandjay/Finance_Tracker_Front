import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/transactions'>Transactions</NavLink>
        <NavLink to='budgets'>Budgets</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/budgets' element={<Budgets/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
