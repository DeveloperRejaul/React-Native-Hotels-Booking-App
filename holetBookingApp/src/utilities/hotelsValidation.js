class HotelsDataValidator {
  hotelData(catagoryName, hotelsData) {
    // All Hotels
    if (catagoryName === 'All hotels') {
      return hotelsData;
    }

    // Popular Hotels
    if (catagoryName === 'Popular') {
      const popularHotels = hotelsData.filter(data => data.reating === '5.00');
      return popularHotels;
    }

    // AdventureHotels
    if (catagoryName === 'Adventure') {
      const AdventureHotels = hotelsData.filter(data => {
        if ((data.reating >= '3.5') & (data.price >= 40)) {
          return data;
        }
      });
      return AdventureHotels;
    }

    // All Hotels
    if (catagoryName === 'Near you') {
      return hotelsData;
    }
  }

  // handle String
  stringData(string, wordNumber) {
    const pattarn = /\s/gi;
    const newString = string.split(pattarn);

    if (newString.length >= wordNumber) {
      let headerTitle = newString
        .filter((ele, i) => i <= 2)
        .reduce((acc, cur) => (acc += ` ${cur}`));
      return `${headerTitle}..`;
    } else {
      return string;
    }
  }
}

const hotelDataValidator = new HotelsDataValidator();
export default hotelDataValidator;
