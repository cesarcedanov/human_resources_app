import React from "react";
import { Button, Modal, Form, Input, Icon, DatePicker } from "antd";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import fetchCompanies from "../../queries/fetchCompanies";

const { MonthPicker } = DatePicker;

const CompanyCreateForm = Form.create({ name: "company_create_form" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          centered
          title="Create a new company"
          onCancel={onCancel}
          onOk={onCreate}
          footer={[
            <Button key="back" onClick={onCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={onCreate}>
              Create
            </Button>
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Company Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    trim: true,
                    message: "Company name can't be empty/null!"
                  }
                ]
              })(
                <Input
                  placeholder="Company name"
                  suffix={<Icon type="bank" />}
                />
              )}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "A breif description is required"
                  }
                ]
              })(
                <Input.TextArea
                  placeholder="Description"
                  autosize={{ minRows: 1, maxRows: 5 }}
                />
              )}
            </Form.Item>
            <Form.Item label="Founded">
              {getFieldDecorator("founded", {
                rules: [
                  {
                    required: true,
                    message: "Where it was founded?"
                  }
                ]
              })(<MonthPicker style={{ width: "100%" }} />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator("email")(
                <Input placeholder="Email" suffix={<Icon type="mail" />} />
              )}
            </Form.Item>
            <Form.Item label="phone">
              {getFieldDecorator("phone")(
                <Input placeholder="Phone" suffix={<Icon type="phone" />} />
              )}
            </Form.Item>
            <Form.Item label="Instagram">
              {getFieldDecorator("instagram")(
                <Input
                  placeholder="Instagram"
                  suffix={<Icon type="instagram" />}
                />
              )}
            </Form.Item>
            <Form.Item
              className="company-create-form_last-form-item"
              label="twitter"
            >
              {getFieldDecorator("twitter")(
                <Input placeholder="Twitter" suffix={<Icon type="twitter" />} />
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CompanyCreate extends React.Component {
  state = {
    visible: false,
    loading: false
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
      this.setState({ loading: true });

      const {
        name,
        description,
        founded,
        email,
        phone,
        instagram,
        twitter
      } = formValues;

      this.props.mutate({
        variables: {
          name,
          description,
          founded: founded.format("YYYY-MM"),
          email,
          phone,
          instagram,
          twitter
        },
        refetchQueries: [{ query: fetchCompanies }]
      });
      form.resetFields();
      this.setState({ visible: false, loading: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
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
        <CompanyCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          loading={this.state.loading}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
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

export default graphql(mutation)(CompanyCreate);
