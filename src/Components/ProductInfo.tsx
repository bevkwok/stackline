import React, { FC } from 'react';
import ProductImage from '../product_image.jpeg';
import {
  Label,
  Segment,
} from 'semantic-ui-react';

const ProductInfo: FC  = () => (
  <Segment className='product product-info'>
    <div className="product-details">
      <img src={ProductImage} className="product-image" alt="logo" />
      <p className="product-title">Shark Ninja</p>
      <p className="product-description">Magic Bullet NutriBullet 12-Piece</p>
      <p className="product-description">High-Speed Blender/Mixer System</p>
    </div>
    <div className="product-tags">
    <Label basic>Pantry</Label>
    <Label basic>Obsolete</Label>
    <Label basic>Blender</Label>
    <Label basic>Lightning Deal</Label>
    </div>
  </Segment>
);
  
export default ProductInfo;