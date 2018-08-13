function setChildBg(parent, color)
{
	for ( var i = 0; i < parent.length; i++ )
	{
		parent[i].style.backgroundColor = color
	}
}

function setChildCl(parent, color)
{
	for ( var i = 0; i < parent.length; i++ )
	{
		parent[i].style.color = color
	}
}

var color_dark = '#101010';
var color_light = '#ffffff';

document.body.style.backgroundColor = color_dark

// Search site
if ( window.location.href.includes('search') )
{
	// Main div with search results
	document.getElementById('rcnt').style.backgroundColor = "#101010";
	document.getElementById('rcnt').style.color = "#ffffff";

	// Div with speed of search results
	document.getElementById('topabar').style.backgroundColor = "#101010";
	document.getElementById('resultStats').style.color = "#ffffff";

	// Make all the links white color to be seen on dark background
	setChildCl(document.getElementsByTagName("a"), color_light);

	// Divs around search bar
	document.getElementById('hdtbSum').style.backgroundColor = color_dark;

	// For now there is only one div that uses this class so there is no problem
	// If somethings breaks it might be here. Just sayin.
	document.getElementsByClassName('sfbgg')[0].style.backgroundColor = color_dark;

	setChildBg(document.getElementsByClassName('fbar'), color_dark);

	setChildCl(document.getElementsByClassName('gb_X'), color_dark);

	// Top stories part
	setChildBg(document.getElementsByTagName('g-card-section'), '#161616');
}
else
{
	// On google.com ( main site ) fbar is actually id, not class
	document.getElementById('fbar').style.backgroundColor = color_dark;
}

// For some reason this doesnt want to work
// leaving it to solve it later
//var iconSmalls = document.getElementsByClassName('gb_b');
//for ( var i = 0; i < iconSmalls; i++ )
//{
//	iconSmalls[i].style.backgroundColor = color_light;
//}
//delete iconSmalls;

console.log('Goog Evening !');
