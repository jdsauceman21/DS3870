var arrArcher;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey.php?APIKey=DuffManSays,Phrasing!&Codename=Duchess", function(result){
    arrArcher = result;
    $.each(result,function(i,Archer){
        $('#divProfileContainer').append(buildProfileCard(Archer));
        $('#divProfileDetailContainer').append(buildProfileDetailCard(Archer));
    })
})

$(document).on('click','.btnToggleContactDetails',function(){
    $('#divProfileDetailContainer').slideToggle();
})

function buildProfileDetailCard(Archer){
    strCardHTML = '<div class="card">';
    strCardHTML += '<div class="card-body bg-secondary">';
    strCardHTML += '<p class="mt-0 mb-0 ml-0">Email: <a href="mailto:' + Archer.Email + '" class="aEmail text-white">' + Archer.Email + '</a></p>';
    strCardHTML += '<p class="mt-0 mb-0 ml-0">Phone: <a href="tel:' + Archer.Phone + '" class="aPhone text-white">'+ Archer.Phone +'</a></p>';
    strCardHTML += '<p class="pStreetAddress mt-1 mb-0 ml-0">Street Address: ' + Archer.Street1 + '<p class="pCity mt-0 mb-0 ml-0">City: '+ Archer.City +'<p class="pState mt-0 mb-0 ml-0">State: '+ Archer.State +'<p class="pZip mt-0 mb-0 ml-0">Zip Code: '+ Archer.ZIP +'</p>';
    strCardHTML += '<p class="pEContact mt-1 mb-0 ml-0">Emergency Contact: ' + Archer.EContact + '</p>';
    strCardHTML += '<p class="mt-0 mb-0 ml-0">Phone: <a href="tel:' + Archer.EContactNumber + '" class="aPhone text-white">'+ Archer.EContactNumber +'</a></p>';
    return strCardHTML;
}

function buildProfileCard(Archer){
    strCardHTML = '<div class="card ">';
    strCardHTML += '<div class="card-body">';
    strCardHTML += '<img src="https://www.swollenhippo.com/archer.jpg" class="float-left mr-3 mb-3" alt="Profile Pic" style="width:30%; border-radius: 50%;"></img>';
    strCardHTML += '<h4 class="text-info mb-0">' + Archer.FirstName + ' ' + Archer.LastName + '</h4>';
    strCardHTML += '<h4 class="text-primary mt-0"><p class="mb-0 ml-3">Codename: ' + Archer.CodeName + '</h4>';
    strCardHTML += '<h4 class="text-primary mt-0"><p class="mb-0 ml-3">Billing Agency: ' + Archer.Agency + '</h4>';
    strCardHTML += '<h4 class="text-primary mt-0"><p class="mb-0 ml-3">Position: ' + Archer.Job + '</h4>';
    strCardHTML += '<h4 class="text-primary mt-0"><p class="mb-0 ml-3">Hire Date: ' + Archer.HireDate + '</h4>';
    strCardHTML += '<button class="btn btn-primary btn-block btnToggleContactDetails">Toggle Contact Details</button>';
    strCardHTML += '</div>';
    strCardHTML += '</div>';
    return strCardHTML;
}

var arrArcher;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    arrArcher = result;
    $.each(result,function(i,Archer){
        $('#tblPayStubs tbody').append(builddivPayStubsTable(Archer));
    })
    $('#tblPayStubs').DataTable();
})

function calculateTotalPay(decHours, decPayRate, decCommissionRate, decSales){
        
    return Math.round((decHours * decPayRate) + (decCommissionRate * decSales));
}

function builddivPayStubsTable(Archer){
    return '<tr><td>' + Archer.Month + '</td><td>' + Archer.Year + '</td><td>' + Archer.Sales + '</td><td>' + Archer.Hours + '</td><td>' + Archer.Rate + '</td><td>' + Archer.CommissionRate + '</td><td>' + calculateTotalPay(Archer.Hours,Archer.Rate,Archer.CommissionRate,Archer.Sales) + '</td></tr>';
}