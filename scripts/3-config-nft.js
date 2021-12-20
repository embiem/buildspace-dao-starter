import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.DROP_MODULE_ADDRESS ||
  process.env.DROP_MODULE_ADDRESS === ""
) {
  console.log("🛑 DROP_MODULE_ADDRESS not found.");
}

const bundleDrop = sdk.getBundleDropModule(process.env.DROP_MODULE_ADDRESS);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "FitnessDAO Kettlebell",
        description: "This NFT will give you access to FitnessDAO!",
        image: readFileSync("scripts/assets/kettlebell.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
