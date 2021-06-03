import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const HeaderModule:React.FC = () => {

    return (
            <AppBar position="static">
                <Toolbar>
                    GlobalSearch
                </Toolbar>
            </AppBar>
    );
};

export default HeaderModule;