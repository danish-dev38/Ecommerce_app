import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BredCrums from '../Components/BredCrums/BredCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts'



const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // productId string hota hai, isliye type match karna zaroori hai
  const product = all_product.find((e) => String(e.id) === String(productId));

  return (
    <div>
      {product && <BredCrums product={product} />}
      {product && <ProductDisplay product={product} />}
      {product && <Description/>}
      <RelatedProducts/>
    </div>
  );
};

export default Product;


