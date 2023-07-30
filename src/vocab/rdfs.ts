const iri = "http://www.w3.org/2000/01/rdf-schema#";

export const RDFS = {
  namespace: {
    iri,
    prefix: "rdfs",
  },
  Class: iri.concat("Class"),
  Container: iri.concat("Container"),
  ContainerMembershipProperty: iri.concat("ContainerMembershipProperty"),
  Datatype: iri.concat("Datatype"),
  Literal: iri.concat("Literal"),
  Resource: iri.concat("Resource"),
  comment: iri.concat("comment"),
  domain: iri.concat("domain"),
  isDefinedBy: iri.concat("isDefinedBy"),
  label: iri.concat("label"),
  member: iri.concat("member"),
  range: iri.concat("range"),
  seeAlso: iri.concat("seeAlso"),
  subClassOf: iri.concat("subClassOf"),
  subPropertyOf: iri.concat("subPropertyOf"),
};
