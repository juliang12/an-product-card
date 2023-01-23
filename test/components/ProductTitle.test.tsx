import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCardHoc } from '../../src/components';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
};

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(<ProductTitle title="custom title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCardHoc product={product1}>
        {() => <ProductTitle />}
      </ProductCardHoc>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
