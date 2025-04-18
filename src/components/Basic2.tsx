import { useState } from "react";

type ProductType = {
  id: number;
  name: string;
};

function Basic2() {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  const newProducts = () => {
    setProducts([...products, { id: products.length, name: "hello React" }]);
  };

  return (
    <div>
      <button onClick={newProducts}>Add New Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} id: {product.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basic2;
