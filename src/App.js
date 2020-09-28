import React from 'react';
import ChangeuserName from './Components/ChangeUsername';
import ChangeSelectBox from "./Components/ChangeSelectBox";
import SmsApplication from "./Components/SmsApplication";
import WishMessage from "./Components/WishMessage";
import Customers from "./List&ConditionalRendering/Customers";
import EmployeeList from "./List&ConditionalRendering/EmployeeList";
import EmployeeCards from "./List&ConditionalRendering/EmployeeCards";

function App() {
  return (
    <div className="App">
       <nav className="nvabar navbar-dark bg-dark">
            <a href="/" className="navabar-brand">React Basic Concepts</a>
       </nav>
      {/* <ChangeuserName />
       <ChangeSelectBox/>
       <SmsApplication/>
       <WishMessage />
       <Customers />*/}
       <EmployeeCards />
       {/*<EmployeeList />*/}
    </div>
  );
}

export default App;
