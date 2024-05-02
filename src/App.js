import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './componets/header/Header';
import OrderHistory from './componets/OrderHistory/OrderHistory';
import Cart from './componets/Cart/Cart';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/OrderHistory' element={<OrderHistory />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
