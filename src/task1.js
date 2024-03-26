import React, { useState } from 'react';

const Task1 = () => {

  const [records, setRecords] = useState([
    { id: 1, name: 'John', email: 'John@gmail.com' },
    { id: 2, name: 'Kevin', email: 'Kevin@gmail.com' },
    { id: 3, name: 'kris', email: 'krish@gmail.com'}
  ]);
  const [isVisible, setIsVisible] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleButton = () => {
    setIsEnabled(!isEnabled);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(parseInt(value));
    } else if (name === 'num2') {
      setNum2(parseInt(value));
    }
  };

  const calculateSum = () => {
    setSum(num1 + num2);
  };

  const addRecord = (e) => {
    const newRecord = { id: records.length + 1, name: `${name} `, email:`${email}` };
    setRecords([...records, newRecord]);
  };

  return (
    
    <div className='task1'>
      {/* Display simple JSX */}
      <h1>Task 1</h1>

      {/* Display an array of records */}
      <div>
        {records.map(record => (
          <li key={record.id}>{record.name}  <span>{record.email}</span></li>
        ))}
      </div>

      {/* Show/Hide Element on Screen */}
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>This element is {isVisible ? 'visible' : 'hidden'}.</p>}

      {/* Enable/Disable a button */}
      <button onClick={toggleButton} >{isEnabled ? 'Disable' : 'Enable'}</button>
     <br></br>


      {/* 2 way data binding using textbox */}
      <p>Sum: {sum}</p>
      <input type="text" name="num1" value={num1} onChange={handleInputChange} />
      <input type="text" name="num2" value={num2} onChange={handleInputChange} />
      <button onClick={calculateSum} disabled={!isEnabled}>Calculate Sum</button>
      

      {/* Dynamically add child components */}
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter name'/>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email'/>
      <button onClick={addRecord}>Add Record</button>
    </div>
  );
};

export default Task1;
