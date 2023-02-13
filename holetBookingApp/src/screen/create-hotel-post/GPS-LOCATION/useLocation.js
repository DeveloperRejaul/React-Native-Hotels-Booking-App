import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';

export default () => {
  const [posion, setPosion] = useState({
    lat: null,
    log: null,
  });
  const [error, setError] = useState();

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      data => {
        setPosion({
          lat: data.coords.latitude,
          log: data.coords.longitude,
        });
      },
      err => setError(err),
      {enableHighAccuracy: true},
    );
  };
  return {getLocation, posion, error};
};
