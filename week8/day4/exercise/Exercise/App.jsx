import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from  './components/ErrorBoundary';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';


const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile Screen</h1>;
const ShopScreen = () => {
  throw new Error('Shop component crashed!');
};


function App() {
  /** Exercise 4 */
  const postData = async () => {
    const url = "https://webhook.site/6f303eaa-eb73-4559-b353-d39fed4e5162";
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "no-cors", 
      });
      console.log(response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  

  

  return (
    <Router>
      {/* Exercise 1 */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <div>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        
      </nav>

      <div >
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
      <br/>

      {/* Exercise 2 */}
      <>
      <PostList />
      </>
      <br/>

      {/* Exercise 3 */}
            <>
            <Example1/>
            <Example2/>
            <Example3/>
            </>


      {/* Exercise 4 */}
      <>
      <h1>Post JSON Data with React</h1>
      <button onClick={postData}>Press me to post some data</button>
      </>

    </Router>
  );
}

export default App;
