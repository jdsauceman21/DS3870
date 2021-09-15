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
            strHTML += '<p class = "txtPayRate">Hourly Rate: ' + person.HourlyRate + '</p>';
            strHTML += '<p>Address:  123 South Willow ave, Cookeville, TN 38506</p>';
            strHTML += '<p>Assignment:  Johnson Hall</p>';
            strHTML += '<div class="form-group">';
            strHTML += '<label >Hours Worked</label>';
            strHTML += '<input class ="txtHours">';
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

$(document).on('click','.btnCalculatePay', function() {
    let decRate = $(this).closest('.card').find ('.txtPayRate').text().split(': ')[1];
    let decHours = $(this).closest('.card').find ('.txtHours').val();
    $(this).closest('.card').find('txtTotalPay').val((decHours*decRate));
});
