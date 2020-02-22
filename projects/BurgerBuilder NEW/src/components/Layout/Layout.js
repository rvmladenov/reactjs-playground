import React from 'react';
import Aux from '../../hoc/_Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.css'

const layout = (props) => (
        <Aux> 
            {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
            <Toolbar />
            <main className={classes.Content}>
                <BurgerBuilder />
            </main>
        </Aux>
    );

export default layout;