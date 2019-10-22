var books = [{
    id: "1",
    name: "Half Girfriend",
    price: 200
}, {
    id: "2",
    name: "Treasury",
    price:500
}, {
    id: "3",
    name: "Black Tuesday",
    price: 600
}];

function bookList()
{



var html = "<tr><th>ID</th><th>NAME</th><th>PRICE</th><th>ACTION</th></tr>";
for (var i = 0; i < books.length; i++) {
    html+="<tr>";
    html+="<td>"+books[i].id+"</td>";
    html+="<td>"+books[i].name+"</td>";
    html+="<td>"+books[i].price+"</td>";
    html+="<td>"+'<button class="btn btn-default" onclick="deleteBook('+ i+')">'
   + '<i class="fas fa-times text-danger"></i>' 
   +'</button></td></tr>'



}

document.getElementById("tab").innerHTML = html;
}

function deleteBook(index)
{
    books.splice(index,1)
    bookList();
}

function createList()
{
    var bk=
        {   id:document.getElementById('id').value,
    name:document.getElementById('name').value,
   price:document.getElementById('price').value
}
books.push(bk);
bookList();
}
