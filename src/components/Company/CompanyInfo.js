import React from 'react';
import { Row, Col, Input, Form, Button } from 'antd';


const CompanyInfo = () => {
  return(
    <div>
      <Form>
        <Row justify="center">
          <Col span={6}>
            <img 
              src="http://cdn.onlinewebfonts.com/svg/img_355049.png" style={{width: '250px', height:'auto'}}
            />
          </Col>
          <Col span={18} style={{paddingTop:'5 px'}}>
              <Form.Item label={'Company name:'}>
                <Input placeholder={'company name'} />
              </Form.Item>
              <Form.Item label={'Since:'}>
                <Input placeholder={'since'} />
              </Form.Item>
              <Form.Item label={'Description:'}>
                <Input placeholder={'description'} />
              </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label={"Email"}>
              <Input placeholder={'email'} />
            </Form.Item>
            <Form.Item label={"Phone"}>
              <Input placeholder={'phone'} />
            </Form.Item>
            <Form.Item label={"Instagram"}>
              <Input placeholder={'instagram'} />
            </Form.Item>
            <Form.Item label={"Twitter"}>
              <Input placeholder={'twitter'} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={"Your Email"}>
              <Input placeholder={'your email'} />
            </Form.Item>
            <Form.Item label={"Message"}>
              <Input placeholder={'message'} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" block>Primary</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );

//   <Content style={{ padding: '0 50px', marginTop: 64 }}>
//   <Breadcrumb style={{ margin: '16px 0' }}>
//     <Breadcrumb.Item>Home</Breadcrumb.Item>
//     <Breadcrumb.Item>List</Breadcrumb.Item>
//     <Breadcrumb.Item>App</Breadcrumb.Item>
//   </Breadcrumb>
//   <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
// </Content>
    // <Segment >
    //   <Grid>
    //     <Grid.Row>
    //       <Divider vertical hidden />
    //       <Grid.Column width={4}>
    //         <Image
    //           src="http://cdn.onlinewebfonts.com/svg/img_355049.png" 
    //           size="medium" 
    //         />
    //       </Grid.Column>
    //       <Grid.Column width={12}>
    //         <Form>
    //           <Form.Field>
    //             <label>Company Name</label>
    //             <input placeholder='Company Name' value="Google" />
    //           </Form.Field>
    //           <Form.Field>
    //             <label>Since</label>
    //             <input placeholder='Since' value="2019" />
    //           </Form.Field>
    //           <Form.Field>
    //             <label>Description</label>
    //             <input placeholder='Description' value="Working hard" />
    //           </Form.Field>
    //         </Form>
    //       </Grid.Column>
    //     </Grid.Row>
    //     <Divider horizontal>Contact Us</Divider>
    //     <Grid.Row>
    //       <Grid.Column width={8}>
    //         <Form>
    //             <Form.Field>
    //               <label>Email</label>
    //               <input placeholder='Email' value="test@domain.com" />
    //             </Form.Field>
    //             <Form.Field>
    //               <label>Phone</label>
    //               <input placeholder='Phone' value="(999) 999 9999" />
    //             </Form.Field>
    //             <Form.Field>
    //               <label>Instagram</label>
    //               <input placeholder='Instagram' value="@HumanResourceApp" />
    //             </Form.Field>
    //             <Form.Field>
    //               <label>Twitter</label>
    //               <input placeholder='Twitter' value="@HumanResourceApp" />
    //             </Form.Field>
    //           </Form>
    //       </Grid.Column>
    //       <Grid.Column width={8}>
    //         <Form>
    //             <Form.Field>
    //               <label>Your email</label>
    //               <input placeholder='Your email' value="test@domain.com" />
    //             </Form.Field>
    //             <Form.Field>
    //               <label>Message</label>
    //               <input placeholder='Message' value="(999) 999 9999" />
    //             </Form.Field>
    //             <Button fluid type='submit'>Submit</Button>
    //           </Form>
    //       </Grid.Column>
    //     </Grid.Row>
        
    //   </Grid>
    // </Segment>
};

export default CompanyInfo;