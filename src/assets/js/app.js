$(document).foundation();


// server side call?

//var posts = [];	

$(function(){

  $.getJSON('https://www.googleapis.com/blogger/v3/blogs/5224594161388198627/posts?key=AIzaSyCBOeJOBn0l_c2dWR-eUCk5qZ6_K11u8gw', function(data){
    showResults(data.items);
    //console.log(data.items); 
  });
});

function showResults(results){
	var item = {};
	var posts = [];
	var result = "";
	$.each(results, function(index, value){ 
		//console.log(results[index]);
		item = {
			"content": results[index].content,
			"title": results[index].title
		};
		result = "<li><h2>" + item.title + "</h2><div class='content'>" + item.content + "</div></li>"
		$(".results").append(result);
		posts.push(item);
	});
	return posts; 
}
