const {imagePhat} = require('./imagePhat.js');
import uuid from 'react-native-uuid';

export const hotelsData = [
  {
    id: uuid.v4(),
    favorit: true,
    booked: true,
    image: imagePhat.cardImage_01,
    hotelName: 'Hotel Sea Cox',
    location: {
      name: `Cox's Bazer  `,
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    price: '35',
    reating: '5.00',
    shourtDiscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    fullDiscription: `Lorem ipsum dolor sit amet, consectetur d do eiusmod tempor incididunt ut tur d do eiusmod tempor incididunt ut`,
    amenities: {tv: true, wifi: true, ac: true, freeParking: true},
    roomDetals: `Lorem ipsum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    reviews: [
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
    ],
    rooms: [
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
    ],
  },
  {
    id: uuid.v4(),
    favorit: true,
    booked: true,
    image: imagePhat.cardImage_01,
    hotelName: 'Hotel Regent Park',
    location: {
      name: 'Chattogram',
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    price: '50',
    reating: '4.00',
    shourtDiscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    fullDiscription: `Lorem ipsum dolor sit amet, consectetur d do eiusmod tempor incididunt ut tur d do eiusmod tempor incididunt ut`,
    amenities: {tv: true, wifi: true, ac: true, freeParking: true},
    roomDetals: `Lorem ipsum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    reviews: [
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
    ],
    rooms: [
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
    ],
  },
  {
    id: uuid.v4(),
    favorit: true,
    booked: true,
    image: imagePhat.cardImage_01,
    hotelName: 'The Grand Hotel',

    location: {
      name: 'Sylhet',
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    price: '50',
    reating: '4.35',
    shourtDiscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    fullDiscription: `Lorem ipsum dolor sit amet, consectetur d do eiusmod tempor incididunt ut tur d do eiusmod tempor incididunt ut`,
    amenities: {tv: true, wifi: true, ac: true, freeParking: true},
    roomDetals: `Lorem ipsum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    reviews: [
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
    ],
    rooms: [
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
    ],
  },
  {
    id: uuid.v4(),
    favorit: true,
    booked: true,
    image: imagePhat.cardImage_01,
    hotelName: 'Hotel Seven Star',

    location: {
      name: 'Dhaka',
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    price: '45',
    reating: '4.90',
    shourtDiscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    fullDiscription: `Lorem ipsum dolor sit amet, consectetur d do eiusmod tempor incididunt ut tur d do eiusmod tempor incididunt ut`,
    amenities: {tv: true, wifi: true, ac: true, freeParking: true},
    roomDetals: `Lorem ipsum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    reviews: [
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
    ],
    rooms: [
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
    ],
  },
  {
    id: uuid.v4(),
    favorit: true,
    booked: true,
    image: imagePhat.cardImage_01,
    hotelName: 'Saintmartin hotel',

    location: {
      name: 'Saintmartin',
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    price: '50',
    reating: '4.50',
    shourtDiscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    fullDiscription: `Lorem ipsum dolor sit amet, consectetur d do eiusmod tempor incididunt ut tur d do eiusmod tempor incididunt ut`,
    amenities: {tv: true, wifi: true, ac: true, freeParking: true},
    roomDetals: `Lorem ipsum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    reviews: [
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
    ],
    rooms: [
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
    ],
  },
  {
    id: uuid.v4(),
    favorit: true,
    booked: true,
    image: imagePhat.cardImage_01,
    hotelName: 'Sarena Hotel',
    location: {
      name: 'Gilgit',
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    price: '60',
    reating: '3.50',
    shourtDiscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    fullDiscription: `Lorem ipsum dolor sit amet, consectetur d do eiusmod tempor incididunt ut tur d do eiusmod tempor incididunt ut`,
    amenities: {tv: true, wifi: true, ac: true, freeParking: true},
    roomDetals: `Lorem ipsum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consecteturum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    reviews: [
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
      'Lorem ipsum dolor sit ametdolor sit ametdolor sit amet,',
    ],
    rooms: [
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
      {
        image: imagePhat.cardImage_01,
        roomeType: 'Double bed',
        price: '50',
      },
    ],
  },
];