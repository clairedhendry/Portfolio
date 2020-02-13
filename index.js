"use strict"

// DATA

const projectsArray = [
    {
        title: "Zodiac Quiz",
        source:  '<a href="https://clairedhendry.github.io/zodiac-quiz/"><img id="icon1" src="images/quiz-title-horizontal.png" alt="small icon of quiz app"/></a>',
        description: "Test your knowledge of the Zodiac signs with this short, interactive quiz. Built with jQuery.", 
        live: '<a href="https://clairedhendry.github.io/zodiac-quiz/">Live</a>',
        repo: '<a href="https://github.com/clairedhendry/zodiac-quiz">Repo</a>',
    }
]


// FUNCTIONS

function generateBio() {
    return `
    <div class="bio">
    <p>Hi! I'm Claire. I'm a front-end developer interested in making accessible and interactive websites through clean and clever design.</p>
 
    <p>I'm interested in using my background in illustration and animation to create interactive and user-oriented websites. A bit of a Jill-of-all-trades, I love coding because it is both big-picture and all about the details; understanding and breaking down complex problems into bite-sized chunks.</p>
    </div>`
}

function renderBio() {
    const bio = generateBio();
    $("#bio").append(bio);
}

function renderDesktopBio() {
    const bio = generateBio();
    $("main").append(bio);
}

function createNavBar() {
    return `<div class="large-screen-nav-bar">
                <img id="logo" src="images/CDH-logo.svg"/>
                <h1>Claire Hendry</h1>
                <div id="tagline">
                <h3>web development</h3>
                <h4>illustration</h4>
                <h5>animation</h5>
                </div>
                <nav role="navigation">
                        <a id="projectLink" href="#projects">Projects</a>
                        <a id="bioLink" href="#bio">Bio</a>
                        <a id="contactLink" href="mailto:claire.d.hendry@gmail.com?" target="_top">Contact</a>
                        <a id="artistPortfolio" href="https://clairedhendry.com">Art</a>
                </nav>
            </div>`
}

function renderNavBar() {
    const largeNavBar = createNavBar();
    $("main").prepend(largeNavBar);
}


function generateProjectInfo(title, source, description, live, repo) { 
    return `
    <section id="projects" class="projects">
            <h2>Projects</h2>
            <div class="project first-project">
            <div class="image-container">
                ${source}
                <div class="overlay">
                    <div class="text">Click to Play!</div>
                </div>
            </div>
            <div class="project-description">
            <p>${title}</p>
            <p>${description}
            </p>
            <span>${live} ${repo}</span>

            </div>
    </section>`
}

function generateProjects() {
    const title = projectsArray[0].title;
    const source = projectsArray[0].source;
    const description = projectsArray[0].description;
    const live = projectsArray[0].live;
    const repo = projectsArray[0].repo;
    const project = generateProjectInfo(title, source, description, live, repo);
    $("main").append(project);
}




// HANDLERS

window.onscroll = function() {stickyNavbar()};
function stickyNavbar() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function createBio () {
    $("a#bioLink").on("click", function(event) {
        $(".projects").remove();
        renderDesktopBio();
    });
}

function createProjects() {
    $("a#projectLink").on("click", function(event) {
      $(".bio").remove();
      const projects = generateProjects();
      $("main").append(projects);

    })
}

// FUNCTION CALLS

function implementPortfolio() {
    renderBio()
    createNavBar();
    renderNavBar();
    generateProjects();
    createBio();
    createProjects();
}

$(implementPortfolio);
