const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

async function loadSnapshot(dir = __dirname) {
  let stakers = [];
  //
  const coreShots = await csv().fromFile(path.join(dir, 'PoSstakerSnapshot.csv'));
  stakers = stakers.concat(coreShots.map(item => ({
    address: item.address,
    mirrorAddress: item.mirrorAddress,
    votes: parseInt(item.votes),
    available: parseInt(item.available),
    poolAddress: item.poolAddress,
  })));
  //
  const eSpaceShots = await csv().fromFile(path.join(dir, 'espacePoSstakerSnapshot.csv'));
  stakers = stakers.concat(eSpaceShots.map(item => ({
    address: item.address,
    mirrorAddress: item.address,
    votes: parseInt(item.votes),
    available: parseInt(item.available),
    poolAddress: item.pool,
  })));
  //
  return stakers;
}

module.exports = {
  loadSnapshot,
  makeShot: require('./snapshotPoSPool'),
};
