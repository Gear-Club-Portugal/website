import { useMemo } from 'react';

const useNextEvents = (events, amount = 3) =>
  useMemo(() => {
    const today = new Date();
    const sorted = [...events].sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

    const upcoming = sorted.filter((e) => new Date(e.eventDate) >= today);
    const past = sorted.filter((e) => new Date(e.eventDate) < today).reverse();

    const next = upcoming.slice(0, amount);
    if (next.length < amount) {
      return next.concat(past.slice(0, amount - next.length));
    }

    return next;
  }, [events, amount]);

export default useNextEvents;
