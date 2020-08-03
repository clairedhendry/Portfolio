"use strict"

// DATA

const projectsArray = [
    {
        title: "Creative's Block",
        source: '<a href="https://creatives-block-client.vercel.app/" target=_"blank" rel="noopener"><img class="icon" src="images/creativesblock.png" alt="small icon of creatives block app" /></a>',
        description: "A platform for artists and creatives. Post work in progress and get constructive feedback from a community of other creatives. Built with React, Node.js, Express, and PostgreSQL.",
        live: '<a href="https://creatives-block-client.vercel.app/" target=_"blank" rel="noopener">Live</a>',
        client_repo: '<a href="https://github.com/clairedhendrycreatives-block-client" target="_blank" rel="noopener">Client Repo</a>',
        api_repo: '<a href="https://github.com/clairedhendry/creatives-block-api" target="_blank" rel="noopener">API Repo</a>',
        projectNumber: "first-project"
    },
    {
        title: "Escape to Nature",
        source: '<a href="https://nature-generator-client.now.sh/" target="_blank" rel="noopener"><img class="icon" src="images/escapetonature.png" alt="small icon of escape to nature app" /></a>',
        description: "Choose a color to generate a slideshow of nature images with accompanying soundscape. Built with React, Node.js, Express, and PostgreSQL.",
        live: '<a href="https://nature-generator-client.now.sh/" target="_blank" rel="noopener">Live</a>',
        client_repo: '<a href="https://github.com/clairedhendry/nature-generator-client" target="_blank" rel="noopener">Client Repo</a>',
        api_repo: '<a href="https://github.com/clairedhendry/nature-generator-api" target="_blank" rel="noopener">API Repo</a>',
        projectNumber: "second-project"
    },
    {
        title: "Zodiac Quiz",
        source: '<a href="https://clairedhendry.github.io/zodiac-quiz/" target="_blank" rel="noopener"><img class="icon" src="images/zodiac-page.svg" alt="small icon of quiz app"/></a>',
        description: "Test your knowledge of the Zodiac signs with this short, interactive quiz. Built with jQuery.",
        live: '<a href="https://clairedhendry.github.io/zodiac-quiz/" target="_blank" rel="noopener">Live</a>',
        client_repo: '<a href="https://github.com/clairedhendry/zodiac-quiz" target="_blank" rel="noopener">Repo</a>',
        api_repo: '',
        projectNumber: "third-project",
    },
    {
        title: "Nature Image Generator",
        source: '<a href="https://clairedhendry.github.io/Nature-Image-Generator/" target="_blank" rel="noopener"><img class="icon" src="images/example-image-portrait.png" alt="small icon of nature generator app"/></a>',
        description: "Choose a color to generate a slideshow of nature images. Built with jQuery.",
        live: '<a href="https://clairedhendry.github.io/Nature-Image-Generator/" target="_blank" rel="noopener">Live</a>',
        client_repo: '<a href="https://github.com/clairedhendry/Nature-Image-Generator" target="_blank" rel="noopener">Repo</a>',
        api_repo: '',
        projectNumber: "fourth-project"
    },

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
    <div class="bio2">
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

function generateProjectInfo(title, source, description, live, client_repo, api_repo, projectNumber) {
    return `<div class="project ${projectNumber}">
                <div class="image-container">
                    ${source}
                    <div class="overlay">
                        <div class="text">Click to View!</div>
                    </div>
                </div>
                <div class="project-description">
                <h3>${title}</h3>
                <p>${description}
                </p>
                <span>${live} ${client_repo} ${api_repo}</span>
                </div>
            </div>`
}

function generateProjects() {
    $("main").append(`<section id="projects" class="projects">
   <h3>Projects</h3>
</section>`)

    for (let i = 0; i < projectsArray.length; i++) {
        let title = projectsArray[i].title;
        let source = projectsArray[i].source;
        let description = projectsArray[i].description;
        let live = projectsArray[i].live;
        let client_repo = projectsArray[i].client_repo;
        let api_repo = projectsArray[i].api_repo;
        let projectNumber = projectsArray[i].projectNumber;
        let project = generateProjectInfo(title, source, description, live, client_repo, api_repo, projectNumber);
        $("#projects").append(project);
    }
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
    let x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function clickNavLinks() {
    $("#navLinks").on("click", function (event) {
        $(this).css("display", "none");
    })
}


function reload() {
    $("#navLinks").on("click", function (event) {
        if (counters[0].bioCounter === 1) {
            location.reload();
        } if (counters[0].contactCounter === 1) {
            location.reload();
        }
    })
}

window.onscroll = function () { stickyNavbar() };
function stickyNavbar() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 152) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

const counters = {
    bioCounter: 0,
    projectsCounter: 1,
    contactCounter: 0,
};



function createBio() {
    $("a#bioLink").on("click", function (event) {
        if (counters.bioCounter === 1) {
            return null;
        } else {
            $(".bio").remove();
            $(".projects").remove();
            $(".contact").remove();
            renderDesktopBio();
            counters.bioCounter = 1;
            counters.projectsCounter = 0;
            counters.contactCounter = 0;
        }
    });
}

function createProjects() {
    $("a#projectLink").on("click", function (event) {
        if (counters.projectsCounter === 1) {
            return null;
        } else {
            $(".bio").remove();
            $(".bio2").remove();
            $(".contact").remove();
            const projects = generateProjects();
            $("main").append(projects);
            counters.bioCounter = 0;
            counters.projectsCounter = 1;
            counters.contactCounter = 0;
        }
    })
}

function createContact() {
    $("a#contactLink").on("click", function (event) {
        if (counters.contactCounter === 1) {
            return null;
        } else {
            $(".bio").remove();
            $(".bio2").remove();
            $(".projects").remove();
            const contact = generateContactPage();
            $("main").append(contact);
            counters.bioCounter = 0;
            counters.projectsCounter = 0;
            counters.contactCounter = 1;
        }
    })
}

$("img#logo").on("click", function (event) {
    location.reload();
})


// FUNCTION CALLS

function implementPortfolio() {

    reload();
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
