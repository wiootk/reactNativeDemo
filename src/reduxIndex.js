import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

import getStore from "./redux/store";
import { AppNavigator } from './router';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

class App extends Component {
    render() {
        return (
            <AppNavigator  navigation={addNavigationHelpers({ dispatch: this.props.dispatch,state: this.props.nav })} />
        );
    }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

export default function Root() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}