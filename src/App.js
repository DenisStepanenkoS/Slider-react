import './App.css';
import { useEffect, useState } from 'react';
import Slider from './components/Slider';
function App() {
  const [cosmicData, setCosmicData] = useState([]);  
  const [isFetching, setIsFetching] = useState(true);
  // useEffect(() => {
  //   fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10')
  //   .then(response => response.json())
  //   .then(data => setCosmicData([...data]))
  //   .catch(error => console.error('error>> ',error))
  //   .finally(()=>setIsFetching(false))
    
  // }, []);
  
  useEffect(() => {
    setCosmicData([
      {"date":"1999-01-10","explanation":"1","hdurl":"https://apod.nasa.gov/apod/image/9706/venus3_mag_big.jpg","media_type":"image","service_version":"v1","title":"Venus' Once Molten Surface","url":"https://apod.nasa.gov/apod/image/0209/zodiacal_nsl.jpg"},
      {"date":"1999-01-10","explanation":" 2","hdurl":"https://apod.nasa.gov/apod/image/9706/venus3_mag_big.jpg","media_type":"image","service_version":"v1","title":"Venus' Once Molten Surface","url":"https://apod.nasa.gov/apod/image/9706/venus3_mag.jpg"},
      {"date":"1999-01-10","explanation":"3","hdurl":"https://apod.nasa.gov/apod/image/9706/venus3_mag_big.jpg","media_type":"image","service_version":"v1","title":"Venus' Once Molten Surface","url":"https://apod.nasa.gov/apod/image/1902/PlaneTrailMoon_Staiger_960.jpg"},
      {"date":"1999-01-10","explanation":"4","hdurl":"https://apod.nasa.gov/apod/image/9706/venus3_mag_big.jpg","media_type":"image","service_version":"v1","title":"Venus' Once Molten Surface","url":"https://apod.nasa.gov/apod/image/9909/ringhalo_subaru.jpg"},
      {"date":"1999-01-10","explanation":" 5","hdurl":"https://apod.nasa.gov/apod/image/9706/venus3_mag_big.jpg","media_type":"image","service_version":"v1","title":"Venus' Once Molten Surface","url":	"https://apod.nasa.gov/apod/image/2208/LagoonStarFree_Dhar_960.jpg"}
    ]);
    setIsFetching(false);
  }, []);
  
  return (
    !isFetching&&(
      <Slider cosmicData = {cosmicData}/>
    )  
  );
}

export default App;
