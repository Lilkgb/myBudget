import constants from './../constants';
import * as firebase from 'firebase';
import {store} from './../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

let currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    firebase.database().ref(`users/${user.uid}`).on('value', function(snapshot) {
      store.dispatch(setUserInformation(snapshot.val()))
    })
    store.dispatch(authUserTrue());
    currentUser = user.uid;
  } else {
    store.dispatch(authUserFalse());
    store.dispatch(dumpUserInformation());
  }
})

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const authUserTrue = () => ({
  type: types.AUTH_USER_TRUE
})

export const authUserFalse = () => ({
  type: types.AUTH_USER_FALSE
})

export const setUserInformation = (information) => ({
  type: types.SET_USER_INFORMATION,
  information
})

export const dumpUserInformation = () => ({
  type: types.DUMP_USER_INFORMATION
})