let inpWords = [];
let tags = [];
let main_divs = [];
let page_count = 0;
const click_counts = {};


window.onload = () =>
{
  render_content();

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


const get_tags = (x) =>
{
  let main_ul = document.createElement('ul');

  for (let item of x['type']) {
    main_ul.append((function() {
      let main_li = document.createElement('li');
      main_li.innerHTML = item;
      return main_li;
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


const create_block = (divs) =>
{
  for (let elm of divs)
  {
    let main_div = document.createElement("div");
    let title = document.createElement("div");
    let descr = document.createElement("p");
    let links = document.createElement("div");

    main_div.setAttribute("id", `post-${elm['id']}`);
    title.innerHTML = elm["name"];
    title.setAttribute("id", "app-title");
    descr.innerHTML = elm["description"];

    const tags_list = get_tags(elm);
    const links_list = get_links(elm);

    main_div.append(title);
    main_div.append(descr);
    main_div.append(links_list);
    main_div.append(document.createElement("hr"));
    main_div.append(tags_list);
    document.getElementById("main-content-block").append(main_div);
  }
}


function filter_tags(btn_txt)
{
  let posts_have = [];

  for (let item of base) { if (item['type'].includes(btn_txt) == true) posts_have.push(item); }
  document.getElementById("main-content-block").innerHTML = "";
  document.getElementById("load_more").style.visibility = "hidden";
  create_block(posts_have);

  let x = document.getElementById("main-content-block").children;
  for (let i = 0; i < x.length; i++)
  {
    for (let item of x[i].children[4].children)
    {
      if (btn_txt == item.innerHTML) set_theme(item, 2);
      else set_theme(item, 1);
    }
  }
}


function render_content()
{
  const next_idx = page_count + 5;
  const divs = base.slice(page_count, next_idx);
  page_count = next_idx;

  //main_divs = divs;

  main_divs = main_divs.concat(divs);
  create_block(divs);
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


document.getElementById("load_more").addEventListener("click", () => render_content());


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
        document.getElementById("main-content-block").innerHTML = "";

        create_block(main_divs);
        document.getElementById("load_more").style.visibility = 'visible';
        return;
      }

      change_color(box);
      filter_tags(box.innerHTML);
    });
  });
};

