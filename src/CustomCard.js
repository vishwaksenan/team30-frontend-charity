import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2">
          This is a simple card view using Material-UI in React.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;