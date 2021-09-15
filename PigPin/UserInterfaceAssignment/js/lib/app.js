$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
    $.each(result,function(i,person){
        console.log(person.FirstName);
        console.log(person.FirstName + ' ' + person.LastName);
        $('#txtEmail').val(person.Email);
    })
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
        if(person.FirstName != 'John'){
            let strHTML = '<div class="card col-3 mt-5">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
            strHTML += '<h4 class="mt-3">Profile Details</h4>';
            strHTML += '<p>Hourly Rate: ' + person.HourlyRate + '</p>';
            strHTML += '<p>Address:  123 South Willow ave, Cookeville, TN 38506</p>';
            strHTML += '<p>Assignment:  Johnson Hall</p>';
            strHTML += '<div class="form-group">';
            strHTML += '<label >Pay Rate</label>';
            strHTML += '<input class ="txtPayRate">';
            strHTML += '</div>';
            strHTML += '<div class="form-group">';
            strHTML += '<label >Total Pay</label>';
            strHTML += '<input class ="txtTotalPay">';
            strHTML += '</div>';
            strHTML += '<button class = "btn btn-primary btnCalculatePay">Calculate</button>';
            strHTML += '</div>';
            $('#divEmployees').append(strHTML);
        }
        
    });
}

$(document).on('click', '.item', function(event) {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decHours * decRate);
});
