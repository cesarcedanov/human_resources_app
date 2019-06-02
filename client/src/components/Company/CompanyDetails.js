import React from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

import { Descriptions } from "antd";

class CompanyDetails extends React.Component {
  render() {
    const { company } = this.props.data;
    if (!company) {
      return "";
    }
    const {
      name,
      description,
      founded,
      email,
      phone,
      instagram,
      twitter
    } = company;
    return (
      <div>
        <Descriptions
          title="Company Details"
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label="Company name">{name}</Descriptions.Item>
          <Descriptions.Item label="Founded">{founded}</Descriptions.Item>
          <Descriptions.Item label="Description" span={2}>
            {description}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions
          title="Contacts"
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
          <Descriptions.Item label="Instagram">
            <a
              href={`http://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {instagram}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Twitter">
            <a
              href={`http://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {twitter}
            </a>
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

const _FETCH_COMPANY = gql`
  query FetchCompany($id: ID!) {
    company(id: $id) {
      id
      name
      description
      founded
      instagram
      twitter
    }
  }
`;
export default compose(
  graphql(_FETCH_COMPANY, {
    options: props => {
      return {
        variables: { id: props.match.params.id }
      };
    }
  })
)(CompanyDetails);
