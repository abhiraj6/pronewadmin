import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 20,
    minHeight: 100,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  slideImage: {
    width: '50%',
    height: '50%',
    objectFit: 'cover',
  },
};

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment index to move to the next slide
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const images = [
    'https://github.com/abhiraj6/img1/blob/main/Dark%20Gray%20Modern%20Cafe%20&%20Resto%20Mailing%20Label.png?raw=true',
    'https://t4.ftcdn.net/jpg/02/66/75/95/240_F_266759547_j2YcbnDuCpBSNI3t6tDs9iV6sx1Dm1kL.jpg',
    'https://t4.ftcdn.net/jpg/02/94/30/59/240_F_294305947_cDB8HuuRfZWjBwmZ6BdR2AuozgnKXc90.jpg',
 
  ];

  return (
    <SwipeableViews index={index} onChangeIndex={(index) => setIndex(index)} enableMouseEvents>
      {images.map((imageUrl, i) => (
        <div key={i} style={{ ...styles.slide, backgroundImage: `url(${imageUrl})` }}>
          <img src={imageUrl} alt={`Slide ${i + 1}`} style={styles.slideImage} />
        </div>
      ))}
    </SwipeableViews>
  );
}

export default App;
