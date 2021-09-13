$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function());
    console.log(restult);
    $.each(result,function(i,person){
        console.log(person.FirstName)
        console.log(person.LastName)
    })





$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decHours * decRate);
});
$('#cboEmployeeType').change(function() {
    if($('#cboEmployeeType').val() == 'FULL'){
        //$('#divHours').slideUp();
        //$('#divHours').css('display','none');
        $('#divHours').addClass('d-none');
    }else {
        $('#divHours').removeClass('d-none').slideDown();
    }
})