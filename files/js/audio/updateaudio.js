$(document).ready(function(){
	var urlupload;
	var blobKey = "";
	var audID = "";

	init();

	function init(){
		getUrlUpload();
		preImg();
		audID = $("#audID").val();
		blobKey = $("#blobKey").val();
		$("#submit").click(function(){
			if(audID == ""){
				uploadBlob();
			}else{
				if(blobKey == ""){
					uploadBlob();
				}else{
					uploadForm()
				}
			}
			return false;
		});
		$("#delBlob").click(function(){
			delBlob()
		});
	}
	function delBlob(){
		$.ajax({
			"url" : "/audio/file/delete",
			"type" : "post",
			"data" : {"blobKey" : blobKey},
			"beforSend" : aniAjax(),
		}).done(function(data){
			if(data == "complete"){
				blobKey = "";
				$("#td-file").empty().append("<input type='file' id='audio' accept='audio/*' class='form-control' />");
				$("#loading").remove();
			}else{
				alert(data);
			}
		});
	}
	function aniAjax(){
		$("body").append("<img id='loading' src='/img/loading.gif' style='position:absolute;left:47%;top:50%'>");
	}
	function preImg(){
		var img = new Image();
		img.src = "/img/loading.gif";
	}
	function getUrlUpload(){
		$.ajax({
			"url" : "/audio/geturlupld",
			"type" : "post"
		}).done(function(data){
			urlupload = data;
			console.log(urlupload);
		});
	}
	function uploadBlob(){
		console.log("upblob1");
		var control = $("#audio")[0];
		var formdata = new FormData();
		formdata.append("file", control.files[0]);
		$.ajax({
			"url" : urlupload,
			"type" : "post",
			"data" : formdata,
			"processData" : false,
			"contentType" : false,
			"beforeSend" : aniAjax(),
		}).done(function(data){
			console.log("upblob2");
			blobKey = data;
			uploadForm();
		});
	}
	function uploadForm(){
		console.log("form1");
		var audName = $("#audName").val();
		var audDsc = $("#audDsc").val();
		var formData = new FormData();
		formData.append("audName", audName);
		formData.append("audDsc", audDsc);
		formData.append("blobKey", blobKey);
		if(audID != ""){formData.append("audID", audID);}
		$.ajax({
			"url" : "/audio/update/submit",
			"type" : "post",
			"data" : formData,
			"processData" : false,
			"contentType" : false,
		}).done(function(data){
			console.log("form2", data);
			$("#loading").remove();
			switch (data){
				case "success" :
				alert("Insert Audio Success");
				break;

				case "error" :
				alert("Something went wrong");
				break;

				default :
				alert("Cannot connect to server");
			}
			window.location.href = "/audio";
		});
	}
});