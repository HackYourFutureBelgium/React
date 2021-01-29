import React, { useState, useEffect } from 'react';
import Search from './Search';

const Result = () => {
  return (
    <ul>
      <li>
        <span>Location: </span> <span>{fetchResult.Location}</span>
      </li>
      <li>
        <span> Description:</span> <span>{fetchResult.Description}</span>
      </li>
      <li>
        <span> Humidity:</span> <span>{fetchResult.Humidity}</span>
      </li>
      <li>
        <span> Temperature:</span> <span>{fetchResult.Temperature}</span>
      </li>
      <li>
        <span> Max Temperature: </span> <span>{fetchResult.Max_Temperature}</span>
      </li>
      <li>
        <span> Min Temperature: </span> <span>{fetchResult.Min_Temperature}</span>
      </li>
    </ul>
  );
};

export default Result;
