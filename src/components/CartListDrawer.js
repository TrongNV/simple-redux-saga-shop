import React from 'react';
import {AppBar, Avatar, Divider, Drawer, IconButton, List, ListItem, RaisedButton} from "material-ui";
import {connect} from "react-redux";
import {uniqueId} from "lodash";
import {Link} from "react-router-dom";
import {closeCartListDrawer} from "../actionCreators";
import ShopHOC from "./ShopHOC";

const CheckoutButton = ({cartProducts, closeCartListDrawer}) => {
    if(cartProducts.length) {
        return (
            <div style={{position: 'absolute', bottom: "20px", width: "100%"}}>
                <Divider/>
                <br/>
                <Link to="/cart-detail" onClick={closeCartListDrawer}>
                    <RaisedButton  fullWidth={true} label="Checkout" secondary={true} />
                </Link>
            </div>

        )
    } else {
        return (
            <p>Shopping cart is empty</p>
        )
    }
}

const CartListDrawer = ({cartProducts, cartListDrawerOpened = false, closeCartListDrawer}) => {
    return (
        <div>
            <Drawer
                width={450}
                docked={false}
                open={cartListDrawerOpened}
                openSecondary={true}
            >
                <AppBar title="Your cart"
                        showMenuIconButton={false}
                        iconElementRight={<IconButton iconClassName="material-icons"
                                                      onClick={closeCartListDrawer}>close</IconButton>}/>
                <List>
                    {cartProducts.map(({image, title, description, id, price}) => {
                        return (
                            <div key={uniqueId()}>
                                <ListItem
                                    leftAvatar={<Avatar src={image}/>}
                                    primaryText={title}
                                    secondaryText={
                                        <p>
                                            <span>{description}</span>
                                            <br/>
                                            <span style={{fontWeight: 'bold'}}>{price}</span>
                                        </p>
                                    }
                                    secondaryTextLines={2}
                                >
                                </ListItem>
                                <Divider inset={true}/>
                            </div>
                        )
                    })}
                    <CheckoutButton cartProducts={cartProducts} closeCartListDrawer={closeCartListDrawer} />
                </List>

            </Drawer>
        </div>
    );
};

CartListDrawer.propTypes = {};
CartListDrawer.defaultProps = {};

export default ShopHOC(CartListDrawer);
