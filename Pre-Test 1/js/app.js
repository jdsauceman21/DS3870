var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCards();
    $.each(result,function(i,person){
        
        
        
    })
})

function buildEmployeeCards(){
    $.each(arrEmployees,function(i,person){
        {
            let strHTML = '<div class="card col-3 mt-5 ml-3">';
            strHTML += '<img src="images/profile.png" alt="Profile Image" style="margin:auto; max-width:100%;">';
            strHTML += '<h5 class="text-center">' + person.FirstName + ' ' + person.LastName + '</a></h5>';
            strHTML += '<h6 class="text-center">' + person.Title +'</h6>';
            strHTML += '<h6>Contact Details </h6>';
            strHTML += '<p label class="text-muted"> Phone Number ' + person.HomePhone + '</a></p>';
            strHTML += '<p label class="text-muted"> Email ' + person.Email + '</a></p>';
            strHTML += '<h6>Address </h6>';
            strHTML += '<p class="text-muted">' + person.StreetAddress1 + ' ' + person.City + ' ' + person.State + '</a></p>';
            strHTML += '<h4 class="mt-2">Pay Details</h4>';
            strHTML += '<p class="text-muted"> Pay Rate' + person.HourlyWage + '</a></p>';
            strHTML += '<p class="text-muted"> Tax Rate ' + person.TaxRate + '</a></p>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class = "col">Goal Pay</label>';
            strHTML += '<input class ="txtGoalPay col-6">';
            strHTML += '</div>';
            strHTML += '<button class = "btn btn-primary mt-5 mb-5 mx-auto btnFindHoursFromGoal">Find Hours From Goal</button>';
            strHTML += '</div>';
            strHTML += '</div>';
            $('#divEmployeeCards').append(strHTML);
            $('#tblEmployeeCards tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td></tr>' + person.Title + '</td><td>' + person.LastName + '</td></tr>');
        }
        
    });
    $('#tblEmployees').DataTable();
}

$(document).on('click','.btnFindHoursFromGoal', function() {
    let decRate = $(this).closest('.card').find ('.txtPayRate').text().split(': ')[1];
    let decHours = $(this).closest('.card').find ('.txtTaxRate').val();
    $(this).closest('.card').find('txtGoalPay').val((decHours*decRate));
});

