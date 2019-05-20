import React from 'react';
import { Segment, Grid, Divider, Image, Form, Button  } from 'semantic-ui-react';

const CompanyInfo = () => {
  return(
    <Segment >
      <Grid>
        <Grid.Row>
          <Divider vertical hidden />
          <Grid.Column width={4}>
            <Image
              src="http://cdn.onlinewebfonts.com/svg/img_355049.png" 
              size="medium" 
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <Form>
              <Form.Field>
                <label>Company Name</label>
                <input placeholder='Company Name' value="Google" />
              </Form.Field>
              <Form.Field>
                <label>Since</label>
                <input placeholder='Since' value="2019" />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input placeholder='Description' value="Working hard" />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>Contact Us</Divider>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email' value="test@domain.com" />
                </Form.Field>
                <Form.Field>
                  <label>Phone</label>
                  <input placeholder='Phone' value="(999) 999 9999" />
                </Form.Field>
                <Form.Field>
                  <label>Instagram</label>
                  <input placeholder='Instagram' value="@HumanResourceApp" />
                </Form.Field>
                <Form.Field>
                  <label>Twitter</label>
                  <input placeholder='Twitter' value="@HumanResourceApp" />
                </Form.Field>
              </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
                <Form.Field>
                  <label>Your email</label>
                  <input placeholder='Your email' value="test@domain.com" />
                </Form.Field>
                <Form.Field>
                  <label>Message</label>
                  <input placeholder='Message' value="(999) 999 9999" />
                </Form.Field>
                <Button fluid type='submit'>Submit</Button>
              </Form>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>
  );
};

export default CompanyInfo;