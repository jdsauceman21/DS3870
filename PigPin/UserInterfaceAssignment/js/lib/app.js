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
        if(person.FirstName != ''){
            let strHTML = '<div class="card col-3 ml-3 mt-5">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
            strHTML += '<h4 class="mt-4">Profile Details</h4>';
            strHTML += '<p class = "txtPayRate">Hourly Rate: ' + person.HourlyRate + '</p>';
            strHTML += '<p>Address:  123 South Willow ave, Cookeville, TN 38506</p>';
            strHTML += '<p>Assignment:  Johnson Hall</p>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class = "col">Hours Worked</label>';
            strHTML += '<input class ="txtHours col">';
            strHTML += '</div>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class = "col">Total Pay</label>';
            strHTML += '<input class ="txtTotalPay col">';
            strHTML += '</div>';
            strHTML += '<button class = "btn btn-primary btnCalculatePay">Calculate</button>';
            strHTML += '</div>';
            $('#divEmployeeCards').append(strHTML);
            $('#tblEmployees tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td></tr>');
        }
        
    });
}

$(document).on('click','.btnCalculatePay', function() {
    let decRate = $(this).closest('.card').find ('.txtPayRate').text().split(': ')[1];
    let decHours = $(this).closest('.card').find ('.txtHours').val();
    $(this).closest('.card').find('txtTotalPay').val((decHours*decRate));
});
