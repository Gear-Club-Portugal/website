import { useMemo } from 'react';

const useOrderPosts = (posts, invert = false) =>
  useMemo(() => {
    const sorted = [...posts].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    return invert ? sorted.reverse() : sorted;
  }, [posts, invert]);

export default useOrderPosts;
