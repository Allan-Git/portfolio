import "./productList.css"
import Product from "../product/Product.jsx"
import {products} from "../../data.js"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Créer & Inspirer.</h1>
          <p className="pl-desc">
          Voici quelques unes de mes créations. Ensemble, nous pouvons créer de magnifiques projets
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
      </div>
  );
};

export default ProductList