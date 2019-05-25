const mongoose = require('mongoose');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = graphql;

const CompanyType = require('./company_type');
const Company = mongoose.model('company');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    companies: {
      type: GraphQLList(CompanyType),
      resolve() {
        return Company.find({});
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parentValue, {id} ){
        return Company.findById(id);
      }
    }
  })
});

module.exports = RootQuery;