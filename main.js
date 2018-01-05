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
	});
	var divs = ['red','blue','green','orange','purple'];
	$(".prop-entered").on('keyup', function (e) {
	    if (e.keyCode != 13) return;
	    var elem = $(e.target);
	    var prop_value = e.target.value;
	    var category = elem.attr('category');
	    var item_no = elem.attr('item');
	    var prop_div = elem.parent().parent().next().find('.'+divs[item_no-1]); 
	    console.log(elem,prop_value,category,item_no,prop_div);
	    prop_div.css(category, prop_value);
	});
	$('.child-prop-selected').click(function(e){
		var elem = $(e.target);
	    var prop_value = e.target.value;
	    

	    var category = elem.attr('category');
	    var prop_div = elem.parent().parent().next().find('.green'); 
	    console.log(elem,prop_value,category,prop_div);
	    if(prop_value === 'stretch')
	    	prop_div.css('height','auto');
	    else
	    	prop_div.css('height','200px');
	    prop_div.css(category, prop_value);
	})
})