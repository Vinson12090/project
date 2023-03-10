import './css/Cards.css'


function Card (props) {
    return (
        <div className="card">

          <img src={props.img}  />
          <div className='CardBody'>          
          <h/>{props.title} <h/>
          <p>
            {props.description}
          </p>
          </div>
        </div>
    );
}


export default Card;
