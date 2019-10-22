var beverages = ['tea', 'coffee', 'milk']

function createList() {
    var listItems = ' ';
    for (var i = 0; i < beverages.length; i++) {
        listItems +=
            '<li class="list-group-item d-flex justify-content-between align-items-center">' +
            '<span class="lead">' + beverages[i] + '</span>' +
            '<button class="btn btn-default text-danger" onClick="deleteBeverage(' + i + ')">' +
            '<i class="far fa-times-circle fa-lg"></i>' +
            '</button>' +
            '</li>'

    }
    document.getElementById('list').innerHTML = listItems;
}


function deleteBeverage(index) {
    beverages.splice(index, 1)
    createList();

}
function addBeverage()
{
    beverages.push(document.getElementById('te').value);
    createList()
    document.getElementById('te').value=''
}