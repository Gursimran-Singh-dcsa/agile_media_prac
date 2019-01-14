<?php

$flag = $_POST["flag"];
$success = 0;
$connection = mysqli_connect('localhost:3306','root','');
		if(!$connection) {
			$success = 2;
		}
		else {
			mysqli_select_db($connection,'agilemedialabpractice');
			if($flag=="0")
			{
				$id = $_POST['rowId'];
				$sql = "DELETE from task1_table WHERE id='$id'";
		      	$deleted = mysqli_query($connection,$sql);
		      	if(!$deleted) {
		       		$success = 3;
		      	}
		      	else
		      	{
		      		$success = 1;
		      	}
	      	}
	      	if($flag=="1")
	      	{
		      	for($i=0;$i<sizeof($_POST['key']);$i++)
				{
					$todelete=$_POST['key'][$i];
					$sql = "DELETE from task1_table WHERE id='$todelete'";
					$deleted = mysqli_query($connection,$sql);
		      		if(!$deleted) {
		       			$success = 3;
		      		}
		      		else
		      		{
		      			$success = 1;
		      		}
		      	}
		    }
			mysqli_close($connection);
		}
echo json_encode($success);
  ?>
