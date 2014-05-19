$(document).ready(function(){
	var $trToDel;
	function aniAjax(){
		$("body").append("<img id='loading' src='/img/loading.gif' style='position:absolute;left:47%;top:50%'>");
	}
	function delBlobAud(audID, blobKey){
		delBlob(audID, blobKey);
	}
	function delBlob(blobKey){
		$.ajax({
			"url" : "/audio/file/delete",
			"type" : "post",
			"data" : {"blobKey" : blobKey},
			"beforeSend" : aniAjax(),
		}).done(function(data){
			if(data == "complete"){
				delAud(audID);
				$("#loading").remove();
			}else{
				alert(data);
			}
		});
	}
	function delAud(audID){
		$.ajax({
			"url" : "/audio/delete",
			"type" : "post",
			"data" : {"audID":audID},
		}).done(function(data){
			if(data == "complete"){
				alert("complete delete");
				remvTr();
			}else{
				alert(data);
			}
		});
	}
	function remvTr(){
		$trToDel.remove();
		var numAud = $("#shwAud").find("tbody").find("tr").length;
		if(numAud == 0){
			$("<tr><td colspan='5' style='text-align:center;padding:50px 0px;'>No audio rigth now</td><tr>").appendTo("#shwAud tbody");
		}
	}
	$(".del_audio").click(function(){
		if (!confirm("Do you want to delete this audio ?")){return;}
		audID = $(this).closest("tr").data("audid");
		blobKey = $(this).closest("tr").data("blobkey");
		console.log(audID, blobKey);
		delBlobAud(audID, blobKey);
		$trToDel = $(this).closest("tr");
	});
});