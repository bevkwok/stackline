import React from 'react';
import { ReactComponent as Logo } from './stackline_logo.svg';
import {
  Container,
  Grid,
  Menu,
  Segment,
} from 'semantic-ui-react';
import ProductInfo from './Components/ProductInfo';
import ProductSalesChart from './Components/ProductSalesChart';

const Layout = () => (
  <div className='main-layout'>
    <Menu fixed='top' className='navbar'>
      <Logo className='stackline-logo' />
    </Menu>
    <Container className='container-body'>
      <Grid>
        <Grid.Row>
          <Grid.Column className='product-info-column' width={4}>
            <ProductInfo />
          </Grid.Column>
          <Grid.Column className='product-sales-column' width={12}>
            <Segment className='product product-chart'>
              <p>Retail Sales</p>
              <ProductSalesChart />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);
  
export default Layout