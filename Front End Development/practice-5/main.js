var posts = [];
var user=[];

function mapPosts() {
  var cardsRef = document.getElementById('cards');
  for (var i = 0; i < posts.length; i++) {
    cardsRef.innerHTML +=
      "<div class='card mb-3 ' style='max-height:280px;'>" +
      "<div class='row no-gutters'>" +
      "<div class='col-md-4' >" +
      "<img src='user.png' class='card-img' alt='user'>" +
      "</div>" +
      "<div class='col-md-8'>" +
      "<div class='card-body'>" +
      "<h6 class='card-title'>" + '<i class="fa fa-id-card" aria-hidden="true"></i>' + 'User-ID: ' + posts[i].id + "</h6>" +
      "<p class='card-text'>" + '<i class="fa fa-user-circle" aria-hidden="true"></i>' + 'Name: ' + posts[i].name + "</p>" +
      "<p class='card-text'>" + '<i class="fa fa-envelope" aria-hidden="true"></i>' + 'Email: ' + posts[i].email + "</p>" +
      "<p class='card-text'>" + '<i class="fa fa-address-book" aria-hidden="true"></i>' + 'Address: ' + posts[i].address.street + ' ' + posts[i].address.suite + ' ' + posts[i].address.city + ' ' + posts[i].address.zipcode + "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
}
function displayUser() {
  var cardsRef = document.getElementById('cards');
    cardsRef.innerHTML = "";

    for (var i = 0; i < user.length; i++) {
        cardsRef.innerHTML +=
        "<div class='card mb-3 ' style='max-height:280px;'>" +
        "<div class='row no-gutters'>" +
        "<div class='col-md-4' >" +
        "<img src='user.png' class='card-img' alt='user'>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<div class='card-body'>" +
        "<h6 class='card-title'>" + '<i class="fa fa-id-card" aria-hidden="true"></i>' + 'User-ID: ' + user[i].id + "</h6>" +
        "<p class='card-text'>" + '<i class="fa fa-user-circle" aria-hidden="true"></i>' + 'Name: ' + user[i].name + "</p>" +
        "<p class='card-text'>" + '<i class="fa fa-envelope" aria-hidden="true"></i>' + 'Email: ' + user[i].email + "</p>" +
        "<p class='card-text'>" + '<i class="fa fa-address-book" aria-hidden="true"></i>' + 'Address: ' + user[i].address.street + ' ' + user[i].address.suite + ' ' + user[i].address.city + ' ' + user[i].address.zipcode + "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";   
    }
  
}

function getPosts() {

  var xhr = new XMLHttpRequest();

  xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
      posts = JSON.parse(xhr.response)
      console.log(posts)
      mapPosts()
      document.getElementById('progress').style.display = 'none';
    } else {
      console.log('The request failed!');
    }
  };

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr.send()
}

function searchKey() {

  user = [];
  var flag=1
  var Key = document.getElementById('searchkey').value;
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].name == Key) {
      user.push(posts[i]);
      flag=0;
    }
  }
  if(flag)
  {
    var alert='<div class="alert alert-primary " role="alert">'+
    '<p>'+"Oops Record not found!!!....."+'</p></div>';
    document.getElementById('alert').innerHTML=alert;
       
  }
  displayUser();
  document.getElementById('searchkey').value = ' ';
}