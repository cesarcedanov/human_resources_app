import React from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { List, Card, Icon, Button, Row, Col, Typography } from "antd";

import CompanyCreate from "./CompanyCreate";
import fetchCompanies from "../../queries/fetchCompanies";

class CompanyList extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, formValues) => {
      if (err) {
        return;
      }
      this.props.mutate({
        variables: {
          ...formValues,
          founded: formValues.founded.format("YYYY-MM")
        },
        refetchQueries: [{ query: fetchCompanies }]
      });
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  getActionBtn = (socialType, term) => {
    return (
      <Icon
        type={socialType}
        onClick={() =>
          window.open(`http://${socialType}.com/${term}`, "_blank")
        }
      />
    );
  };

  openCompanyDetails = companyId => {
    this.props.history.push(`/company/${companyId}`);
  };

  renderActions = company => {
    let actions = [];
    if (company.instagram) {
      actions.push(this.getActionBtn("instagram", company.instagram));
    }

    if (company.twitter) {
      actions.push(this.getActionBtn("twitter", company.twitter));
    }

    return actions.length < 1
      ? [<span>No social attached to this company</span>]
      : actions;
  };

  render() {
    return (
      <>
        <Button
          style={{
            marginBottom: 25
          }}
          onClick={this.showModal}
          type="primary"
          shape="round"
          icon="plus"
          size="default"
        >
          Add Company
        </Button>
        <CompanyCreate
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 4
          }}
          dataSource={this.props.data.companies}
          renderItem={company => (
            <List.Item id={company.id}>
              <Card
                hoverable
                title={
                  <Row onClick={() => this.openCompanyDetails(company.id)}>
                    <Col span={16}>{company.name}</Col>
                    <Col span={6} offset={2}>
                      <Typography.Text type="secondary">
                        {company.founded}
                      </Typography.Text>
                    </Col>
                  </Row>
                }
                actions={this.renderActions(company)}
              >
                <Typography.Paragraph ellipsis={{ rows: 3, expandable: true }}>
                  {company.description}
                </Typography.Paragraph>
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  }
}

const mutation = gql`
  mutation AddCompany(
    $name: String
    $description: String
    $founded: String
    $email: String
    $phone: String
    $instagram: String
    $twitter: String
  ) {
    addCompany(
      name: $name
      description: $description
      founded: $founded
      email: $email
      phone: $phone
      instagram: $instagram
      twitter: $twitter
    ) {
      id
      name
    }
  }
`;

export default compose(
  graphql(fetchCompanies),
  graphql(mutation)
)(withRouter(CompanyList));
