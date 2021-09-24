<?php
 	header("Access-Control-Allow-Origin: *");
	$strAPIKey = $_GET['APIKey'];

    if($strAPIKey == 'DuffManSays,Phrasing!'){
		echo '[{"FirstName":"Sterling","LastName":"Archer","CodeName":"Duchess","Agency":"ISIS","Job":"Field Agent","HireDate":"17 Sept 2009","Email":"duchess@isis.com","Phone":"(718) 624-0690","Street1":"326 Van Brunt Street","City":"Brooklyn","State":"New York","ZIP":"11231","EContact":"Mallory Archer","EContactNumber":"(800) 288-3344"}]';
	} else {
		echo '{"Outcome":"Not Authorized"}';
	}

 ?>
