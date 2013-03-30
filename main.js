$(function(){
	handleWhereBox();
	handleWhoBox();
	handleWebsiteBox();
	handleBlogBox();
	handleProjectsBox();
});

function handleWhereBox() {
	$("#where").mouseenter(function() {
		$("#linkContainer").show();
		$("#linkContainer").animate({
			height: "20px"
		}, 200);
		setTimeout(function() {
			$("#where #linkContainer a").show();
		}, 200);
	}).mouseleave(function() {
		$("#where #linkContainer a").hide();
		$("#linkContainer").animate({
			height: "0px"
		}, 300);
		setTimeout(function() {
			$("#linkContainer").hide();
		}, 300);
	});

	$("#where li").mouseover(function(e) {
		console.log(e.target.alt);
		switch(e.target.alt) {
			case "Facebook logo":
				$("#linkContainer a").html("Facebook/GuyonDavid");
				$("#linkContainer a").attr("href", "https://www.facebook.com/GuyonDavid");
			break;
			case "Google+ logo":
				$("#linkContainer a").html("Google+/GuyonDavid");
				$("#linkContainer a").attr("href", "https://plus.google.com/118272748818799969626");
			break;
			case "Twitter logo":
				$("#linkContainer a").html("Twitter/DGeTuX");
				$("#linkContainer a").attr("href", "https://twitter.com/dgetux");
			break;
			case "Youtube logo":
				$("#linkContainer a").html("Youtube/misterchimizz");
				$("#linkContainer a").attr("href", "http://www.youtube.com/user/misterchimizz");
			break;
			case "Last.fm logo":
				$("#linkContainer a").html("Lastfm/misterchimiz");
				$("#linkContainer a").attr("href", "http://www.lastfm.fr/user/misterchimiz");
			break;
			default:
				$("#linkContainer a").html("O_o'");
		}
	});
}

function handleWhoBox() {
	$("#who a").click(function() {
		$("#who a").html("Soon..");
	});
}

function handleWebsiteBox() {
	$("#website").click(function() {
		window.open("http://songaccoustic.fr", '_blank').focus();
	});
}

function handleBlogBox() {
	$("#blog").click(function() {
		window.open("http://blog.songaccoustic.fr", '_blank').focus();
	});
}

function handleProjectsBox() {
	$("#projects").click(function() {
		hideWhoBox(1000);
		hideWebsiteBox(1000);
		setTimeout(function() {
			hideWhereBox(1000);
			hideBlogBox(1000);
		}, 600);
	});
}

function hideWhoBox(duration) {
	$("#who").hide("blind", duration);
}

function hideWebsiteBox(duration) {
	$("#website").hide("blind", duration);
}

function hideWhereBox(duration) {
	$("#where").hide("blind", duration);
}

function hideBlogBox(duration) {
	$("#blog").hide("blind", duration);
}