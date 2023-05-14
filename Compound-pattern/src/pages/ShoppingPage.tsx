import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';


const product = { 
  id: '1',
  title: 'Coffee Mug',
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

          <ProductCard product={ product }>
            <ProductCard.Title title="hola"/>
            <Product.Image image="https://picsum.photos/200/300" title="hola"/>
          </ProductCard>
          
        </div>
    </div>
  )
}