import { useEffect, useState } from 'react';

const CountDownTimer = ({ days, hours, minutes, seconds }) => {
    const countDownDate = new Date("Jun 12, 2023 00:00:00").getTime();
    const [timeObject, setTimeObject] = useState({
      days: days || 0,
      hours: hours || 0,
      minutes: minutes || 0,
      seconds: seconds || 0,
    });
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
  
        const updatedDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const updatedHours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const updatedMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const updatedSeconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        setTimeObject({ days: updatedDays, hours: updatedHours, minutes: updatedMinutes, seconds: updatedSeconds });
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [countDownDate]);
  
  // Rest of your component code
  
}

export default CountDownTimer;
