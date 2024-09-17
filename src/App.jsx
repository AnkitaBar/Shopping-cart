import { useState } from "react";
import './App.css'
import Navbar from "./Navbar";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const  [show,setShow] = useState(true);

  function handleClick(item) {
    // console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  return (
    <>
    <div className="All_section">
      <Navbar size={cart.length} setShow={setShow} />
      {
        show ? <Shop handleClick={handleClick} /> : 

        <Cart cart={cart} setCart={setCart}/>
      }
      
      {warning && <div className="warning">
        item is already Present in the cart
      </div>}
</div>
    </>
  );
}

export default App;
