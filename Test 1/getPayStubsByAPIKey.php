<?php
 	header("Access-Control-Allow-Origin: *");
	$strAPIKey = $_GET['APIKey'];

    if($strAPIKey == 'DuffManSays,Phrasing!'){
		echo '[{"Month":"July","Year":"2020","Sales":"12000","Hours":"68","Rate":"28.57","CommissionRate":".06"},{"Month":"August","Year":"2020","Sales":"0","Hours":"14","Rate":"28.57","CommissionRate":".06"},{"Month":"September","Year":"2020","Sales":"36000","Hours":"42","Rate":"28.57","CommissionRate":".06"},{"Month":"October","Year":"2020","Sales":"41800","Hours":"43","Rate":"31.12","CommissionRate":".06"},{"Month":"November","Year":"2020","Sales":"6000","Hours":"72","Rate":"31.12","CommissionRate":".06"},{"Month":"December","Year":"2020","Sales":"64590","Hours":"38","Rate":"31.12","CommissionRate":".06"},{"Month":"January","Year":"2021","Sales":"31612","Hours":"68","Rate":"31.12","CommissionRate":".072"},{"Month":"February","Year":"2021","Sales":"118754","Hours":"68","Rate":"31.12","CommissionRate":".072"},{"Month":"March","Year":"2021","Sales":"127900","Hours":"68","Rate":"31.12","CommissionRate":".072"},{"Month":"April","Year":"2021","Sales":"132900","Hours":"68","Rate":"31.12","CommissionRate":".072"},{"Month":"May","Year":"2021","Sales":"183210","Hours":"68","Rate":"33.56","CommissionRate":".072"},{"Month":"June","Year":"2021","Sales":"242700","Hours":"68","Rate":"33.56","CommissionRate":".072"}]';
	} else {
		echo '{"Outcome":"Not Authorized"}';
	}

 ?>
