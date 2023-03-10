import './css/Homepage.css';
import Canyon from './img/grandcanyon.png';
function Homepage() {
  return (
    <div className="Main">
      <div className='header'> 
        <h1>Homepage</h1>
        <h3>Welcome To Arizona</h3>
        <div className='ImageWrap'>
          <img src={Canyon} alt = "" className='Image'/>
          <h1 className = 'ImageTxt'> 
          Arizona is a popular tourist destination that offers breathtaking natural wonders,
          vibrant cultural experiences, and a variety of outdoor activities for visitors to enjoy
          </h1>
        </div>
      </div>

   


      

    </div>
  );
}

export default Homepage;
