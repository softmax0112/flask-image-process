/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
            $("#btn_submit").show();
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// $(function () {
//     $('#input100').on('change', function () {
//         readURL(input);
//     });
// });

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
// var input = document.getElementById( 'input100' );
var infoArea = document.getElementById( 'upload-label' );


// input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}