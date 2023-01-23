import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCardHoc,
  ProductImage,
  ProductButtons,
  ProductTitle,
} from '../.';

const product = {
  id: '1',
  title: 'Coffee Mud',
};

const App = () => {
  return (
    <>
      <ProductCardHoc
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, counter, isMaxCounterReached }) => (
          <>
            <ProductTitle />
            <ProductImage />
            <ProductButtons />
          </>
        )}
      </ProductCardHoc>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
