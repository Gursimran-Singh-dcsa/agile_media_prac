<?php
$row_id=$_POST['rowId'];
$return_false=0;
//echo $row_id;
$connection=mysqli_connect('localhost:3306','root','');
	if(!$connection)
	{
		echo json_encode($return_false);
	}
	else
	{
	mysqli_select_db($connection,'agilemedialabpractice');
	$sql = "SELECT id,name,email,address,phone,country,languages,sex FROM task1_table WHERE id='$row_id'";
    $result=mysqli_query($connection,$sql);
   $row=$result->fetch_assoc();	
   echo json_encode($row);
	mysqli_close($connection);
}
?>
