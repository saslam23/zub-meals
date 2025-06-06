'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
const CutoffCountdown = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isCutoffPassed, setIsCutoffPassed] = useState(false);
  const [cutoffDate, setCutoffDate] = useState<Date | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // Sunday=0 ... Thursday=4 ... Saturday=6

      let target = new Date(now);

      if (dayOfWeek === 5 || dayOfWeek === 6) {
        // Friday or Saturday: cutoff passed
        setIsCutoffPassed(true);
        setTimeLeft('00:00:00');
        setCutoffDate(null);
        return;
      }

      if (dayOfWeek === 0) {
        // Sunday: countdown to this Thursday 11:59 PM
        const daysUntilThursday = (4 - dayOfWeek + 7) % 7;
        target.setDate(now.getDate() + daysUntilThursday);
      } else if (dayOfWeek < 4) {
        // Monday to Wednesday: countdown to this Thursday 11:59 PM
        const daysUntilThursday = 4 - dayOfWeek;
        target.setDate(now.getDate() + daysUntilThursday);
      } else if (dayOfWeek === 4) {
        // Thursday: countdown to today 11:59 PM (same day)
        target = new Date(now);
      }

      target.setHours(23, 59, 0, 0);

      const totalSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);

      if (totalSeconds <= 0) {
        setTimeLeft('00:00:00');
        setIsCutoffPassed(true);
        setCutoffDate(null);
        return;
      }

      setIsCutoffPassed(false);
      setCutoffDate(target);

      const days = Math.floor(totalSeconds / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      // Format all with leading zeros except days
      const hoursStr = String(hours).padStart(2, '0');
      const minutesStr = String(minutes).padStart(2, '0');
      const secondsStr = String(seconds).padStart(2, '0');

      setTimeLeft(
        `${days} day${days !== 1 ? 's' : ''} ` +
        `${hoursStr} hr${hours !== 1 ? 's' : ''} ` +
        `${minutesStr} min${minutes !== 1 ? 's' : ''} ` +
        `${secondsStr} sec${seconds !== 1 ? 's' : ''}`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedCutoffDate = cutoffDate
    ? cutoffDate.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) +
      ' at ' +
      cutoffDate.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    : '';

  return (
    <Card sx={{ margin: '2rem auto', boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        {isCutoffPassed ? (
          <Box textAlign="center" p={2}>
            <Typography variant="h6" color="error" gutterBottom>
              No more orders placed this week will be delivered until the following Sunday.
            </Typography>
            <Typography variant="h4" component="p" sx={{ mt: 2 }}>
              ⏳ 00:00:00
            </Typography>
          </Box>
        ) : (
          <Box textAlign="center" p={2}>
            <Typography variant="h6" gutterBottom>
              Time left to place order for next week:
            </Typography>
            <Typography variant="h4" color="primary" component="p" sx={{mt: 1 }}>
              <TimerIcon/> {timeLeft}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <b>Cutoff:</b> {formattedCutoffDate}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CutoffCountdown;

