var page_count = 0;
function previousPage() {

	var viewer1 = document.getElementById("viewer1");
	var viewer2 = document.getElementById("viewer2");
	
	var viewer1_link = viewer1.getAttribute("src");
	var viewer2_link = viewer2.getAttribute("src");
	
	
	if (page_count == 0) {
		var errorMessage = document.getElementById("error");
		errorMessage.innerHTML = "First page reached";
	} else {
		page_count = page_count - 1;
		
		var page_count_2 = page_count + 1;

		viewer1_link = "./issue1/" + page_count + ".png";
		viewer2_link = "./issue1/" + page_count_2 + ".png";
		
		viewer1.setAttribute("src",viewer1_link);
		viewer2.setAttribute("src",viewer2_link);
		}
		
}

function nextPage() {
	var viewer1 = document.getElementById("viewer1");
	var viewer2 = document.getElementById("viewer2");
	
	var viewer1_link = viewer1.getAttribute("src");
	var viewer2_link = viewer2.getAttribute("src");
	
	
	if (page_count == 31) {
		var errorMessage = document.getElementById("error");
		errorMessage.innerHTML = "Last page reached";
	} else {
		page_count = page_count + 1;
		
		var page_count_2 = page_count + 1;

		viewer1_link = "./issue1/" + page_count + ".png";
		viewer2_link = "./issue1/" + page_count_2 + ".png";
		
		viewer1.setAttribute("src",viewer1_link);
		viewer2.setAttribute("src",viewer2_link);
	}
}
