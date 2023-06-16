const firebaseConfig = {
    apiKey: "AIzaSyAClDFRlX5tD9enkdBQ2JMjSWTXn5BAVFE",
    authDomain: "dentlab-ads.firebaseapp.com",
    projectId: "dentlab-ads",
    storageBucket: "dentlab-ads.appspot.com",
    messagingSenderId: "3534782351",
    appId: "1:3534782351:web:88043cc1bcd8c6945b15fa",
    measurementId: "G-Y0H7FW4XY0"
};
//Inicializa meu site com o firebase
firebase.initializeApp(firebaseConfig);

//Cria o objeto da autenticação para que possa usar seus métodos
const auth = firebase.auth();
//Cria o objeto do banco de dados Firestore para que eu possa acessar seus métodos
const db = firebase.firestore();

