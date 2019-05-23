const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = graphql

const mongoose = require('mongoose');
const Company = mongoose.model('company');
const CompanyType = require('./company_type');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addCompany: {
      type: CompanyType,
      args: {    
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        founded: { type: GraphQLInt },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        instagram: { type: GraphQLString },
        twitter: { type: GraphQLString }
      },
      resolve(parentValue, { name, email }) {
        return (new Company({ name, email })).save()
      }
    }
  }
});

module.exports = RootMutation;