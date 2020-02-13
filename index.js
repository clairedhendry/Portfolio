"use strict"

// DATA

const projectsArray = [
    {
        title: "Zodiac Quiz",
        source:  "href='https://clairedhendry.github.io/zodiac-quiz/'><img id='icon1' src='images/quiz-title-horizontal.png' alt='small icon of quiz app'",
        description: "Test your knowledge of the Zodiac signs with this short, interactive quiz. Built with jQuery.", 
    }
]


// FUNCTIONS

function generateDesktopBio() {
    return `<div class="desktop-bio hidden">
    <p>Hi! I'm Claire. I'm a front-end developer interested in making accessible and interactive websites through clean and clever design.</p>
 
    <p>I'm interested in using my background in illustration and animation to create interactive and user-oriented websites. A bit of a Jill-of-all-trades, I love coding because it is both big-picture and all about the details; understanding and breaking down complex problems into bite-sized chunks.</p>
    </div>`
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
                        <a id="bioLink" href="#bio">Bio</a>
                        <a id="projectLink" href="#projects">Projects</a>
                        <a id="contactLink" href="#contact-form">Contact</a>
                        <br>
                        <a id="artistPortfolio" href="https://clairedhendry.com">Art</a>
                </nav>
            </div>`
}

function renderNavBar() {
    const largeNavBar = createNavBar();
    $("main").prepend(largeNavBar);
}


function generateProjectInfo(source, description) {cd 
    return `<div class="project first-project">
    <a ${source}/></a>
    <div class="project-description">
    <p>${description}
    </p>
    </div>`
}

function generateProjects() {
    const source = projects[0].source;
    const description = projects[0].description;
    const project = generateProjectInfo(source, description);
    $("#projects").append(project);
}

function renderProjects() {
    generateProjects();
}


// HANDLERS

// $(#bio a).hover(function(event) {
//     $(main).fadeTo(0, 0.7);
//     const bio = generateDesktopBio();
//     $(.desktop-bio).removeClass("hidden");

// }


// FUNCTION CALLS

function implementPortfolio() {
    createNavBar();
    renderNavBar();
}

$(implementPortfolio);
