import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCardHoc } from '../../src/components';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
};

const { act } = renderer;

describe('PrductCard', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCardHoc product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCardHoc>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contado', () => {
    const wrapper = renderer.create(
      <ProductCardHoc product={product1}>
        {({ counter, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{counter}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCardHoc>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
