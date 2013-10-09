$(document).ready(function(){
/*-------------BOX 1--------------------*/
	$("#box1").mouseenter(function() {
	$("#arrow1").show(10);
	
	$("#basecamp").show(10);
	$("#head").hide(10);
	$("#p2").show(10);
	$("#p1").hide(10);
	});
	$(".box_container").mouseleave(function() {
	$("#arrow1").hide(10);
	
	$("#basecamp").hide(10);
	$("#head").show(10);
	$("#p1").show(10);
	$("#p2").hide(10);
	});
/*-------------BOX 2---------------------*/
	$("#box2").mouseenter(function() {
	$("#arrow2").show(10);
	
	$("#highrise").show(10);
	$("#head").hide(10);
	$("#p3").show(10);
	$("#p1").hide(10);
	});
	$(".box_container").mouseleave(function() {
	$("#arrow2").hide(10);
	
	$("#highrise").hide(10);
	$("#head").show(10);
	$("#p1").show(10);
	$("#p3").hide(10);
	});
/*-------------BOX 3---------------------*/
	$("#box3").mouseenter(function() {
	$("#arrow3").show(10);
	
	$("#campfire").show(10);
	$("#head").hide(10);
	$("#p4").show(10);
	$("#p1").hide(10);
	});
	$(".box_container").mouseleave(function() {
	$("#arrow3").hide(10);
	
	$("#campfire").hide(10);
	$("#head").show(10);
	$("#p1").show(10);
	$("#p4").hide(10);
	});
});