var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require("cors");

var schema = buildSchema(`
    type Query {
        tech: String,
        name: String,
        age: Number
    }
`);

var root = {
    hello: () => {
        return {
            tech:"reactjs",
            name: "reactjs",
            age: 10,
        };
    }
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQl API server at localhost:4000/graphql');