let inpWords = [];
let tags = [];
let page_count = 0;
const click_counts = {};


window.onload = () =>
{
	randomArrPlcHolder();
	createContent();
	//create_content_new();
	assemble_tags(base);
  btn_event();

	document.getElementById("apps-quantity").innerHTML = `Apps: ${base.length}`;
	document.getElementById("tags-quantity").innerHTML = `Tags: ${tags.length}`;
}


function dark(item) {
  item.style.border = "2px solid var(--medium-dark-purple)";
  item.style.backgroundColor = "var(--medium-dark-purple)";
  item.style.color = "var(--light-purple)";
}
function light(item) {
  item.style.border = "2px solid var(--lightest-purple)";
  item.style.backgroundColor = "var(--lightest-purple)";
  item.style.color = "var(--medium-dark-purple)";
}
function set_theme(item, int) {
  const darktheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (int == 1) (darktheme.matches) ? dark(item) : light(item);
  else if (int == 2) (darktheme.matches) ? light(item) : dark(item);
}


function randomArrPlcHolder()
{
	let arr = [];
	let copyArrElem = (y) => {for (let x of y) arr.push(x);}
	for (let x of base) copyArrElem(x['type']);
	arr.sort()
	inpWords = arr.filter((item, pos) => arr.indexOf(item) == pos);
}


function assemble_tags(x)
{
	const test = [];

	base.forEach((item) => { for (const value of item['type']) test.push(value); });
	tags = [...new Set(test)];
	tags.sort();

	for (const i of tags)
  {
  	let tag_btn = document.createElement('button');
  	tag_btn.innerHTML = i;
  	document.getElementById("tags-block").append(tag_btn);
	}
}


function createContent()
{
	document.getElementById("main-content-block").innerHTML = "";

	const createList = (xItem) =>
	{
		let mainUl = document.createElement('ul');

		for (let item of xItem['type']) {
			mainUl.append((function() {
				let mainLi = document.createElement('li');
				mainLi.innerHTML = item;
				return mainLi;
			})());
		}

		return mainUl;
	};

	const get_links = (x) =>
	{
		let linksDiv = document.createElement("div");
		linksDiv.setAttribute("id", "app-links");
		const keys = Object.entries(x["url"]);

		for (let item of keys)
		{
			let link = document.createElement("a");
			link.setAttribute("href", item[1]);
			link.innerHTML = item[0];
			linksDiv.append(link);
		}

		return linksDiv;
	};

	for (let item of base)
	{
		let mainDiv = document.createElement('div');
		let mainTitle = document.createElement('div');
		let mainDes = document.createElement('p');

		mainDiv.setAttribute("id", `post-${item['id']}`);
		mainTitle.innerHTML = item['name'];
		mainDes.innerHTML = item['description'];
		mainTitle.setAttribute("id", "app-title");

		let list = createList(item);

		mainDiv.append(mainTitle);
		mainDiv.append(mainDes);
		mainDiv.append(get_links(item));
		mainDiv.append(document.createElement('hr'));
		mainDiv.append(list);
		document.getElementById("main-content-block").append(mainDiv);
	}
}


function filter_content(btn_txt)
{
	let postsHave = [];
	let postsHavent = [];

	for (let item of base)
	{
		if (item['type'].includes(btn_txt) == true) postsHave.push(`post-${item['id']}`);
		else postsHavent.push(`post-${item['id']}`);
	}

	for (let item of postsHave)
	{
		let x = document.getElementById(item);
		document.getElementById(item).style.display = "block";

		for (let item of x.children[4].children)
		{
			if (btn_txt == item.innerHTML) set_theme(item, 2);
      else set_theme(item, 1);
		}
	}
	for (let item of postsHavent) document.getElementById(item).style.display = "none";
  prev_btn = btn_txt;
}


function create_content_new()
{
	const get_tags = (x) =>
	{
		let main_ul = document.createElement('ul');

		for (let item of x['type']) {
			main_ul.append((function() {
				let main_li = document.createElement('li');
				main_li.innerHTML = item;
				return main_li
			})());
		}

		return main_ul;
	};

	const get_links = (x) =>
	{
		let links_div = document.createElement("div");
		links_div.setAttribute("id", "app-links");
		const keys = Object.entries(x["url"]);

		for (let i of keys)
		{
			let link = document.createElement("a");
			link.setAttribute("href", i[1]);
			link.innerHTML = i[0];
			links_div.append(link);
		}

		return links_div;
	};

	const take_elm_in_range = () =>
	{
		let elms = [];
		if ((page_count + 10) > base.length) elms = base.slice(page_count, base.length);
		for (let i = page_count; i < page_count + 5; i++) elms.push(base[i]);
		return elms;
	}

	const elms = take_elm_in_range();

	for (let elm of elms)
	{
		let main_div = document.createElement('div');
		let title = document.createElement('div');
		let descr = document.createElement('p');
		let links = document.createElement('div');

		main_div.setAttribute("id", `post-${elm['id']}`);
		title.innerHTML = elm['name'];
		title.setAttribute("id", "app-title");
		descr.innerHTML = elm['description'];

		const tags_list = get_tags(elm);
		const links_list = get_links(elm);

		main_div.append(title);
		main_div.append(descr);
		main_div.append(links_list);
		main_div.append(document.createElement('hr'));
		main_div.append(tags_list);
		document.getElementById("main-content-block").append(main_div);
	}
}


document.getElementById("main-content-block").addEventListener("scroll", function() {
  if (document.getElementById("main-content-block").scrollTop +
      document.getElementById("main-content-block").clientHeight >=
      document.getElementById("main-content-block").scrollHeight)
  {
    create_content();
  }
});


const btn_event = () =>
{
  const change_color = (curr_box) =>
  {
    document.querySelectorAll("#tags-block > button").forEach(box =>
    {
      if (curr_box == box) set_theme(box, 2);
      else set_theme(box, 1);
    });

  };


  document.querySelectorAll("#tags-block > button").forEach((box, idx) => {
    box.addEventListener('click', () =>
    {
      if (!click_counts[idx]) click_counts[idx] = 0;

      click_counts[idx]++;

      if (click_counts[idx] === 2)
      {
        click_counts[idx] = 0;
        set_theme(box, 1);
        return createContent();
      }

      change_color(box);
      filter_content(box.innerHTML);
    });
  });
};

