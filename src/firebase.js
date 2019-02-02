
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDCuPHMIZmHO07IzGz2eyDuyO7modYCKGY",
   authDomain: "project-153f0.firebaseapp.com",
   databaseURL: "https://project-153f0.firebaseio.com",
   projectId: "project-153f0",
   storageBucket: "project-153f0.appspot.com",
   messagingSenderId: "149322799951"
};
export  const firebaseApp = firebase.initializeApp(config);
export const projectRef= firebase.database().ref('projects');
export const completeProjectRef=firebase.database().ref('completeProjects');
export const customerRef= firebase.database().ref('customers');
