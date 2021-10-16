const projects = [
    {
        id: 1,
        img: './images/media.png',
        title: 'pest control website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur quas dolor nulla fugiat facilis fuga nihil harum nam cumque vel, deserunt veniam! Fuga error iste, earum quos similique temporibus!'
        languageA: './assets/html5-brands.svg',
        languageB: './assets/css3-alt-brands.svg',
        languageC: './assets/js-brands.svg',
        liveSiteURL: '#',
        githubURL: '#',
    },
    {
        id: 2,
        img: './images/media.png',
        title: 'restaurant website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur quas dolor nulla fugiat facilis fuga nihil harum nam cumque vel, deserunt veniam! Fuga error iste, earum quos similique temporibus!'
        languageA: './assets/html5-brands.svg',
        languageB: './assets/sass-brands.svg',
        languageC: './assets/js-brands.svg',
        liveSiteURL: '#',
        githubURL: '#',
    },
];

const sectionCenter = document.querySelector('.project-wrapper');

window.addEventListener('DOMContentLoaded', ()=> {
    displayProjects(projects);
})

function displayProjects (projectItems) {
    let displayMenu = projectItems.map((item)=>{

        return `<div class="project1 project-unit" id="project-specific">
                    <img src=${item.img} id="media-formats" alt="${item.title}">
                    <h2 class="project-name">
                        ${item.title}
                    </h2>
                    <p class="project-description">
                        ${item.description}
                    </p>
                    <div class="made-with">
                        <div class="made-with-title">
                            <h3>made with</h3>
                        </div>
                        <div class="languages">
                            <img src=${item.languageA} alt="">
                            <img src=${item.languageB} alt="">
                            <img src=${item.languageC} alt="">
                        </div>
                    </div>
                    <div class="project-links">
                        <a href=${item.liveSiteURL}>live site</a>
                        <div class="vertical-line"></div>
                        <a href=${item.githubURL}>github</a>
                    </div>
                
                </div>`
    })
}