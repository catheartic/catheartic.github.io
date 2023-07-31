var page_count = 0;
function previousPage() {

	var viewer1 = document.getElementById("viewer1");
	
	var viewer1_link = viewer1.getAttribute("src");
	
	
	if (page_count == 0) {
		var errorMessage = document.getElementById("error");
		errorMessage.innerHTML = "First page reached";
	} else {
		page_count = page_count - 1;

		viewer1_link = "./issue1/" + page_count + ".png";
		
		viewer1.setAttribute("src",viewer1_link);
		}
		
}

function nextPage() {
	var viewer1 = document.getElementById("viewer1");
	
	var viewer1_link = viewer1.getAttribute("src");
	
	
	if (page_count == 32) {
		var errorMessage = document.getElementById("error");
		errorMessage.innerHTML = "Last page reached";
	} else {
		page_count = page_count + 1;


		viewer1_link = "./issue1/" + page_count + ".png";
		
		viewer1.setAttribute("src",viewer1_link);
	}
}
