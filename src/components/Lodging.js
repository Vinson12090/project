import './css/Lodging.css';
import Hotel1 from './img/Hotels1.png'
import Sedona from './img/sedonahotel.png'




function Lodging() {
  return (
    <div className='main'>
      <div className='header'> 
        <h1>Lodging</h1>
        <h3>See what the best of Arizona has to offer for your stay!</h3>
      </div>
      <div className ='Cont'>
      <div className='header'> 

        <h3>Radisson Hotel Phoenix Airport</h3>
      </div>
      <img src={Hotel1} alt=" " className='HotelImage' />
          <h3 className = 'Des'>
          The Radisson Hotel Phoenix Airport is a modern and comfortable hotel located near Phoenix Sky Harbor International Airport in Arizona. One of the benefits of staying at this hotel is its convenient location, which is perfect for travelers who need to catch a flight or have a layover in Phoenix. The hotel also offers a complimentary shuttle service to and from the airport.

In addition to its location, the Radisson Hotel Phoenix Airport offers a range of amenities, including a fitness center, outdoor pool, and hot tub. The hotel also has a restaurant and bar, making it easy for guests to grab a meal or a drink without leaving the premises. The hotel's rooms are spacious and well-appointed, with comfortable beds, modern decor, and all the necessary amenities, such as free Wi-Fi, flat-screen TVs, and coffee makers.

As for the cost, room rates at the Radisson Hotel Phoenix Airport vary depending on the season and room type. Generally, prices range from $100 to $150 per night, although prices can be higher during peak travel times.

The hotel has generally positive ratings on various travel websites, with an average score of around 8 out of 10. Guests praise the hotel's convenient location, friendly staff, and comfortable rooms. Some guests note that the hotel's proximity to the airport can result in some noise, but overall, the Radisson Hotel Phoenix Airport is a solid choice for travelers looking for a comfortable and convenient place to stay in Phoenix.

          </h3>
          
      </div>
      <div className ='Cont'>
      <div className='header'> 

<h3>Courtyard by Marriott Scottsdale Salt River</h3>
</div>
      <img src={Sedona} alt=" " className='HotelImage' />
      
          <h3 className = 'Des'>
          The Courtyard by Marriott Scottsdale Salt River is a contemporary hotel located in Scottsdale, Arizona. One of the main benefits of staying at this hotel is its proximity to popular attractions, such as Salt River Fields at Talking Stick and Old Town Scottsdale. The hotel offers a complimentary shuttle service to these destinations, as well as to the nearby casino.

In addition to its location, the Courtyard by Marriott Scottsdale Salt River offers various amenities, including a fitness center, outdoor pool, and fire pit. The hotel also has a restaurant, bar, and market, providing guests with plenty of options for meals and snacks. The hotel's rooms are modern and comfortable, with free Wi-Fi, flat-screen TVs, and mini-fridges.

As for the cost, room rates at the Courtyard by Marriott Scottsdale Salt River range from $100 to $200 per night, depending on the season and room type. Some guests may find the prices a bit steep, but the hotel's convenient location and range of amenities make it a worthwhile investment for many travelers.

The hotel has generally positive ratings on travel websites, with an average score of around 8.5 out of 10. Guests appreciate the hotel's friendly staff, clean and comfortable rooms, and convenient location. Some guests note that the hotel is a bit isolated and that some rooms may have noise from nearby construction, but overall, the Courtyard by Marriott Scottsdale Salt River is a great option for visitors to the Scottsdale area.

          </h3>
          
      </div>



    </div>
  );
}

export default Lodging;
