let base = [
	{
		"name" : "PageSpeed Insights",
		"url" : "https://pagespeed.web.dev/",
		"description" : "Find out how to speed up the loading of your pages on any devices",
		"type" : ["website", "analyze", "speed", "tool", "page"],
		"id" : "0"
	},
	{
		"name" : "CSS Gradient",
		"url" : "https://cssgradient.io/",
		"description" : "CSS Gradient is a happy little website and free tool that lets you create a gradient background for websites",
		"type" : ["css", "gradient", "background", "tool"],
		"id" : "0"
	},
	{
		"name" : "Unicode Character Table",
		"url" : "https://unicode-table.com/en/",
		"description" : "Website with Unicode characters",
		"type" : ["unicode", "emoji", "character", "symbol"],
		"id" : "0"
	},
	{
		"name" : "Google Fonts",
		"url" : "hhhttps://fonts.google.com/",
		"description" : "A service where a large number of different fonts are collected",
		"type" : ["fonts", "collection", "character", "symbol"],
		"id" : "0"
	},
	{
		"name" : "Code IMG",
		"url" : "https://codeimg.io/",
		"description" : "It will make a beautiful picture out of your code fragment",
		"type" : ["code", "tool", "design"],
		"id" : "0"
	},
	{
		"name" : "Carbon",
		"url" : "hhttps://carbon.now.sh/",
		"description" : "Create and share beautiful images of your source code",
		"type" : ["code", "tool", "design"],
		"id" : "0"
	}
];

let postNumbering = (x = 0) => base.forEach((item) => item['id'] = x += 1);
postNumbering();