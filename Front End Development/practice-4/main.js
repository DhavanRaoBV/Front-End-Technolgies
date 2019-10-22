var posts = [];

function mapPosts() {
    var cardsRef = document.getElementById('cards');
for (var i = 0; i < posts.length; i++) {
    cardsRef.innerHTML +=
"<div class='card mb-3 ' style='max-height:280px;'>"+
  "<div class='row no-gutters'>"+
    "<div class='col-md-4' >"+
      "<img src='user.png' class='card-img' alt='user'>"+
    "</div>"+
    "<div class='col-md-8'>"+
      "<div class='card-body'>"+
        "<h6 class='card-title'>"+ '<i class="fa fa-id-card" aria-hidden="true"></i>'+'User-ID: '+ posts[i].id + "</h5>"+
        "<p class='card-text'>"+'<i class="fa fa-user-circle" aria-hidden="true"></i>'+'Name: '+ posts[i].name +"</p>"+
        "<p class='card-text'>"+'<i class="fa fa-envelope" aria-hidden="true"></i>'+'Email: '+ posts[i].email+"</p>"+
        "<p class='card-text'>"+'<i class="fa fa-address-book" aria-hidden="true"></i>'+'Address: '+ posts[i].address.street +' '+posts[i].address.suite+' '+posts[i].address.city+' '+posts[i].address.zipcode +"</p>"+
      "</div>"+
    "</div>"+
  "</div>"+
"</div>"
}
}

function getPosts() {

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (xhr.status >= 200 && xhr.status < 300) {
            posts = JSON.parse(xhr.response)
            console.log(posts)
            mapPosts()
            document.getElementById('progress').style.display='none';
        } else {
            console.log('The request failed!');
        }
    };

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()
}