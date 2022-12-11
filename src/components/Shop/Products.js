import ProductItem from './ProductItem';
import classes from './Products.module.css';
const data = [
  {
    price:150,
    title:'my first book',
    description:'This is the first book written by me.'
  },
  {
    price:200,
    title:'my second book',
    description:'This is the second book written by me.'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {data.map(product =>( <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
