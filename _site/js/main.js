jQuery(function(){
	copyrightDate();
});

function copyrightDate(){
	var today = new Date();
	var yyyy = today.getFullYear();
	jQuery('#copyright').html(yyyy);
}