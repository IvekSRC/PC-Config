import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CompletedBuilds from "./pages/CompletedBuilds";
import ShoppingBag from "./pages/ShoppingBag";
import SystemBuilder from "./pages/SystemBuilder";
import About from "./pages/About";
import ConfirmPurchase from './pages/ConfirmPurchase';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/systembuilder' element={<SystemBuilder />} />
          <Route path='/completedbuilds' element={<CompletedBuilds />} />
          <Route path='/about' element={<About />} />
          <Route path='/shoppingbag' element={<ShoppingBag />} />
          <Route path='/confirmPurchase' element={<ConfirmPurchase />} />
        </Routes>
    </Router>
  )
}

export default App;
