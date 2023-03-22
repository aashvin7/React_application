import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// import App from './App';
// import reportWebVitals from './reportWebVitals';

class Yami extends React.Component
{

  render()
  {
   return<div>
     <h1 align="center" color='red'>HELLO {this.props.name}</h1>
   </div>
  }
  
};

      //age calculation is done here 

function Calc()
{
  var en_year= parseInt(document.getElementById('eyear').value);
  var b_year= parseInt(document.getElementById('year').value);
   
  document.getElementById('result').value = en_year-b_year;
}

function Bulb () /* styling works only in function*/
{
 
  return<form>
    <div>
    <Yami name="Vigneshwar Venugopal" />
      <h2 style={inlineStyle}>WELCOME</h2>
      <section>
      <div class="container" align="center">
      <h2>Entry Form</h2>
      <h3>First Name:&nbsp;<input type="text" /></h3>
      <h3>Last Name:&nbsp;<input type="text" /></h3>
      <h3>Roll no:&nbsp;<input type='text' /></h3>
      <h3>Department: <select name="dept">
        <option>--</option>
        <option>AIML</option>
        <option>AIDS</option>
        <option>CSE</option>
        <option>IT</option>
        <option>CSBS</option>
        <option>ISE</option>
        <option>CT</option>
        <option>CSD</option>
      </select></h3>
      <div >
      <h3>Enrollment Year :&nbsp;
      <input type="number" id="eyear" name="enyear" placeholder='yyyy' min="1" max="2023" />
      &nbsp;</h3>
      <h3>Date of Birth:&nbsp;
      <input type="number" id="date" name="bdate" placeholder='dd' min="1" max="31"/>
      &nbsp;
      <input type="number" id="month" name="bmonth" placeholder='mm' min="1" max="12" />
      &nbsp;
      <input type="number" id="year" name="byear" placeholder='yyyy' min="1" max="2023" />
      &nbsp; <button onClick={Calc}>Age</button>
      </h3>
      <h3>Age:<output type='text' id='result'/></h3>  
     </div>
      <h3>Mail ID:&nbsp;<input type="email" /></h3>
      <h3>Password:&nbsp;<input type="password" /></h3>
      <h3>Current semster: &nbsp;<select name="sem">
        <option>--</option>
        <option>Sem 1</option>
        <option>Sem 2</option>
        <option>Sem 3</option>
        <option>Sem 4</option>
        <option>Sem 5</option>
        <option>Sem 6</option>
        <option>Sem 7</option>
        <option>Sem 8</option>
      </select></h3>
      <h3>Language:&nbsp;<input type='text' /></h3>
      </div>
      </section>
      <br></br>
      <button class='submit'>Submit</button>
      <br></br>
      <br></br>
      <br></br>

      </div>
  </form>
   
}
var inlineStyle={color:"red",textAlign:"center"}
const root = ReactDOM.createRoot(document.getElementById('anime'));
root.render(<Bulb />);
// root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
