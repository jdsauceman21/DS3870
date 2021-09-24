var arrPayStubs;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    arrPayStubs = result;
    $.each(result,function(i,paystub){
        $('#tblPayStubs tbody').append(getTableRow(paystub));
    })
    $('#tblPayStubs').DataTable();
})

var arrEmployeeProfile;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey.php?APIKey=DuffManSays,Phrasing!&Codename=Duchess", function(result){
    arrEmployeeProfile = result;
    console.log();
    $.each(result,function(i,profile){
        fillEmployeeProfile(profile);
    })
})

$(document).on('click','#btnContactDetails',function(){
    $('#divContactDetails').slideToggle();
})


function calculateTotalPay(decSales, decPayRate, decHours, decCommissionRate){
    return Math.round((( (decHours * decPayRate) + (decSales * decCommissionRate) ) + Number.EPSILON) * 100) / 100;
}

function getTableRow(PayCheck){
    return '<tr><td>' + PayCheck.Month + '</td><td>' + PayCheck.Year + '</td><td>' + PayCheck.Sales + '</td><td>' + PayCheck.Hours + '</td><td>' + PayCheck.Rate + '</td><td>' + PayCheck.CommissionRate + '</td><td>' + calculateTotalPay(PayCheck.Sales,PayCheck.Rate,PayCheck.Hours,PayCheck.CommissionRate) + '</td></tr>';
}

function fillEmployeeProfile(Employee){
    $('#imgProfileImage').attr('src',Employee.Image);
    $('#txtName').text(Employee.FirstName + ' ' + Employee.LastName);
    $('#txtCodename').text(Employee.CodeName);
    $('#txtAgency').text(Employee.Agency);
    $('#txtPosition').text(Employee.Job);
    $('#txtHireDate').text(Employee.HireDate);
    $('#txtEmail').text(Employee.Email);
    $('#txtEmail').attr('href','mailto:' + Employee.Email);
    $('#txtPhone').text(Employee.Phone);
    $('#txtPhone').attr('href','tel:' + Employee.Phone);
    $('#txtStreet').text(Employee.Street1);
    $('#txtCity').text(Employee.City);
    $('#txtState').text(Employee.State);
    $('#txtZip').text(Employee.ZIP);
    $('#txtEmergencyContact').text(Employee.EContact);
    $('#txtEmergencyPhone').text(Employee.EContactNumber);
    $('#txtEmergencyPhone').attr('href','tel:' + Employee.EContactNumber);
}