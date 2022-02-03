let inpWords = ['code editor', 'analyze', 'generate', 'manage', 'tool', 'background'];

window.onload = () => {
	randomPlaceholderTxt();
	createContent();
}

function randomPlaceholderTxt() {
	let word = inpWords[Math.floor(Math.random() * inpWords.length)];
	document.getElementById("main-search-input").placeholder = `Enter for example: ${word}`;
}

function createContent() {
	document.getElementById("main-content-block").innerHTML = "";

	function createList(xItem) {
		let mainUl = document.createElement('ul');

		for (let item of xItem['type']) {
			let mainLi = document.createElement('li');
			mainLi.innerHTML = item;
			mainUl.append(mainLi);
		}

		return mainUl;
	}

	for (let item of base) {
		let mainDiv = document.createElement('div');
		let mainUrl = document.createElement('a');
		let mainDes = document.createElement('p');

		mainDiv.setAttribute("id", `post-${item['id']}`);
		mainUrl.setAttribute("href", item['url']);
		mainUrl.innerHTML = item['name'];
		mainDes.innerHTML = item['description'];

		let list = createList(item);

		mainDiv.append(mainUrl);
		mainDiv.append(mainDes);
		mainDiv.append(list)

		document.getElementById("main-content-block").append(mainDiv);
	}
}

function filterContent() {
	let inpText = document.getElementById("main-search-input").value.toLowerCase();
	if (inpText == "") return createContent();


	let postsHave = [];
	let postsHavent = [];

	for (let item of base) {
		if (item['type'].includes(inpText) == true) postsHave.push(`post-${item['id']}`);
		else postsHavent.push(`post-${item['id']}`);
	}

	for (let item of postsHave) document.getElementById(item).style.display = "block";
	for (let item of postsHavent) document.getElementById(item).style.display = "none";
}

document.getElementById("main-search-input").addEventListener("input", (e) => filterContent());

// for (let item2 of item.children[2].children) {
// 			if (inpText == item2.innerHTML) {
// 				console.log("true")
// 			} else {
// 				console.log(item.style.display = "none")
// 			}
// 		}