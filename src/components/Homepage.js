import './css/Homepage.css';
import Canyon from './img/grandcanyon.png';
import Card from './Cards';
import Tourist2 from "./img/Tourist2.png"
import Map2 from "./img/Map2.png"

function Homepage() {
  return (
    <div className="Main">
      <div className='header'> 
        <h1>Homepage</h1>
        <h3>Welcome To Arizona</h3>
        </div>
        <div className='ImageWrap'>
          <img src={Canyon} alt = "" className='Image'/>
          <h1 className = 'ImageTxt'> 
          Arizona is a popular tourist destination that offers breathtaking natural wonders,
          vibrant cultural experiences, and a variety of outdoor activities for visitors to enjoy
          </h1>
        </div>
        <div className='header'> 
        <h3>Location</h3>
        </div>
        <div className="boxes">
        
        <Card img={Map2} title = "Location"description="Arizona is a state in the southwestern region of the United States of America. It is bordered by several states, including California to the west, Nevada to the northwest, Utah to the north, New Mexico to the east, and Mexico to the south. Arizona is the sixth largest state in the United States and has a diverse landscape that includes deserts, canyons, forests, and mountain ranges. The state's capital and largest city is Phoenix, which is located in the central part of the state. With its warm climate, vibrant culture, and stunning natural beauty, Arizona is a popular tourist destination for people from around the world." />
        <div className='header'> 
        <h3>Geography</h3>
        </div>
        <Card img={Tourist2} title = "Geography" description="Arizona is a southwestern state in the United States, known for its diverse geography that includes deserts, canyons, mountains, and forests. The state is bordered by Nevada to the northwest, California to the west, Utah to the north, New Mexico to the east, and Mexico to the south. The Grand Canyon, one of the world's most famous natural wonders, is located in northern Arizona. The state is also home to the Sonoran Desert, which is known for its unique flora and fauna, including the iconic saguaro cactus. Arizona's geography and climate have played a significant role in shaping its history, economy, and culture." />

      

   


      
        </div>
    </div>
  );
}

export default Homepage;
