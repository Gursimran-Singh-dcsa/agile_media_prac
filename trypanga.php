<!DOCTYPE html>
<html>
<head>
<h1>ankitasaini</h1>
	 <meta charset = utf-8>
  <meta name = viewport content=width=device-width, initial-scale=1>
	<title>Task 1</title>
	<link rel = stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css>
<link rel = stylesheet href=task1_form.css>
<!-- jQuery library -->
<script
  src = https://code.jquery.com/jquery-3.3.1.min.js
  integrity = sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=
  crossorigin = anonymous></script>
<script type=text/javascript>var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);
console.log(queryString.id,here);
var queries = queryString.split(&);
var values;

for (var i = 0; i < queries.length; i++)
{
 // document.write(queries[i] + <br>);
  values=queries[i].split(=);
  console.log(values[1]);
}
</script>




















 	<form method = "post" action = "task1_db.php" id = "form">
	<input type ="hidden" id = "name" >
	<input type ="hidden" id = "email" >
	<input type ="hidden" id = "address" >
	<input type ="hidden" id = "sex" >
	<input type ="hidden" id = "language" >
	<input type ="hidden" id = "phone" >
	<input type="hidden"  id="country">
				       
				 
