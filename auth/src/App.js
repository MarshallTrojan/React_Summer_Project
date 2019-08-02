import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import  LoginForm  from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyCC8Q2qYBFYb3kcqAByvO_RMDREAOcF5iE',
            authDomain: 'authentication-92961.firebaseapp.com',
            databaseURL: 'https://authentication-92961.firebaseio.com',
            projectId: 'authentication-92961',
            storageBucket: '',
            messagingSenderId: '304376654183',
            appId: '1:304376654183:web:165b681bd484d6b1'});

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn){
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }


    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View>
        );
    }
}

export default App;
