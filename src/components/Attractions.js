import './css/Attractions.css';
import Card from './Cards';
import CoverAttraction from './img/DisplayAttract.png';
import MonteMount from './img/Montezuma.png';
import GrandCanyon from './img/Grandcay.png';


function Attractions() {
  return (
    <div className="Main">
       <div className='Attractionheader'> 
        <h1>Attractions</h1>
        <h3>See what the best of Arizona has to offer for your stay!</h3>
      </div>
      <div className='ImageWrapCover'>
          <img src={CoverAttraction} alt = "" className='Image'/>
          <h1 className = 'ImageTxt'> 
          Arizona is a state filled with diverse attractions. The Grand Canyon National Park is one of the most famous attractions in Arizona, featuring stunning views of the massive canyon that stretches over 277 miles. Monument Valley Navajo Tribal Park is another popular destination, showcasing towering red rock formations and providing visitors with a glimpse into Navajo culture. Sedona is known for its stunning red rock formations, while the city of Tucson offers an array of museums, gardens, and historic sites. Other notable attractions include the Hoover Dam, Lake Powell, and the Petrified Forest National Park. From natural wonders to cultural landmarks, Arizona has something to offer for every type of traveler.
          </h1>
        </div>
        <div className='Attractionheader'> 
        <h3>Montezuma Castle National Monument</h3>
      </div>
        <div className="boxes">
        <Card img={MonteMount} title = "Description" description="Montezuma Castle National Monument is a must-visit destination for anyone interested in Native American history and ancient architecture. The cliff dwelling is an impressive structure built into a cliff face in central Arizona by the Sinagua people over 800 years ago. The dwelling consists of five floors and 20 rooms, and it is believed that it housed around 50 people at its peak. The site also features a museum with exhibits that provide insight into the lives of the Sinagua people and their daily routines. Visitors can walk along a self-guided trail to view the ruins from different angles and learn about the history and culture of the site. The monument is easily accessible and can be visited as a day trip from nearby cities like Phoenix or Sedona. Overall, Montezuma Castle National Monument is an incredible piece of ancient architecture that offers a fascinating glimpse into the history of the region's native people." />
        <Card img={GrandCanyon} title = "Description" description="The Grand Canyon National Park is one of the most iconic and breathtaking natural wonders in the world. Carved over millions of years by the Colorado River, the Grand Canyon spans over 277 miles and is up to 18 miles wide in some places. The canyon is an awe-inspiring landscape of colorful rock formations, towering cliffs, and breathtaking vistas that leave visitors awestruck. The park offers a range of hiking trails, campgrounds, and guided tours, allowing visitors to explore the canyon in depth. Some of the most popular attractions within the park include the South Rim, the North Rim, and the Havasu Falls. Whether you're interested in hiking, rafting, or simply taking in the breathtaking views, the Grand Canyon National Park is a must-visit destination for anyone traveling to Arizona." />

      

   


      
        </div>

    </div>
  );
}

export default Attractions;
