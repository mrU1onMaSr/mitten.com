var firebaseConfig = {
      apiKey: "AIzaSyDb-bND1qHMOQF7P3lHPKHEj4X5vXmr1b8",
      authDomain: "mitten-79e6c.firebaseapp.com",
      databaseURL: "https://mitten-79e6c.firebaseio.com",
      projectId: "mitten-79e6c",
      storageBucket: "mitten-79e6c.appspot.com",
      messagingSenderId: "782283383383",
      appId: "1:782283383383:web:2c896e9c456c4a3d54b912",
      measurementId: "G-8YXCJVHH92"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user = localStorage.getItem("user");

document.getElementById("welcome").innerHTML = "Welcome " + user +"!!";

function addRoom(){
      roomName = document.getElementById("newRoom").value;

      localStorage.setItem("room",roomName);
      firebase.database().ref("/").child(roomName).update({
            room : "letChat"
      });
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      rose = "<div id=" + Room_names + " onclick='openRoom(this.id)'>" + "The "+ Room_names + "</div> <hr>"

      document.getElementById("output").innerHTML += rose;

      //End code
      });});}
getData();


function openRoom(name){
      localStorage.setItem("room",name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user");
      localStorage.removeItem("room");
      console.log("done");
      window.location = "index.html";
}