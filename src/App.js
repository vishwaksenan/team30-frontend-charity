import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import CustomCard from './CustomCard';

function MyTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 28 },
  ];

  const handleButtonClick = (id) => {
    setSelectedRow(id);
  };

  const renderDetailView = (id) => {
    if (id === null) {
      return null;
    }

    return (
      <div>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div style={{ maxWidth: '600px' ,  margin: '20'}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleButtonClick(row.id)}>
                    Click
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {renderDetailView(selectedRow)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyTable />
    </div>
  );
}

export default App;