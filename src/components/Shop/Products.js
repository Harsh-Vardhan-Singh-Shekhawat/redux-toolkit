import ProductItem from './ProductItem';
import classes from './Products.module.css';
const data = [
  { id:'m1',
    price:160,
    title:'Margherita',
    description:'This is the best pizza that you will ever have'
  },
  { id:'m2',
    price:200,
    title:'Paneer Butter Masala',
    description:'tastes like home made'
  },{
    id:'m3',
    price:255,
    title:'Crispy Chicken',
    description:'Burger with NV meals'
  },{
    id:'m4',
    price:95,
    title:'American Corn Pizza',
    description:'Corn spread all over it.'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {data.map(product =>( <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
