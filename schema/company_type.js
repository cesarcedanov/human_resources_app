const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'CompanyType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    founded: { type: GraphQLInt },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    instagram: { type: GraphQLString },
    twitter: { type: GraphQLString },
  })
});

module.exports = CompanyType;