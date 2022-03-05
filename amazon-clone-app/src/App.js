import React, { useEffect } from "react";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue} from "./StateProvider"
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Payment from "./Payment";
import OrderPlaced from "./OrderPlaced";


function App() {
  const [{}, dispatch] =useStateValue();




    //make a listener who will always keep a track who is signed in
    //we will use {useEffect to do so }

    //it is like a dynamic IF Statement in react    
    //inside the square brackets we can mention when we want to target the useEffect eg, [user, basket] this means when ever there is a change in user or basket useEffect will comeup
    //since it is blank this will hit only once when app component loads..
 

  useEffect(() => {
//will only run once app component loads.....
 
    auth.onAuthStateChanged(authUser => {
      console.log ('THE USER IS >>> ', authUser);
      if (authUser) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        //user just looged in or user was logged in
      }else {
        //user is loged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

     }, [])

  return (
    <div className="App">
      
      <Router>

      {/* ERRORR-------switch never works , replace switch with routes */}
        <Routes>
          <Route path="/login" element={<><Login /></>}></Route>
          <Route path="/cart" element={<><Header /><Checkout /></>}></Route>
          <Route path="/" element={<><Header /><Home /><Footer /><Footer2 /></>}></Route>
          <Route path="/checkout" element={<><Header /> <Payment /></>}> </Route>
          <Route path="/orderplaced" element={<><Header /><OrderPlaced /><Footer /><Footer2 /> </>}> </Route>

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
