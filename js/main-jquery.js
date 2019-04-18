console.log('we are in main-jquery.js');

var nameDisplay = document.querySelector('#name');
var nameInput = document.querySelector('[name="name"]');
var fontInput = document.querySelector('[name="font-select"]');
var specialCharsInput = document.querySelector('[name="specialChars"]');
var shippingInput = document.querySelector('[name="shipping"]');


var costPerLetter = 5;
var tax = .07;


nameInput.addEventListener('input', function (e) {
    // if the user has entered a value in the nameInput, then display it
    // if not, then display 'Your Name Here'
    if (e.target.value) {
        nameDisplay.innerHTML = e.target.value;
    } else {
        nameDisplay.innerHTML = 'Your Name Here';
    }
});


fontInput.addEventListener('change', function (e) {
    nameDisplay.style.fontFamily = e.target.value;
});



$('#calculate').on('click', function () {
    console.log('we are inside the button');

    console.log('The content of the input field is: ' + $('input[name="name"]').val());

    console.log("The length of the name is: " + $('input[name="name"]').val().length);

    var name_cost = $('input[name="name"]').val().length * 5;
    //console.log(name_cost);
    $('#lettersCostDisplay').html(name_cost);

    var char_cost = parseInt($('input[name="specialChars"]').val()) * 5;
    //console.log(char_cost);
    $('#specialCharsCostDisplay').html(char_cost);

    var tax = (name_cost + char_cost) * 0.07;
    $('#taxCostDisplay').html(tax);

    var shipping_cost = parseFloat($('select[name="shipping"]').val());
    $('#shippingCostDisplay').html(shipping_cost);

    var sub_total = (name_cost + char_cost);
    $('#subTotalDisplay').html(sub_total);

    var grand_total = (sub_total + tax + shipping_cost);
    console.log(grand_total);
    $('#grandTotalDisplay').html(grand_total);

});
