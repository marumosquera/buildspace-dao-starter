import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x4306E867C514Ab36c73966264839DED3Fb2c8E24", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Gritnova Student",
        description: "This NFT will give you access to GritnovaDAO!",
        image: readFileSync("scripts/assets/gritnovaNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();