import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    // Set the countdown target date to May 1st of 2024
    const difference = +new Date(`May 11, 2024 00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="font-monserrat font-semibold xs:text-[24px] text-[25px] text-red-600 xs:leading-[40px] leading-[30px] w-full text-center select-none p-1 xs:p-0">
      <div>{timeLeft.days} days {timeLeft.hours} hours</div>
        
        <div>{timeLeft.minutes} minutes {timeLeft.seconds} seconds</div>
        
    </div>
  );
};

export default Countdown;
