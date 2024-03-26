import React, { useState } from 'react';

const Task3 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample data array
  const dataArray = [
    { id: 1, name: 'John', email: 'John@gmail.com' },
    { id: 2, name: 'Kevin', email: 'Kevin@gmail.com' },
    { id: 3, name: 'kris', email: 'krish@gmail.com'}
  ];

  const handleSearch = () => {
    const filteredResults = dataArray.filter(
      item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toString().includes(searchQuery)
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
    <div className='task3'>
        <h1>Task 3</h1>
      <input
        type="text"
        placeholder="Search by name, id, or email"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className='user'>
        {searchResults.map(item => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>ID: {item.id}</p>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Task3;
