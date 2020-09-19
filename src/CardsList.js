import React from 'react';
import Card from './Card';

const CardsList = ({robots})=>{
    let cardsArray = robots.map((user)=>{
        return(
            <Card key={user.id} id={user.id} name = {user.name} email={user.email} />
        );
    });
    return(cardsArray);
}

export default CardsList