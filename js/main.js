// $('.jpg').lightbox({
//   maxHeight: 500,
//   maxWidth: 500
// })

// $(document).ready(function() {
// 	$('#search').hideseek();
// });

searchBar.addEventListener( "keyup", function() {
// Declare variables
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById('searchBar');
filter = input.value.toLowerCase();
ul = document.getElementById('myImages');
li = ul.getElementsByTagName('li');

//Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i += 1) {
  photoInfo = li[i].getAttribute("data-title");
  txtValue = photoInfo.textContent || photoInfo.innerText;
  if (txtValue.toLowerCase().indexOf(filter) > -1) {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
}
});
