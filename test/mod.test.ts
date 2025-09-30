import * as utils from "../src/mod.js";

it("exports the HTTP constants", () => {
  expect(utils.HTTP).toBeDefined();
});

it("exports the algorithms", () => {
  expect(utils.fetchTurtle).toBeDefined();
});

it("exports the vocabs", () => {
  expect(utils.VOCAB.RDF).toBeDefined();
  expect(utils.VOCAB.RDFS).toBeDefined();
  expect(utils.VOCAB.OWL).toBeDefined();
  expect(utils.VOCAB.XSD).toBeDefined();
});
