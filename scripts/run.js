const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory(
    "SevenLegendaryMonsters"
  );
  const gameContract = await gameContractFactory.deploy(
    // Names
    [
      "Teyú Yaguá",
      "Mbói Tu'i",
      "Moñái",
      "Yasy Yateré",
      "Kurupí",
      "Ao Ao",
      "Lobisón",
    ], 

    // Images
    [
      "https://i.imgur.com/pKd5Sdk.png",
      "https://i.imgur.com/xVu4vFL.png",
      "https://i.imgur.com/WMB6g9u.png",
    ],

    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    [100, 50, 25], // Defense values
    [100, 50, 25] // Critical chance values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
