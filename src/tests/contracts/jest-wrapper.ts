import globalAny from "./setup";

beforeAll((done) => {
  globalAny.provider.setup().then(() => done());
});

afterAll((done) => {
  globalAny.provider.finalize().then(() => done());
});
