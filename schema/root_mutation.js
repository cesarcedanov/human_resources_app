const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

const mongoose = require("mongoose");
const Company = mongoose.model("company");
const CompanyType = require("./company_type");

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        founded: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        instagram: { type: GraphQLString },
        twitter: { type: GraphQLString }
      },
      resolve(_, args) {
        return new Company(args).save();
      }
    },
    updateCompany: {
      type: CompanyType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        founded: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        instagram: { type: GraphQLString },
        twitter: { type: GraphQLString }
      },
      resolve(_, args) {
        const { id } = args;
        return Company.findOneAndUpdate({ _id: id }, args, { new: true })
          .exec()
          .then(response => response)
          .catch(err => err);
      }
    }
  }
});

module.exports = RootMutation;
