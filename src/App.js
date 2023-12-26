import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Component/Chackout";
import Login from "./Component/Login";
import { useStateValue } from "./Component/StateProvider";
import { useEffect } from "react";
import { auth } from "./Component/Firebase";
import Payment from "./Component/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Component/Orders";

const promise = loadStripe(
  "pk_test_51OPXvlJGSH5WiRcgP5HNsjpZIi6kR4fEBN8nqJQOIYeJynuMJVnkNtgTXz3Q8DCHdfqtUnx8jWmSoP5hrgnAGfXL000sbBt5U6"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <div className="App">
        {/* <Header /> */}
        <Routes>

          <Route
            path="/order"
            element={
              <>
                <Header />
                <Orders/>
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header /> <Home />{" "}
              </>
            }
          ></Route>

          <Route
            path="/chackout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
