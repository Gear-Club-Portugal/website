import { useMemo } from 'react';

const useOrderEvents = (events, invert = false) =>
  useMemo(() => {
    const sorted = [...events].sort((a, b) => {
      const diff = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();

      if (diff !== 0) return diff;
      return a.slug.localeCompare(b.slug);
    });

    return invert ? sorted.reverse() : sorted;
  }, [events, invert]);

export default useOrderEvents;
