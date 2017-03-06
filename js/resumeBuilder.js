var bio =
{
	"name": "Hiumathy Lam",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "(972) 904-6479",
		"email": "hiumathy@gmail.com",
		"location": "16589 County Rd. 250, Terrell, TX 75160",
		"twitter": "@hiumathy",
		"github": "https://github.com/MonteJagger",
		"linkedin": "https://linkedin.com/in/hiumathy"
	},
	"bioPic": "images/bioPic.jpg",
	"welcome": "Hi, I'm Hiumathy",
	"skills": ["HTML", "CSS", "JavaScript", "jQuery"]
}

var work =
{
	"jobs": [{
		"start": "6/2014",
		"employer": "Mad Science",
		"title": "Science Instructor",
		"dates": "5/2014 - 1/2015",
		"location": "Dallas, TX",
		"description": ["Taught dense topics such as robotics, space and physics and made it easy to understand for children age 5-11",
		"Created and applied a variety of teaching methods to fulfill the needs of diverse abilities and circumstances",
		"Worked with educational leadership to develop a 8-12 week curriculum with students as an after school program",
		"Gathered the necessary learning materials for experiments and projects needed for the curriculum",
		"Being able to explain complex problems to students as well as helping students find solutions"]
	}]
}

var education =
{
	"schools": [{
		"name": "University of Texas at Arlington",
		"location": "Arlington, TX",
		"degree": "Bachelor's Degree in Computer Science",
		"gradDate": "12/2017",
		"Major": "Computer Science"
	}, {
		"name": "Dallas County Community College District",
		"location": "Dallas, TX",
		"degree": "Associate of Science",
		"gradDate": "5/2013",
		"Major": "Computer Science"
	}],
	"onlineCourse": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2017,
		"website": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"title": "Front-End Developer",
		"school": "Codecademy",
		"dates": 2016,
		"website": "https://www.codecademy.com/learn/all"
	}]
}

var project =
{
	"portfolio": [{
		"title": "Portfolio",
		"date": "1/2017",
		"description": "A responsive, optimize portfolio that gives a preview of some of the work that I have done as a graphic designer.",
		"picture": "images/MyWebsite.png"
	}]
}


function appendFunc(idClass, HTML, replaced) {
	var formatted = HTML.replace("%data%", replaced)
	$(idClass).append(formatted);
}

appendFunc("#header", HTMLheaderName, bio.name);
appendFunc("#header", HTMLheaderRole, bio.role);
appendFunc("#header", HTMLbioPic, bio.bioPic);


// checks to see if there are any skills in bio
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart); // adds header
  // adds each element to id skills
  bio.skills.forEach(function(element) {
    var formattedHTMLskills = HTMLskills.replace("%data%", element);
    $("#skills").append(formattedHTMLskills);
  });
}

// iterates through work
for (var item in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var jobs = work.jobs[item];
	appendFunc(".work-entry:last", HTMLworkEmployer, jobs.employer.concat(" - "+ jobs.title));
	appendFunc(".work-entry:last", HTMLworkDates, jobs.dates);

	jobs.description.forEach(function(element) {
		var formattedDescription = HTMLworkDescription.replace("%data%", element);
		$(".work-entry:last").append(formattedDescription);
	});
}

$("#main").append(internationalizeButton);

function inName(name) {
	var names = name.trim().split(" ");
	names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();

  names = names[0].concat(" " +names[1]);
  return names;
}

project.display = function() {
	var portf = project.portfolio;
	for (var item in portf) {
		$("#projects").append(HTMLprojectStart);
		appendFunc(".project-entry:last", HTMLprojectTitle, portf[item].title);
		appendFunc(".project-entry:last", HTMLprojectDates, portf[item].date);
		appendFunc(".project-entry:last", HTMLprojectDescription, portf[item].description);
		appendFunc(".project-entry:last", HTMLprojectImage, portf[item].picture);
	}
}
project.display();

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});
