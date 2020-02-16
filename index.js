"use strict"

// DATA

const projectsArray = [
    {
        title: "Zodiac Quiz",
        source:  '<a href="https://clairedhendry.github.io/zodiac-quiz/" target="_blank" rel="noopener"><img id="icon1" src="images/zodiac-page.svg" alt="small icon of quiz app"/></a>',
        description: "Test your knowledge of the Zodiac signs with this short, interactive quiz. Built with jQuery.", 
        live: '<a href="https://clairedhendry.github.io/zodiac-quiz/" target="_blank" rel="noopener">Live</a>',
        repo: '<a href="https://github.com/clairedhendry/zodiac-quiz" target="_blank" rel="noopener">Repo</a>',
    }
]


// FUNCTIONS

function generateBio() {
    return `
    <div class="bio">
    <p>Hi! I'm Claire. I'm a front-end developer interested in making accessible and interactive websites through clean and clever design.</p>
    
    <p>I'm interested in working on a team with great and creative programmers and using my background in illustration and animation to create interactive and user-oriented websites. I love coding because it is both big-picture and all about the details; understanding and breaking down complex problems into bite-sized chunks.</p>
    
    <p id="pagebreak">In my spare time I am blacksmithing, drawing, or hanging out with my cats.</p>

    </div>`
}

function generateDesktopBio() {
    return `
    <div class="bio">
    <p>Hi! I'm Claire. I'm a front-end developer interested in making accessible and interactive websites through clean and clever design.
    <br>
    <br>
    I'm interested in working on a team with great and creative programmers and using my background in illustration and animation to create interactive and user-oriented websites. I love coding because it is both big-picture and all about the details; understanding and breaking down complex problems into bite-sized chunks.
    <br>
    <br>
    In my spare time I am blacksmithing, drawing, or hanging out with my cats.</p>
    </div>`
}

function renderBio() {
    const bio = generateBio();
    $("#bio").append(bio);
}

function renderDesktopBio() {
    const bio = generateDesktopBio();
    $("main").append(bio);
}

function createNavBar() {
    return `<div class="large-screen-nav-bar">
                <img id="logo2" src="images/CDH-logo.svg" alt="circular logo"/>
                <h2>Claire Hendry</h2>
                <div id="tagline">
                <p class="subtitles">web development</p>
                <p class="subtitles">illustration</p>
                <p class="subtitles">animation</p>
                </div>
                <nav>
                        <a id="projectLink">Projects</a>
                        <a id="bioLink">Bio</a>
                        <a id="contactLink">Contact</a>
                        <a id="artistPortfolio" href="https://clairedhendry.com" target="_blank" rel="noopener">Art</a>
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
            <h3>Projects</h3>
            <div class="project first-project">
                <div class="image-container">
                    ${source}
                    <div class="overlay">
                        <div class="text">Click to Play!</div>
                    </div>
                </div>
                <div class="project-description">
                <h3>${title}</h3>
                <p>${description}
                </p>
                <span>${live} ${repo}</span>
                </div>
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

function generateContactPage() {
    return `
    <section id="contact" class="contact">
    <p>Contact me by email at:<a id="contactLink" href="mailto:claire.d.hendry@gmail.com?" target="_blank" rel="noopener"> claire.d.hendry@gmail.com</a>
    <br>
    Or find me at: <a class="footer-links2" href="https://github.com/clairedhendry" target="_blank" rel="noopener"><img src="images/github-icon.svg" alt="GitHub logo"/></a>
        <a class="footer-links2" href="https://www.linkedin.com/in/claire-hendry-18105660/" target="_blank" rel="noopener"><img src="images/linkedin.png" alt="LinkedIn logo"></a>
    </p>
    </section>`
    
}


// HANDLERS

function displayNavLinks() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function clickNavLinks() {
    $("#navLinks").on("click", function(event) {
        $("#navLinks").css("display", "none");
    })
}

window.onscroll = function() {stickyNavbar()};
function stickyNavbar() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 152) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}



const counters = [
    {
        bioCounter: 0,
        projectsCounter: 1,
        contactCounter: 0,
    }
]

function createBio () {
    $("a#bioLink").on("click", function(event) {
        if (counters[0].bioCounter === 1) {
            return null;
        } else {
        $(".projects").remove();
        $(".contact").remove();
        renderDesktopBio();
        counters[0].bioCounter = 1;
        counters[0].projectsCounter = 0;
        counters[0].contactCounter = 0;
        }
    });
}

function createProjects() {
    $("a#projectLink").on("click", function(event) {
        if (counters[0].projectsCounter === 1) {
            return null;
        } else {
      $(".bio").remove();
      $(".contact").remove();
      const projects = generateProjects();
      $("main").append(projects);
      counters[0].bioCounter = 0;
      counters[0].projectsCounter = 1;
      counters[0].contactCounter = 0;
        }
    })
}

function createContact() {
    $("a#contactLink").on("click", function(event) {
        if (counters[0].contactCounter === 1) {
            return null;
        } else {
            $(".bio").remove();
            $(".projects").remove();
            const contact = generateContactPage();
            $("main").append(contact);
            counters[0].bioCounter = 0;
            counters[0].projectsCounter = 0;
            counters[0].contactCounter = 1;
        }
    })
}


// FUNCTION CALLS

function implementPortfolio() {
    clickNavLinks();
    renderBio()
    createNavBar();
    renderNavBar();
    generateProjects();
    createBio();
    createProjects();
    createContact();
    
}

$(implementPortfolio);
