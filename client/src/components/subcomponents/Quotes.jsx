import React from 'react';

const Quotes = () => {
  const quoteArray = [
    'LIFE HAS ITS UPS AND DOWNS. WE CALL THEM SQUATS',
    'I GOT 99 PROBLEMS, BUT I\'M GOING TO THE GYM TO IGNORE ALL OF THEM',
    'I\'M SORRY FOR WHAT I SAID DURING BURPEES',
    'I ONLY WORK OUT BECAUSE I REALLY, REALLY LIKE DONUTS',
    'UNLESS YOU PUKE, FAINT, OR DIE, KEEP GOING!',
    'YOU MAKE MY KNEES WEAK. JUST KIDDING. YESTERDAY WAS LEG DAY',
    'IT\'S MY WORKOUT. I CAN CRY IF I WANT TO',
    'HUSTLE FOR THAT MUSCLE',
    'EAT CLEAN, STAY FIT, AND HAVE A BURGER TO STAY SANE',
    'WEIGHTS BEFORE DATES',
    'I LIKE BIG WEIGHTS AND I CANNOT LIE',
    'SWEAT IS YOUR FAT CRYING',
    'LIFE IS SHORT. LIFT HEAVY THINGS',
    'PAIN IS WEAKNESS LEAVING THE BODY',
    'THE ONLY BS I NEED IN MY LIFE IS BREAKFAST AND SQUATS',
    'IF ONLY SARCASM BURNED CALORIES',
    'BE SMART, EAT SMART',
    'THE GREATEST WEALTH IS HEALTH',
    'WOOOOOOOOOO!!!!'
  ];
  return quoteArray[Math.floor(Math.random() * quoteArray.length)];

  return (
    <h1 className="welcome">{randomQuote()}</h1>
  );
};

export default Quotes;