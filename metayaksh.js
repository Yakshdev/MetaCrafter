let nfts = [];

let mintNFT = (name, information) => {
  let nft = {
    name: name,
    description: information,
  };
  nfts.push(nft);
};

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
let listNFTs = () => {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
  }
};

// print the total number of NFTs we have minted to the console
let getTotalSupply = () => {
  console.log("Number of NFTs: " + nfts.length);
};

// call your functions below this line
mintNFT("first", "first nft");
mintNFT("second", "Second nft");

listNFTs();
getTotalSupply();