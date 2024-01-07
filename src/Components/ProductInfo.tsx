import React, { FC } from 'react';
import ProductImage from '../product_image.jpeg';
import {
  Label,
  Segment,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ProductInfo: FC  = () => {
  const { products } = useSelector((state: RootState) => state.product);
  const currentProduct = products?.[0];

  return (
    <Segment className='product product-info'>
      <div className="product-details">
        <img src={ProductImage} className="product-image" alt="logo" />
        <p className="product-title">{currentProduct?.title}</p>
        <p className="product-description">Magic Bullet NutriBullet 12-Piece</p>
        <p className="product-description">High-Speed Blender/Mixer System</p>
      </div>
      <div className="product-tags">
        {currentProduct?.tags?.map((tag: string)=> <Label basic>{tag}</Label>)}
      </div>
    </Segment>
  );
};
  
export default ProductInfo;