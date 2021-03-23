import React from 'react';
import Card from './Card';

const CardsList = ({ users }) => {
  let cardsArray = users.map((user) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        username={user.username}
        phone={user.phone}
        website={user.website}
      />
    );
  });
  return cardsArray;
};

export default CardsList;
