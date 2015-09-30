


var ul = document.createElement("ul")
var li = document.createElement('li')
ul.id = 'ulID'
li.className = 'list'
var imagesArray = []
var img = document.getElementsByTagName( 'img' )

for (var i = 0; i < img.length; i++) {
		 img[i].className = 'className'
		document.getElementsByClassName('className')

		
		var images = img[i] 
		// li.appendChild(images[0])
		
		imagesArray.push(images)
};

console.log(imagesArray)

var listArray = []
for( var i in imagesArray){
	listArray.push(imagesArray[i])

	ul.appendChild(imagesArray[i])
	
	document.getElementById('container').appendChild(ul)
}

function myFunction() {
   $(function() {
    $('img').wrap('<li>');
});
}
$(document).ready(myFunction);
