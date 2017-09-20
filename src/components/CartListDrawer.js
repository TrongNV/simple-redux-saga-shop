import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Avatar, Divider, Drawer, IconButton, List, ListItem, MenuItem, Subheader} from "material-ui";
import {connect} from "react-redux";
import {uniqueId} from "lodash";

const CartListDrawer = ({products, open = false, closeCartListDrawer}) => {
    return (
        <div>
            <Drawer
                width={450}
                docked={false}
                open={open}
                openSecondary={true}
            >
                <AppBar title="Your cart"
                        showMenuIconButton={false}
                        iconElementRight={<IconButton iconClassName="material-icons"
                                                      onClick={closeCartListDrawer}>close</IconButton>}/>
                <List>
                    {products.map(({image, title, description, id, price}) => {
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
                </List>
            </Drawer>
        </div>
    );
};

CartListDrawer.propTypes = {};
CartListDrawer.defaultProps = {};

function mapStateToProps(state) {
    return {
        products: state.cart.products,
        open: state.cart.cartListDrawerOpened
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeCartListDrawer() {
            return dispatch({type: 'CLOSE_CART_LIST_DRAWER'});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartListDrawer);
