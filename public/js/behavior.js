document.addEventListener("DOMContentLoaded", function(event) {
    swal ("Welcome to my Portfolio!", "I am a Teacher an now a Web Developer Designer!", "success");
var thumbnailElement = document.getElementById("smart_thumbnail")
    thumbnailElement.addEventListener("click", function() {
	alert("click again and see what happen");

	if (thumbnailElement.className == "") {
	    (thumbnailElement.className = "small")
	}else{
	    (thumbnailElement.className = "")
	}

    });
});
