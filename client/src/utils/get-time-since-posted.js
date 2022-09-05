const getTimeSincePosted = (timePosted) => {
  const createdAtTimestamp = new Date(timePosted).getTime();
  const timeDiff = Date.now() - createdAtTimestamp;

  let timeSinceCreated;
  let converted;

  switch (true) {
    case (timeDiff < 3600000):
      timeSinceCreated = Math.floor((timeDiff / 1000) / 60);
      converted = `${timeSinceCreated} minutes ago`;
      break;
    case (timeDiff >= 3600000 && timeDiff < 86400000):
      timeSinceCreated = Math.floor(((timeDiff / 1000) / 3600));
      converted = `${timeSinceCreated} hours ago`;
      break;
    case (timeDiff >= 86400000 && timeDiff < 604800000):
      timeSinceCreated = Math.floor(((timeDiff / 1000) / 86400));
      converted = `${timeSinceCreated} days ago`;
      break;
    case (timeDiff >= 604800000 && timeDiff < 2714400000):
      timeSinceCreated = Math.floor(((timeDiff / 1000) / 604800));
      converted = `${timeSinceCreated} weeks ago`;
      break;
    case (timeDiff >= 2714400000 && timeDiff < 31540000000):
      timeSinceCreated = Math.floor(((timeDiff / 1000) / 2630880));
      converted = `${timeSinceCreated} months ago`;
      break;
    default:
      console.log('There was a problem converting the time');
  }

  return converted;
};

export default getTimeSincePosted;
