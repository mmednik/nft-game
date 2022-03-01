const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("SevenLegendaryMonsters");
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
      "https://i.postimg.cc/ZKnMGKL7/teyu-yagua.png",
      "https://i.postimg.cc/NMQNpgMx/mboi-tui.png",
      "https://i.postimg.cc/Hx36Nf81/monai.png",
      "https://i.postimg.cc/L5XxFNjY/yasi-yatere.png",
      "https://i.postimg.cc/tg3S31XT/kurupi.png",
      "https://i.postimg.cc/N0qC28vS/aoao.png",
      "https://i.postimg.cc/52Fkt7T8/lobison.png",
    ],

    [350, 250, 250, 200, 250, 300, 250], // HP values
    [50, 65, 55, 50, 50, 70, 55], // Attack damage values
    [150, 80, 90, 100, 100, 90, 80], // Defense values
    [10, 5, 3, 1, 1, 10, 5], // Critical chance values
    [0, 5, 20, 15, 0, 10, 10], // Evasion chance values
    "Tau",
    "https://i.postimg.cc/dtfxwPHq/tau.png",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(6);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

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