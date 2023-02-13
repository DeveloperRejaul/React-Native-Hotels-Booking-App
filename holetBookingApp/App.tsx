import React from 'react';
import Route from './src/route/Route.js';
// for map
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();
// for map

export default function App() {
  return <Route />;
}
