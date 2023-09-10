import React from 'react';
import Card from './Card'; // Import your Card component

const CardList = () => {
  const cardsData = [
    {
      title: 'FullStack Developer | Beginner(2022 - Present)',
      explanation:<ul>
                <li>Strong understanding of web design principles and user experience design</li>
                <li>Ability to create better UI using HTML,CSS</li>
                <li>Started Working on ReactJS and NodeJS Projects</li>
              </ul> 
    },
    {
      title: 'Software Engineer Associate | LTTS(2022-2023)',
      explanation: <ul>
      <li>Strong understanding of Data Structures and Algorithms</li>
      <li>Ability to Learn new things quickly</li>
      <li>Worked with team members and leads to improvise the development process bye creating daily goals</li>
    </ul> 
    },
    // Add more card data as needed
  ];

  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <Card
          key={index} // Make sure to provide a unique key
          title={card.title}
          explanation={card.explanation}
        />
      ))}
    </div>
  );
};

export default CardList;
