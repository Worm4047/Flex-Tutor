$(document).ready(function(){
	$('.prop-selected').click(function(event){
		var prop_value = event.target.value;
		var category = $(event.target).attr('category');
		var tar = event.target;
		var parent_prop_div = $(tar).parent().parent().next();
		if( $(event.target).is(":checked")) {
			console.log("Checked", category, prop_value);
			parent_prop_div.css(category,prop_value);
		}
	})
})