import './css/Restaurants.css';
import Card from './Cards';
import Food from './img/Resturantcover.png';
import FnB from './img/FnB.png';
import cafe from './img/cafemonarch.png';


function Restaurants() {
  return (
    <div className="Main">
       <div className='Resturantheader'> 
        <h1>Restaurants</h1>
        <h3>See what the best of Arizona has to offer to fill your stomache!</h3>
      </div>
      <div className='ImageWrapCover'>
          <img src={Food} alt = "" className='Image'/>
          <h1 className = 'ImageTxt'> 
          Arizona has a unique culinary scene that reflects its diverse population and rich cultural heritage. The state is known for its Southwestern cuisine, which combines Native American, Mexican, and Spanish influences. One iconic dish is the Sonoran hot dog, which is a bacon-wrapped hot dog topped with beans, onions, tomatoes, and jalapeño salsa. Another popular dish is green chili, which is made with pork or chicken and a spicy green chili sauce. Arizona also has a thriving farm-to-table movement, with many restaurants using locally sourced ingredients such as mesquite flour, prickly pear cactus fruit, and agave nectar. Overall, food in Arizona offers a delicious and unique blend of flavors and traditions.
          </h1>
        </div>
        <div className='header'> 
        <h3>FnB Restaurant</h3>
        </div>
        <div className="boxes">
        
        <Card img={FnB} title = "FnB"description="FnB is a highly acclaimed restaurant located in Scottsdale, Arizona that has gained a reputation for its exceptional farm-to-table cuisine and inventive use of local ingredients. The restaurant was opened in 2009 by chef Charleen Badman and front-of-house veteran Pavle Milic, who set out to create a dining experience that celebrates the bounty of Arizona's agricultural landscape. The menu at FnB is constantly evolving to showcase the freshest seasonal produce available, with dishes that highlight the flavors and textures of the ingredients. Some of the restaurant's signature dishes include the roasted carrots with hazelnut dukkah and yogurt, the braised leeks with romesco sauce and manchego cheese, and the grilled squid with chorizo and fennel. FnB also boasts an impressive wine list that features many small-production and natural wines from around the world, curated by Milic himself. The restaurant's cozy and intimate atmosphere, coupled with its commitment to sustainability and locally sourced ingredients, has made it a favorite among both locals and visitors to the area." />
        <div className='header'> 
        <h3>Cafe Monarch</h3>
        </div>
        <Card img={cafe} title = "Cafe Monarch" description="Café Monarch is an upscale fine-dining restaurant located in the heart of Old Town Scottsdale, Arizona. The restaurant is housed in a charming historic home and offers an intimate and romantic atmosphere for guests. The menu features a four-course prix fixe dinner with a focus on French and American cuisine, and each course is carefully crafted with seasonal and locally sourced ingredients. Dishes are beautifully presented and often include luxurious ingredients such as foie gras, truffles, and caviar. Café Monarch also offers an extensive wine list with a wide range of varietals and regions to choose from. The restaurant's attention to detail and commitment to impeccable service has earned it numerous accolades, including a AAA Four Diamond rating and recognition as one of OpenTable's Top 100 Restaurants in America. Overall, Café Monarch offers a truly special dining experience that is perfect for special occasions or a romantic night out." />

        </div>

    </div>
  );
}

export default Restaurants;
