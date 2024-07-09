const useNextEvents = (events, ammount = 3) => {
  const today = new Date();
  const sortedEvents = events.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

  const upcomingEvents = sortedEvents.filter((event) => new Date(event.eventDate) >= today);
  const pastEvents = sortedEvents.filter((event) => new Date(event.eventDate) < today);

  const sortedPastEvents = pastEvents.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));

  let nextEvents = upcomingEvents.slice(0, ammount);
  if (nextEvents.length < ammount) {
    nextEvents = nextEvents.concat(sortedPastEvents.slice(0, 3 - nextEvents.length));
  }

  return nextEvents;
};

export default useNextEvents;
