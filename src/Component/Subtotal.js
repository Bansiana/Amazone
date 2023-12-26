import React from "react";
import "./Subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { Link } from "react-router-dom";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <Currencyformat
        reanderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.lendth}items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <imput type="checkbox" /> This order Contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to={'/payment'}>
        <button>Proceed to Chackout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
