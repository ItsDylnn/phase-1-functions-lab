const hq = 42;

const feetPerBlock = 264;

function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - hq);
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
