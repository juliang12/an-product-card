# AN-product-card

### Julian Garcia

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle,ProductButtons} from "an-product-card";

```

````

<ProductCard
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
        </ProductCard>

        ```
````
