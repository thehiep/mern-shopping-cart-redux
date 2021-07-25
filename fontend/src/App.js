
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';
function App() {
  const [sideToggle, setSideToogle] = useState(false);
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar click={() => setSideToogle(true)} />
      {/* SideDrawer */}
      <SideDrawer shown={sideToggle} click={() => setSideToogle(false)} />
      {/* Backdrop */}
      <Backdrop shown={sideToggle} click={() => setSideToogle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </BrowserRouter>
  );
}

export default App;
