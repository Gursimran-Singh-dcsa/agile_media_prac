<?php 	
		$id = $_POST['id'];
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$gender = $_POST['gender'];
		$language = $_POST['language'];
		$address = $_POST['address'];
		$country = $_POST['country'];
		$address = trim($address);
		$name = trim($name);
	$error = 0;
	$return_val = 0;
	if(strlen($name) < 3 || preg_match("[^a-z A-Z]",$name)) {
		$error = 1;
	}

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	    $error = 1;
	}
	$sex= array('male','female');
	if(!in_array($gender, $sex)) {
		$error = 1;
	}
	$bhasha=array(' hindi',' english',' punjabi',' hindi english',' hindi punjabi',' english punjabi',' hindi english punjabi');
	if(!in_array($language,$bhasha)) {
		$error = 1;
	}
	$countryselection = array('India','Nepal','pakistan','bhutan');
	if(!in_array($country,$countryselection)) {
		$error = 1;
	}
	if((preg_match("[^0-10]",$phone) || strlen($phone) != 10)) {
		$error = 1;
	}
	if($error == 1) {
		$return_val = 1;
	}
	else {
		$connection = mysqli_connect('localhost:3306','root','');
		if(!$connection) {
			$return_val = 11;
		}
		else {
			mysqli_select_db($connection,'agilemedialabpractice');
			$sql="UPDATE task1_table SET name='$name',email='$email',address='$address',phone='$phone',country='$country',languages='$language',sex='$gender' where id='$id'";
	      	$update = mysqli_query($connection,$sql);
	      	if(!$update) {
	       		$return_val = 111;
	      	}
			mysqli_close($connection);
		}
	}
	
   echo (json_encode($return_val));
 ?>
