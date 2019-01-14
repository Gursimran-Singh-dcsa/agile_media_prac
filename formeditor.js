$(document).ready(function() {
	initialize();

	$("#form").submit(submitHandler);
	$("#closeButton").click(function(){
		window.location="task1_extention.html";
	});
});

function initialize(){
	$("#nerror").hide();
	$("#perror").hide();
	$("#serror").hide();
	$("#aerror").hide();
	$("#lerror").hide();
	$("#eerror").hide();
}

function submitHandler()
{
	var name = $("#name").val();
	var email = $("#email").val();
	var address = $("#address").val();
	var phone = $("#phone").val();
	var error=0;
	var sex='';
	var Language='';
	var country='';
	var langcheck=1;

	if(!isNaN(name) || name.length < 3) {
		$("#nerror").hide();
		if(name=="")
		{
			$("#nerror").text("please enter Your name");
			console.log("name is nothing");				
		}
		else {
			$("#nerror").text("please enter valid name");
		}
		error = 1;
		$("#nerror").show();
	}
	else {
		$("#nerror").text("correct");
		$("#nerror").hide();
	}
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(!reg.test(email))
	{
		$("#eerror").hide();
		if(email=="")
			$("#eerror").text("please enter your email");
		else
			$("#eerror").text("please enter a valid email");
		error=1;
		$("#eerror").show();
	}
	else
	{
		$("#eerror").hide();
	}
	if(address.length<10)
	{
		$("#aerror").hide();
		$("#aerror").text("too short address");
		$("#aerror").show();
		error=1;
	}
	else
	{
		$("#aerror").hide();
	}
	var phnchk='[A-Za-z]+';
	if ( phone.length!=10|| phone.match(phnchk))
	{
		$("#perror").hide();
		$("#perror").text("Invalid phone number");
		if(phone.length==0)
		{
			$("#perror").text("please enter your phone number");
		}
		error=1;
		$("#perror").show();
		console.log(userid);
	}
	else
	{
		$("#perror").hide();
	}
	if($("input[name='sex']:checked").val() == null)
	{
		error=1;
		$("#serror").show();
	}
	else
	{
		$("#serror").hide();
		sex=$("input[name='sex']:checked").val();
	}
	country=$("#country").find('option:selected').text();
	if($("#hindi").prop("checked"))
	{
		Language=Language+' hindi';
		langcheck=0;
	}
	if($("#english").prop("checked"))
	{
		Language=Language+' english'
		langcheck=0;
	}
	if($("#punjabi").prop("checked"))
	{
		Language=Language+' punjabi';
		langcheck=0;
	}
	if(langcheck==1)
	{
		$("#lerror").show();
		error=1;
	}
	else
	{
		$("#lerror").hide();
	}
	if(error==0)
	{
		dbInsert();
	}
	
	function dbInsert()
	{
		console.log(name,email,address,phone,sex,Language,country);
		var jsonobject={
			"id": userid,
			"name":name,
			"email":email,
			"phone":phone,
			"address":address,
			"country":country,
			"language":Language,
			"gender":sex
		}
		$.ajax({
			url:'editupdate.php',
			method:"POST",
			data:jsonobject,
			dataType:"json",
			success: function(data){
				var returned=$.parseJSON(data);
				console.log("here i am");
				if(returned==0)
				{
					alert("successfully submitted your data!!");
					window.location="task1_extention.html";
				}
				else
				{
					alert("An error occured, please try again!!");
				}
			}
		});	
	}
	return false;
}
