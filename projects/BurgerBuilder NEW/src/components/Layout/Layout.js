import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import classes from './Layout.css'

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    render () {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    };
}
        

export default Layout;