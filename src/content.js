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
		"type" : ["css", "gradient", "background", "tool", "page"],
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
		"name" : "Glassmorphism CSS Generator",
		"url" : "https://hype4.academy/tools/glassmorphism-generator",
		"description" : "Flexible generation of beautiful CSS glassmorphism",
		"type" : ["tool", "design", "generator", "background", "css"],
		"id" : "0"
	},
	{
		"name" : "JSON Parser",
		"url" : "http://json.parser.online.fr/",
		"description" : "Website for parsing json files",
		"type" : ["tool", "parser", "character", "file"],
		"id" : "0"
	},
	{
		"name" : "Carbon",
		"url" : "hhttps://carbon.now.sh/",
		"description" : "Create and share beautiful images of your source code",
		"type" : ["code", "tool", "design"],
		"id" : "0"
	},
	{
		"name" : "Hyper",
		"url" : "https://hyper.is/",
		"description" : "Project is to create a beautiful and extensible experience for command-line interface users, built on open web standards",
		"type" : ["cmd", "command-line", "terminal", "tool"],
		"id" : "0"
	},
	{
		"name" : "Modern JavaScript Tutorial",
		"url" : "https://javascript.info/",
		"description" : "Here is a tutorial on JavaScript, starting with the basics, which includes many subtleties and features of JavaScript/DOM",
		"type" : ["tutorial", "js", "javascript", "documentation"],
		"id" : "0"
	},
	{
		"name" : "Namelix",
		"url" : "https://namelix.com/",
		"description" : "Generate a short, brandable business name using artificial intelligence",
		"type" : ["tool", "generator", "page", "website"],
		"id" : "0"
	},
	{
		"name" : "Monkeytype",
		"url" : "https://monkeytype.com/",
		"description" : "Analyzes the speed of your typing on the keyboard",
		"type" : ["tool", "analyze", "speed"],
		"id" : "0"
	}
];

let postNumbering = (x = 0) => base.forEach((item) => item['id'] = x += 1);
postNumbering();