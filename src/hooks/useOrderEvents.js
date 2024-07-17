const useOrderPosts = (posts, invert = false) => {
  let sortedPosts = [...posts].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
  if (invert) sortedPosts = sortedPosts.reverse();

  return sortedPosts;
};

export default useOrderPosts;
``;
