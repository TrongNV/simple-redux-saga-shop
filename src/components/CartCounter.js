import React from 'react';
import {FlatButton} from "material-ui";
import {sortBy} from "lodash";
import ShopHOC from "./ShopHOC";

const CartCounter = ({cartProductsCount, openCartListDrawer}) => {
    return (
        <div>
            <FlatButton onClick={openCartListDrawer}>
                <h4>
                    <i className="glyphicon glyphicon-shopping-cart">&nbsp;</i>
                    <span className="badge" style={{background: 'rgb(255, 64, 129)'}}>{cartProductsCount}</span>
                </h4>
            </FlatButton>
        </div>
    );
};

CartCounter.propTypes = {};
CartCounter.defaultProps = {};

export default ShopHOC(CartCounter);
