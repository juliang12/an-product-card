import React, { useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImg from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';

export interface ProductImageProps {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img, className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImg;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt=""
    />
  );
};
