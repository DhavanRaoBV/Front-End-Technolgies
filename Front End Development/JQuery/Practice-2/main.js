var users = [];
let filteredUsers = [];
let flag = false;
var items=[];
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#cards div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    getUsers();
  });





function mapUsers(){
    $('#cards').html('');
    var listUsers = '';
    for (var i = 0; i < users.length; i++) {
        listUsers +='<div class="card my-3">' +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item">' + '<i class="fas fa-at mr-3"></i>' + users[i].name + '</li>' +
        '<li class="list-group-item">' + '<i class="fas fa-user mr-3"></i>' + users[i].username + '</li>' +
        '<li class="list-group-item">' + '<i class="fas fa-envelope mr-3"></i>' + users[i].email + '</li>' +
        '<li class="list-group-item">' + '<i class="fas fa-phone mr-3"></i>' + users[i].phone + '</li>' +
        '<li class="list-group-item">' + '<i class="fas fa-globe mr-3"></i>' + users[i].website + '</li>' +
        '</ul>' +
        '</div>'

    }
    $('#cards').html(listUsers);




}



function getUsers() {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            users = JSON.parse(xhr.response)
            mapUsers()
            $('#progress').style.display = 'none'
        }
    };

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()
}


