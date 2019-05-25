import React from "react";
import { List, Card, Icon, Button } from "antd";

class CompanyList extends React.Component {
  state = {
    companies: [
      {
        id: "5ce8ce470bc85c0017d5d0d7",
        name: "Google",
        description:
          "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.",
        instagram: "google",
        twitter: "google"
      },
      {
        id: "5ce8cee00bc85c0017d5d0d8",
        name: "Apple",
        description:
          "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
        instagram: "apple",
        twitter: "apple"
      },
      {
        id: "5ce8cf7a0bc85c0017d5d0d9",
        name: "Facebook",
        description:
          "Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California. It was founded by Mark Zuckerberg.",
        instagram: "facebook",
        twitter: "facebook"
      },
      {
        id: "5ce8cfcb0bc85c0017d5d0da",
        name: "Amazon",
        description:
          "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington that focuses on e-commerce, cloud computing, digital streaming and artificial intelligence.",
        instagram: "amazon",
        twitter: "amazon"
      }
    ]
  };

  onClickSocial = (socialType, term) => {
    switch (socialType) {
      case "instagram":
        window.open(`http://instagram.com/${term}`, "_blank");
        break;
      case "twitter":
        window.open(`http://twitter.com/${term}`, "_blank");
        break;
      default:
        break;
    }
  };

  openGraphiQL = () => {
    window.open("/graphql", "_blank");
  };

  componentDidMount() {
    // TODO
    // Fetch companies
  }

  render() {
    return (
      <>
        <Button
          style={{
            marginBottom: 25
          }}
          onClick={() => this.openGraphiQL()}
          type="primary"
          shape="round"
          icon="plus"
          size="default"
        >
          Add Compnay
        </Button>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3
          }}
          dataSource={this.state.companies}
          renderItem={company => (
            <List.Item>
              <Card
                title={company.name}
                actions={[
                  <Icon
                    type="instagram"
                    onClick={() =>
                      this.onClickSocial("instagram", company.instagram)
                    }
                  />,
                  <Icon
                    type="twitter"
                    onClick={() =>
                      this.onClickSocial("twitter", company.twitter)
                    }
                  />
                ]}
              >
                {company.description}
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default CompanyList;
