import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    { title: 'Iphone', price: 10, description: 'test description', id: 1 },
    { title: 'IPad', price: 20, description: 'test description', id: 2},
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
