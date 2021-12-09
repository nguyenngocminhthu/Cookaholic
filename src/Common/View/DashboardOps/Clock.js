import * as React from 'react';

import { Card, Box, Button } from '@mui/material';
import circleChart from '../../img/circleChart.png'

export default function Clock() {
  return (
    <>
      <div >
        <img style={{ width: "100%" }} src={circleChart} alt="circleChart"></img>
      </div>
    </>
  );
}