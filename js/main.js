searchBar.addEventListener("keyup", function() {
  // Declare variables
  const input = document.getElementById('searchBar');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('myImages');
  const li = ul.getElementsByTagName('a');

  //Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i += 1) {
    photoInfo = li[i].getAttribute("data-title");
    if (photoInfo.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
