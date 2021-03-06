import React, { useState } from 'react';
const useApp = () => {
  const [res, setRes] = useState([
    {
      Player_Cards: ['10', '7'],
      Banker_Cards: ['4', '2', '10'],
      Banker_Score: 6,
      Player_Score: 7,
      Results: 'Player wins',
      Predict: 'Player wins',
    },
    {
      Banker_Cards: ['6', '7'],
      Player_Cards: ['2', '9'],
      Banker_Score: 3,
      Player_Score: 1,
      Results: 'Banker wins',
      Predict: 'Player wins',
    },
    {
      Banker_Cards: ['J', '5', '10'],
      Player_Cards: ['7', 'Q', '9'],
      Banker_Score: 5,
      Player_Score: 6,
      Results: 'Player wins',
      Predict: 0,
    },
    {
      Banker_Cards: ['5', 'J', '10'],
      Player_Cards: ['2', '8'],
      Banker_Score: 5,
      Player_Score: 0,
      Results: 'Banker wins',
      Predict: 'Banker wins',
    },
    {
      Banker_Cards: ['K', '4'],
      Player_Cards: ['3', '2', '2'],
      Banker_Score: 4,
      Player_Score: 7,
      Results: 'Player wins',
      Predict: 'Player wins',
    },
    {
      Banker_Cards: ['2', 'K', 'Q'],
      Player_Cards: ['5', 'A'],
      Banker_Score: 2,
      Player_Score: 6,
      Results: 'Player wins',
      Predict: 'Player wins',
    },
    {
      Player_Cards: ['2', '6', '9'],
      Banker_Cards: ['6', 'J'],
      Banker_Score: 6,
      Player_Score: 7,
      Results: 'Player wins',
      Predict: 'Tier',
    },
  ]);
  const [predict, setPredict] = useState([
    {
      Predict: "Player wins",
      Banker: 52,
      Player: 48,
      Tier: 0
      },
    {
      Predict: 'Player wins',
      Banker: 65,
      Player: 27,
      Tier: 8,
    },
    {
      Predict: 'Banker wins',
      Banker: 50,
      Player: 40,
      Tier: 10,
    },
    {
      Predict: 'Player wins',
      Banker: 20,
      Player: 70,
      Tier: 10,
    },
    {
      Predict: 'Player wins',
      Banker: 45,
      Player: 50,
      Tier: 5,
    },
    {
      Predict: 'Player wins',
      Banker: 35,
      Player: 60,
      Tier: 5,
    },
    {
      Predict: 'Banker wins',
      Banker: 48,
      Player: 44,
      Tier: 8,
    },
  ]);
  return {
    res,
    predict,
  };
};
export default useApp;
