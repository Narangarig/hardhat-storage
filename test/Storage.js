const { expect } = require("chai");

describe("Storage contract", function () {
  let Storage;

  beforeEach(async function () {
    Storage = await ethers.getContractFactory("Storage");
    hardhatStorage = await Storage.deploy();
  });

  describe("Deployment", function () {
    it("Should set 1", async function () {
      expect(await hardhatStorage.retrieve()).to.equal(1);
    });
  });

  describe("Setting number to 2", function () {
    it("Should set 2", async function () {
      await hardhatStorage.store(2);
      expect(await hardhatStorage.retrieve()).to.equal(2);
    });
  });
});
