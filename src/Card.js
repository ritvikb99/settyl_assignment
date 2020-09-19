import React from 'react';


const Card = (props) =>{
    const {name, id, email} = props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?100x100`} alt="lol" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;