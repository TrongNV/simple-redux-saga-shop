import * as React from "react";
import {Button} from "react-bootstrap";

const ActionButton = ({addProductToCart, removeProductFromCart}, product) => {
    if (addProductToCart) {
        return <Button bsStyle="primary" onClick={() => addProductToCart(product)}>Add to cart</Button>
    } else {
        return <Button bsStyle="danger" onClick={() => removeProductFromCart(product)}>Remove from cart</Button>
    }
}
const ProductList = (props) => {
    const {products} = props;
    return (
        <ul>
            {products.map(product =>
                <li key={product.id}>{product.name}
                    {ActionButton(props, product)}
                </li>
            )}
        </ul>
    );
}


export default ProductList;