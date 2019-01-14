
$(document).ready(function(){
	var current = 1;
	var pages = 1;
	var toDelete;
	var check = 0;
	$("#deleteMultiple").hide();
	var jsonobject = {
		"needed": current+10
	}

	$(document).on('click','.delete',function(){
		var toDelete=$(this).parent().attr("id");
		askDelete(toDelete);
	});
	$(document).on('click','.view',function(){
		var toview = $(this).parent().attr("id");
		view(toview);
	});
	$(document).on('click','.edit',function(){
		var toEdit = $(this).parent().attr("id");
		edit(toEdit);
	});
	
	$(document).on('click','input[type="checkbox"]',function(){
		checkBoxHandler(this);	
	});
	$(document).on('click','#deleteMultiple',multipledeletion);
	
	
// PAGE NUMBER CLICK FUNCTION	
	var currentpage=1;
	$(document).on('click','.movers', function(){
		var till = $(this).attr("id")*1;
		current = till;
		till = till*10;
		$.ajax({
			url:'fetcher.php',
			method:'POST',
			data:jsonobject,
			dataType:'json',
			success: function(data){
				$("#tablee").empty();
				var from = till - 10;
				if(data.length > till)
					till=till;
				else
					till=data.length;
				for(var i=from;i<till;i++)
				$("#tablee").append('<tr class="row"><td class="CheckBoxColumn"><input type="checkbox"></td>\
					<td class="IdColumn">'+(i+1)+'</td>\
					<td class="NameColumn">'+data[i]['name']+'</td>\
					<td class="EmailColumn">'+data[i]['email']+'</td>\
					<td class="ActionColumn" id='+data[i]['id']+'><span class="delete">delete</span>\
					<span class="view">view</span><span class="edit">edit</span></td> </tr>');
			}
		});
	});
// DEFAULT AJAX CALL
	$.ajax({
		url:'fetcher.php',
		method:'POST',
		data:jsonobject,
		dataType:'json',
		success: function(data){
			pages=data.length/10;
			for(var temp=1;temp<pages+1;temp++) {
				$(".pagenumber").append('<span style="margin-left:10px;"  class="movers"  id='+temp+' >'+temp+'</span>');
			}
			var fetcheddata=data;
			var till;
			if(data.length>10) {
				till=10;
			}
			else {
				till=data.length;
			}
			for(var i=0;i<till;i++) 
			$("#tablee").append('<tr class="row"><td class="CheckBoxColumn"><input type="checkbox"></td>\
				<td class="IdColumn">'+(i+1)+'</td>\
				<td class="NameColumn">'+data[i]['name']+'</td>\
				<td class="EmailColumn">'+data[i]['email']+'</td>\
				<td class="ActionColumn" id='+data[i]['id']+'><span class="delete">delete</span>\
				<span class="view">view</span><span class="edit">edit</span></td> </tr>');
		}

	});
	
// PREVIOUS MOVE FUNCTION		
	$(".moversl").click(function(){
	  	if(current>1)
	  	{
		  	var till=(current-1);
			current=till;
			till=till*10;
			$.ajax({
				url: 'fetcher.php',
				method: 'POST',
				data:jsonobject,
				dataType:'json',
				success: function(data){
					$("#tablee").empty();
					var from=till-10;
					console.log(from,till);
					if(data.length>till)
						till=till;
					else
						till=data.length;
					for(var i=from;i<till;i++)
					$("#tablee").append('<tr class="row"><td class="CheckBoxColumn"><input type="checkbox"></td>\
						<td class="IdColumn">'+(i+1)+'</td>\
						<td class="NameColumn">'+data[i]['name']+'</td>\
						<td class="EmailColumn">'+data[i]['email']+'</td>\
						<td class="ActionColumn" id='+data[i]['id']+'><span class="delete">delete</span>\
						<span class="view">view</span><<span class="edit">edit</span>/td> </tr>');
				}
			});
	  	}
	  	else
	  	{
	  		alert("already on first page");	
	  	}
	});
	//NEXT MOVE FUNCTION
	$(".moversr").click(function(){
	  	if(current<pages)
	  	{
	  		var till=(current+1);
			current=till;
			till=till*10;
			$.ajax({
				url:'fetcher.php',
				method:'POST',
				data:jsonobject,
				dataType:'json',
				success: function(data){
					$("#tablee").empty();
					var from=till-10;
					if(data.length>till)
						till=till;
					else
						till=data.length;
					for(var i=from;i<till;i++)
						$("#tablee").append('<tr class="row"><td class="CheckBoxColumn"><input type="checkbox"></td>\
							<td class="IdColumn">'+(i+1)+'</td>\
							<td class="NameColumn">'+data[i]['name']+'</td>\
							<td class="EmailColumn">'+data[i]['email']+'</td>\
							<td class="ActionColumn" id='+data[i]['id']+'><span class="delete">delete</span>\
							<span class="view">view</span><span class="edit">edit</span></td> </tr>');
				}
			});
	  	}
	  	else
	  	{
	  		alert("already on last page");	
	  	}
	});		
});

