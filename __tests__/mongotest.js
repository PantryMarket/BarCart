// MongoClient is a Nodejs library that handles connecting to and interacting
// with a MongoDB database
const { MongoClient } = require("mongodb");

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    // this creates a db in local drive for testing
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    // closes the local drive connection for testing
    await connection.close();
  });

  it("should insert a ingredient into collection", async () => {
    const fridge = db.collection("fridge");

    const mockIngredient = {
      ingredientName: "Test",
      quantity: 3,
      unit: "shots",
    };
    await fridge.insertOne(mockIngredient);

    const insertedIngredient = await fridge.findOne({
      ingredientName: "Test",
    });
    expect(insertedIngredient).toEqual(mockIngredient);
  });

  it("ingredients sent to db should be an object", async () => {
    const fridge = db.collection("fridge");
    const mockIngredient1 = {
      ingredientName: "TestObject",
      quantity: 3,
      unit: "shots",
    };
    const mockIngredient2 = ["Test Insert", 3, "shots"];

    await expect(fridge.insertOne(mockIngredient2)).rejects.toThrow(Error);
  });
});

// describe("insert", () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     // this creates a db in local drive for testing
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     // closes the local drive connection for testing
//     await connection.close();
//   });

//   it("should insert a ingredient into collection", async () => {
//     const fridge = db.collection("fridge");

//     const mockIngredient = {
//       ingredientName: "Test",
//       quantity: 3,
//       unit: "shots",
//     };
//     await fridge.insertOne(mockIngredient);

//     const insertedIngredient = await fridge.findOne({
//       ingredientName: "Test",
//     });
//     expect(insertedIngredient).toEqual(mockIngredient);
//   });
// });

// MongoClient is a Nodejs library that handles connecting to and interacting
// with a MongoDB database
// const { MongoClient } = require("mongodb");

// const Celebrity = require('../models/celebrity.model.js');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
// describe("fridge CRUD methods", () => {
//   let connection;
//   let db;
//   /**
//    * Jest runs the "beforeAll" function once, before any tests are executed.
//    * Here, we write to the file and then reset our database model. Then, we
//    * invoke the "done" callback to tell Jest our async operations have
//    * completed. This way, the tests won't start until the "database" has been
//    * reset to an empty Array!
//    */
//   beforeAll(async () => {
//     // this creates a db in local drive for testing
//     connection = MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     // closes the local drive connection for testing
//     await connection.close();
//   });

//   it("should insert a ingredient into collection", async () => {
//     const fridge = db.collection("fridge");

//     const mockIngredient = {
//       ingredientName: "Test Insert",
//       quantity: 3,
//       unit: "shots",
//     };

//     await fridge.insertOne(mockIngredient);

//     const insertedIngredient = await fridge.findOne({
//       ingredientName: "Test Insert",
//     });
//     expect(insertedIngredient).toEqual(mockIngredient);
//   });

//   xit("ingredients sent to db should be an object", async () => {
//     const fridge = db.collection("fridge");

//     const mockIngredient = ["Test Insert", 3, "shots"];
//     expect(await fridge.insertOne(mockIngredient)).toBeInstanceOf(Error);
//   });

// });
