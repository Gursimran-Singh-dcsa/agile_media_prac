<!DOCTYPE html>
<html>
<head>
	 <meta charset = "utf-8">
  <meta name = "viewport" content="width=device-width, initial-scale=1">
	<title>Task 1</title>
	<link rel = "stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel = "stylesheet" href="task1_form.css">
<!-- jQuery library -->
<script
  src = "https://code.jquery.com/jquery-3.3.1.min.js"
  integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin = "anonymous"></script>
  <script type="text/javascript">
  	var userid=<?php echo $_POST['idd']?>
  </script>
  <script src = "formeditor.js"></script>
</head>
<body style = "background-color: blue; width:100%; height: 100%">
	<?php echo $_POST['idd'];
	echo $_POST['country'];
	echo $_POST['languages'];
	echo $_POST['sex'];

		?>

	<div class = "container-fluid" style="margin-top: 100px;">
	
		<div class = "col-lg-3"></div>
		<div class = "col-lg-6">
			<div class = "container-fluid" style="border:1px solid red;background-color:white; border-radius: 25px ">
				<div class = "col-lg-12" style="text-align: center;border-bottom:1px solid red;float: left;max-height: 100; font-weight: bolder;font-size: 150%;color: blue">
					Edit Details here
				</div>
				<br/><br/>
				<div class = "col-lg-12" style="margin-bottom: 50px;" >
				   	<form method = "post" action = "task1_db.php" id = "form">
				   	
				   	<div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Name:<span class = "star">*</span></label></div>
				   	<div class = "col-lg-4"><input class = "form-control input"  id = "name" title = "name"  style = "" value="<?php echo $_POST['naame'];?>"></div>
				   		<div class = "error col-lg-4" id = "nerror">Please enter a valid Name</div>
				   	</div>

				   <div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Email:<span class = "star">*</span></label></div>
				   	<div class = "col-lg-4"><input type = "email" class = "form-control input" title = "email" id = "email" style = "" value="<?php echo $_POST['email'];?>">
				   	</div>
				   	<div class = "error col-lg-4" id = "eerror">Please enter a valid input</div>
				   </div>

				   <div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Address:<span class = "star">*</span></label></div>
				   	<div class = "col-lg-4"><textarea class = "form-control input" title = "address" id = "address" style = ""><?php echo $_POST['address'];?>
				   	</textarea></div>
				   	<div class = "error col-lg-4" id = "aerror">Please enter a valid input</div>
				   </div>

				   <div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Phone:<span class = "star">*</span></label></div>
				   	<div class = "col-lg-4"><input class = "form-control input" title = "phone" id = "phone" value="<?php echo $_POST['phone'];?>" style = "">
				   	</div>
				   	<div class = "error col-lg-4" id = "perror" >Please enter a valid input</div>
				   </div>


				    <div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Country:<span class = "star">*</span></label></div>
				   	<div class="col-lg-4"><select class="form-control input"  id="country" style="" selected="">
				   		<option <?php if($_POST['country']=='India') {echo "selected='selected'";} ?>>India</option>
				   		<option <?php if($_POST['country']=='Nepal')  {echo "selected='selected'";}?>>Nepal</option>
				   		<option <?php if($_POST['country']=='pakistan')  {echo "selected='selected'";}?>>pakistan</option>
				   		<option <?php if($_POST['country']=='bhutan'){echo "selected='selected'";}?>>bhutan</option>
				   	</select>
				   	</div>
				   	<div class = "error col-lg-4"></div>
				   </div>

				    <div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Language:<span class = "star">*</span></label></div>
				   	<div class = "col-lg-4" id = "checkboxgroup">
				   		<input type = "checkbox" class = "form-group" id = "hindi" name = "hindi" <?php if(strpos($_POST['languages'],"hindi")!==false) {echo "checked";} ?>><label class="checkbox_text">Hindi</label><br>
				   		<input type = "checkbox" name = "English" id = "english" class = "form-group" <?php if(strpos($_POST['languages'],"english")!==false) {echo "checked";} ?> ><label class="checkbox_text">English</label><br>
				   		<input type = "checkbox" name = "Punjabi" id = "punjabi" class = "form-group" <?php if(strpos($_POST['languages'],"punjabi")!==false) {echo "checked";} ?> ><label class="checkbox_text">Punjabi</label>
					</div>
				   	<div class = "error col-lg-4" id = "lerror">Please select a language</div>
				   </div>

				   <div class = "form-group col-lg-12">
				   	
				   	<div class = "col-lg-4">	<label class = "labels">Gender:<span class = "star">*</span></label></div>
				   	<div class = "col-lg-4" id = "gender">
				   		<input type = "radio" style = "margin-right: 5%;" class = "form-group" name = "sex" value = "male" <?php if(strpos($_POST['sex'],"male")!==false) {echo "checked";} ?>><label class = "checkbox_text">Male</label>
				   		<input type = "radio" name = "sex" class = "form-group" value = "female" <?php if(strpos($_POST['sex'],"female")!==false) {echo "checked";} ?>><label class = "checkbox_text">Female</label>
					</div>
				   	<div class = "error col-lg-4" id = "serror">Please select your gender</div>
				   </div>

				   <div class = "col-lg-12">
				   	<div class = "col-lg-12" style="text-align: center;">
				   		<input type = "submit" name = "btn btn-info" class = "form-group submit_btn" style = "background-color: white; color: blue; border-radius: 25px; border-color: blue; width:60%;" id="submit" >
				   	</div>
				   	
				   </div>

				   </form>
				</div>	
			</div>
		</div>	
		<div class = "col-lg-3">
			<button class = "btn btn-info" id = "closeButton">CLOSE</button>
		</div>
	</div>

</body>
</html>