let inpWords = ['code editor', 'analyze', 'generate', 'manage', 'tool'];

window.onload = () => {
	randomPlaceholderTxt();
	createContent();
}

function randomPlaceholderTxt() {
	let word = inpWords[Math.floor(Math.random() * inpWords.length)];
	document.getElementById("main-search-input").placeholder = `Enter for example: ${word}`;
}

function createContent() {

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
	let input = document.getElementById("main-search-input").value;

	//let content = document.querySelectorAll("#main-content-block > div > ul > li");
}

document.getElementById("main-search-button").addEventListener("click", (e) => filterContent());

