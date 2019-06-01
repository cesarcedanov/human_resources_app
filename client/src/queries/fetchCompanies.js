import gql from "graphql-tag";

export default gql`
  query {
    companies {
      id
      name
      description
      instagram
      twitter
    }
  }
`;
