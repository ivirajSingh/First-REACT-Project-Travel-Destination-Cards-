import {useState} from "react";

function Card({id, image, info, price, name, removeTour}){
    const [readMore, setReadMore] = useState(false);

    const description = readMore ? info : `${info.substring(0,200)}....`;
    function readmorehandler(){
        setReadMore(!readMore);
    }


    return(
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="desc">{description}
                    <span className="read-more" onClick={readmorehandler}>
                        {readMore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
           
            <button className="btn" onClick={()=> removeTour(id)}>Not Intrusted</button>
        </div>
        
    )
};

export default Card;