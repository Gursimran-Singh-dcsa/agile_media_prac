<?php
$return_true;
$return_false=0;
$connection=mysqli_connect('localhost:3306','root','');
	if(!$connection)
	{
		echo json_encode($return_false);
	}
	else
	{
	mysqli_select_db($connection,'agilemedialabpractice');
	$sql = 'SELECT id,name,email FROM task1_table';
    $result=mysqli_query($connection,$sql);
   if($result->num_rows>0)
   {
   	$id=0;
   	while($row=$result->fetch_assoc())
   	{
   	
   		$checking[$id]['email']=$row['email'];
   		$checking[$id]['name']=$row['name'];
   		$checking[$id]['id']=$row['id'];
   		$id=$id+1;
   	}
   }
   	
   	echo json_encode($checking);
	mysqli_close($connection);

}

?>
