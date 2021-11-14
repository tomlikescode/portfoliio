const projects = [
    {
        id: 1,
        img: './images/media.png',
        title: 'HTML Email - Canva',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur quas dolor nulla fugiat facilis fuga nihil harum nam cumque vel, deserunt veniam! Fuga error iste, earum quos similique temporibus!',
        showA: './assets/html.svg',
        showB: './assets/sass-brands.svg',
        showC: './assets/css.svg',
        liveSiteURL: 'https://github.com/tomlikescode/react-project',
        githubURL: 'https://github.com/tomlikescode/react-project',
    },
    {
        id: 2,
        img: './images/media-pest.png',
        title: 'pest control website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur quas dolor nulla fugiat facilis fuga nihil harum nam cumque vel, deserunt veniam! Fuga error iste, earum quos similique temporibus!',
        showA: './assets/html5-brands.svg',
        showB: './assets/css3-alt-brands.svg',
        showC: './assets/js-brands.svg',
        liveSiteURL: 'https://tomlikescode.github.io/Pest-Control-Website/',
        githubURL: 'https://github.com/tomlikescode/Pest-Control-Website',
    },
    {
        id: 3,
        img: './images/media-restaurant.png',
        title: 'restaurant website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur quas dolor nulla fugiat facilis fuga nihil harum nam cumque vel, deserunt veniam! Fuga error iste, earum quos similique temporibus!',
        showA: './assets/html5-brands.svg',
        showB: './assets/sass-brands.svg',
        showC: './assets/js-brands.svg',
        liveSiteURL: 'https://tomlikescode.github.io/Restaurant-website-no-sass/',
        githubURL: 'https://github.com/tomlikescode/Restaurant-Website',
    },
    {
        id: 4,
        img: './images/media.png',
        title: 'React API',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur quas dolor nulla fugiat facilis fuga nihil harum nam cumque vel, deserunt veniam! Fuga error iste, earum quos similique temporibus!',
        showA: './assets/html5-brands.svg',
        showB: './assets/sass-brands.svg',
        showC: './assets/react-brands.svg',
        liveSiteURL: 'https://github.com/tomlikescode/react-project',
        githubURL: 'https://github.com/tomlikescode/react-project',
    },
    
];

const sectionCenter = document.querySelector('.projects-wrapper');

window.addEventListener('DOMContentLoaded', ()=> {
    displayProjectItems(projects);
});

function displayProjectItems (projectItems) {
    let displayProjects = projectItems.map((item)=>{

        return `<div class="project1 project-unit" id="project-specific">
                    <a href=${item.liveSiteURL}><img src=${item.img} id="media-formats" alt="${item.title}"></a>
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
                            <img src=${item.showA} alt="">
                            <img src=${item.showB} alt="">
                            <img src=${item.showC} alt="">
                        </div>
                    </div>
                    <div class="project-links">
                        <a href=${item.liveSiteURL}>live site</a>
                        <div class="vertical-line"></div>
                        <a href=${item.githubURL}>github</a>
                    </div>
                
                </div>`
    });

    displayProjects = displayProjects.join("");
    sectionCenter.innerHTML = displayProjects;
}