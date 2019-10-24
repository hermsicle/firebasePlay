$(document).ready(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyC1bZZnSti_N_lYOLANiP46dfZkHfe0ZAI",
        authDomain: "fir-goodtime-becc.firebaseapp.com",
        databaseURL: "https://fir-goodtime-becc.firebaseio.com",
        projectId: "fir-goodtime-becc",
        storageBucket: "fir-goodtime-becc.appspot.com",
        messagingSenderId: "606609073730",
        appId: "1:606609073730:web:a3f66575f738b10675afdb"
    };
    //Pasted from Firebase site
    firebase.initializeApp(firebaseConfig);

    //Create a variable to hold the database, in this case we will call it db
    const db = firebase.database();
    