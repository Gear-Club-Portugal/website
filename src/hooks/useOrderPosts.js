const useOrderPosts = (events, invert = false) => {
  let sortedEvents = [...events].sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
  if (invert) sortedEvents = sortedEvents.reverse();

  return sortedEvents;
};

export default useOrderPosts;
