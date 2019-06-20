import React from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { withRouter } from "react-router-dom";
import fetchCompanies from "../../queries/fetchCompanies";

import { Descriptions, Divider, Row, Button, Modal } from "antd";

const confirm = Modal.confirm;

class CompanyDetails extends React.Component {
  deleteCompany = id => {
    this.props.mutate({
      variables: {
        id
      },
      refetchQueries: [{ query: fetchCompanies }]
    });
    this.goHome();
  };

  goHome = () => {
    this.props.history.push("/company");
  };

  showDelete = (id, deleteCompany) => {
    confirm({
      title: "Do you want to delete these company?",
      content: `Company Name: ${id}`,
      onOk() {
        console.log(`I should delete the following company: ${id}`);
        deleteCompany(id);
      },
      onCancel() {
        console.log("I wont delete it, chill ");
      }
    });
  };
  render() {
    const { company } = this.props.data;
    if (!company) {
      return "";
    }
    const {
      id,
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
        <Row>
          <Button
            onClick={() => this.showDelete(id, this.deleteCompany)}
            type="danger"
            icon="delete"
          >
            Bankruptcy
          </Button>
        </Row>

        <Divider orientation="left">Company Details</Divider>
        <Descriptions column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
          <Descriptions.Item label="Company name">{name}</Descriptions.Item>
          <Descriptions.Item label="Founded">{founded}</Descriptions.Item>
          <Descriptions.Item label="Description" span={2}>
            {description}
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="left">Contacts</Divider>
        <Descriptions column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
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

        <Divider orientation="left" />
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
      email
      phone
      instagram
      twitter
    }
  }
`;

const mutation = gql`
  mutation DeleteCompany($id: ID) {
    deleteCompany(id: $id) {
      id
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
  }),
  graphql(mutation)
)(withRouter(CompanyDetails));
