//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user");
room_name = localStorage.getItem("room");
console.log(room_name+user_name);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
msh = message_data['message'];
name_user = message_data['nameOfUser'];
like_count = message_data['numberOfLikes'];

nameTag = "<h4>"+name_user+"<img class='user_tick' src='tick.png' ></h4>";
messageTag = "<h4>"+msh+"</h4>";
likeTag = "<button class='btn btn-info' id="+firebase_message_id+" value="+like_count+" onclick='setLikes(this.id)'>"+like_count+"</button><hr>";
row = nameTag+messageTag+likeTag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("user");
      localStorage.removeItem("room");
      console.log("done");
      window.location = "index.html";
}

function send(){
      msg = document.getElementById("input").value;
      firebase.database().ref(room_name).push({
            nameOfUser: user_name,
            message: msg,
            numberOfLikes: 0
      });
}