function askDelete(toDelete)
{
	$("body").append('<div class="outerbox" id="confirmDialog"> <div class="innerbox">Do you really want to delete?<br>\
		<span class="ask red" id="yes">YES</span><span class="ask green" id="no">NO</span></div></div>');
	$("#no").click(function() {
		//alert("no clicked");
		$("#confirmDialog").remove();
	});
	$("#yes").click(function() {
		//alert("yes clicked");
		$("#confirmDialog").remove();
		deleteSelected(toDelete);
	});
}

function deleteSelected(toDelete)
{
	var jsondata = {
		"rowId":toDelete,
		"flag":"0"

	}
	$.ajax ({
		url:'deleter.php',
		data:jsondata,
		dataType:'json',
		method:'POST',
		success: function(data) { 
			if(data == 1) {
				alert("successfully deleted");
			}
			else
			if(data == 2) {
				alert("could not connect to servers, try again");
			}
			else
			if(data == 3) {
				alert("could not delete, try again");
			}
			else {
				alert("unexpected error occured,try again");
			}
			window.location = "task1_extention.html";
		}
	});
}
function view(toview)
{
	$("body").append('<div class="outerbox" id="viewDialog"> <div class="innerbox"><span id="userdata"></span>\
		<span class="ask red" id="closeview">Close</span></div></div>');
	var jsonRowFetcherData = {
		"rowId":toview
	}
	$.ajax({
		url: 'rowfetcher.php',
		data: jsonRowFetcherData,
		dataType: 'json',
		method: 'POST',
		success: function(data){ 
			console.log(data);
			$("#userdata").append('ID: '+data['id']+'<br>Name: '+data['name']+'<br>Email:'+data['email']+'<br>sex: \
				'+data['sex']+'<br> address: '+data['address']+'<br>country: '+data['country']+'<br>Languages: '+data['languages']);
		}
	});	
	$("#closeview").click(function(){
		$("#viewDialog").remove();
	});
}

function edit(toEdit)
{
	var jsonRowFetcherData = {
		"rowId":toEdit
	}
	$.ajax({
		url: 'rowfetcher.php',
		data: jsonRowFetcherData,
		dataType: 'json',
		method: 'POST',
		success: function(data){
			console.log(data);
		$("body").append('<form method = "post" action = "formeditor.php" id = "form">\
	<input type ="hidden" name = "naame" >\
	<input type ="hidden" name = "idd" >\
	<input type ="hidden" name = "email" >\
	<input type ="hidden" name = "address" >\
	<input type ="hidden" name = "sex" >\
	<input type ="hidden" name = "languages" >\
	<input type ="hidden" name = "phone" >\
	<input type="hidden"  name = "country"></form>');
	 var f = document.getElementById('form');
  f.naame.value = data['name'];
  f.idd.value = data['id'];
  f.email.value = data['email'];
  f.address.value = data['address'];
  f.sex.value = data['sex'];
  f.languages.value = data['languages'];
  f.phone.value = data['phone'];
  f.country.value = data['country'];
  f.submit(); 
			$("body").remove();
		}
	});
}

function headCheckBoxHandler()
{
	
	if($("#headCheckBox").prop("checked"))
	{
		console.log("checked");
		$('input[type="checkbox"]').prop("checked",false);
		$('input[type="checkbox"]').prop("checked",true);
		 check = $('body').find('input[type=checkbox]:checked').length;
	}
	else
	{
		console.log("un checked");
		$('input[type="checkbox"]').prop("checked",false);
		check = $('body').find('input[type=checkbox]:checked').length;
	}
}

function checkBoxHandler(obj){
	if(obj.id=="headCheckBox")
	{
		headCheckBoxHandler();
	}
	else
	{
		check = $('body').find('input[type=checkbox]:checked').length;
		if((check==10) && !$("#headCheckBox").prop("checked"))
		{
			$('#headCheckBox').prop('checked',true);
		}
		 check = $('body').find('input[type=checkbox]:checked').length;
		if(check != 11 && $("#headCheckBox").prop("checked") )
		{
			$('#headCheckBox').prop('checked',false);
		}	 	
	}
	if(check>0 )
	{
		$("#deleteMultiple").show();
	}
	else{
		$("#deleteMultiple").hide();
	}
	
}

function multipledeletion(){
	var array=[];
	$("input:checkbox").each(function(){
	    var current = $(this);
	    if(current.is(":checked")){
	      //  array.push($this.attr("id"));
	      var id=current.parent().siblings(".ActionColumn").attr('id');
	      if(id != undefined)
	      array.push(id);
	    }
	});
	console.log(array[0]);
	$.ajax({
		url:"deleter.php",
		method:"POST",
		data:{"key":array,"flag":"1"},
		dataType:"json",
		success: function(data){
			if(data == 1) {
				alert("successfully deleted");
			}
			else
			if(data == 2) {
				alert("could not connect to servers, try again");
			}
			else
			if(data == 3) {
				alert("could not delete, try again");
			}
			else {
				alert("unexpected error occured,try again");
			}
			window.location = "task1_extention.html";
		}
	});
}
//ankita.saini2246@gmail.com