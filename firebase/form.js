// Your web app's Firebase configuration

  var firebaseConfig = {
  
    apiKey: "AIzaSyCjwbKUvDopzXFnl8KhYeYHj0YGhrSHUjI",
    authDomain: "mydatabase-c1f53.firebaseapp.com",
    databaseURL: "https://mydatabase-c1f53.firebaseio.com",
    projectId: "mydatabase-c1f53",
    storageBucket: "mydatabase-c1f53.appspot.com",
    messagingSenderId: "925452085527",
    appId: "1:925452085527:web:85300750c3f19de643af52",
    measurementId: "G-KSE2N84FVH"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

 

        const auth = firebase.auth();

        

        

        function signUp(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                alert("Signed Up");

        }

        

        

        

        function signIn(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.signInWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                

                

                

        }

        

        

        function signOut(){

                

                auth.signOut();

                alert("Signed Out");

                

        }

        

        

        

        auth.onAuthStateChanged(function(user){

                

                if(user){

                        

                        var email = user.email;

                        alert("Active User " + email);

                        

                        //Take user to a different or home page


                        //is signed in

                        

                }else{

                        

                        alert("No Active User");

                        //no user is signed in

                }

                

                

                

        });
