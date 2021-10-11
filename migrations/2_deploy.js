const TimelockController = artifacts.require("TimelockController");

module.exports = async function (deployer) {
  await deployer.deploy(TimelockController);
  
};
