// Node V6 need to be installed beforehand

var { graphql, buildSchema } = require("graphql");

// We need to create a Schema before to start
// we will use buildSchema from graphql package
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// and an API root with a function called a "Resolver" for each API endpoint.
var root = {
    hello: () => {
        return 'Hello World!';
    }
};

// Running a graphql query
graphql(schema, '{ hello }', root).then((res) => {
    console.log(res);
});
