import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductImage img={product1.img} className="class custom" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
