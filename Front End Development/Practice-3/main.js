function showAlert() {

    var alert='<div class="alert alert-success" role="alert">' +
        '<h4 class="alert-heading">Well done!</h4>' +
        '<p>The collapse JavaScript plugin is used to show and hide content </p>' +
        '<hr>' +
        '<p class="mb-0">Buttons or anchors are used as triggers that are mapped to specific elements you toggle.</p>'
        + '</div>';
    document.getElementById('alert1').innerHTML=alert;
    setTimeout(() => {
        document.getElementById('alert1').innerHTML= ' '
    },3000)



}