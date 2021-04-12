import React from 'react';
import ReactDOM from 'react-dom';

import Framework7 from 'framework7/lite-bundle';
import Framework7React, { App, View } from 'framework7-react';
import './assets/style.css';

Framework7.use(Framework7React);

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseConfig } from './constants/config';
import { f7Params } from './constants/params';
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';

import AuthLogin from './views/auth-login';

const Main = () => {
    return (
        <FirebaseAuthProvider firebase={firebase} {...FirebaseConfig}>
            {
                <App>
                    <View>
                        <div>
                            <IfFirebaseUnAuthed>
                                <AuthLogin />
                            </IfFirebaseUnAuthed>

                            <IfFirebaseAuthed>
                                <h1>YOU ARE LOGGED IN XD</h1>
                            </IfFirebaseAuthed>
                        </div>
                    </View>

                </App>
            }
        </FirebaseAuthProvider>
    )
};

ReactDOM.render(
    <Main />,
    document.querySelector("#app")
);