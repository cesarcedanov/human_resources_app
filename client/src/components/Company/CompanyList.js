import React from "react";
import { graphql } from "react-apollo";
import { List, Card, Icon } from "antd";

import CompanyCreate from "./CompanyCreate";
import fetchCompanies from "../../queries/fetchCompanies";

class CompanyList extends React.Component {
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
        <CompanyCreate />
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4
          }}
          dataSource={this.props.data.companies}
          renderItem={company => (
            <List.Item>
              <Card
                hoverable
                title={company.name}
                actions={this.renderActions(company)}
              >
                {company.description}
                {company.founded}
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default graphql(fetchCompanies)(CompanyList);
