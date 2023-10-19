

function LoadAll() {

for (let i = 0; i < project_data.projects.length; i++) {
    LoadEntry(project_data.projects[i]);
}

}

function LoadCategory() {

    let params = (new URL(document.location)).searchParams;
    let category = params.get("category");

    if (category == null) {
        LoadAll();
        return;
    }

    console.log(category);

    for (let i = 0; i < project_data.projects.length; i++) {
    
        if (project_data.projects[i].categories.includes(category)) {
            LoadEntry(project_data.projects[i]);
        }
        
    
    }
    
}

function LoadEntry(entry) {

    document.getElementById("app").innerHTML += `
    <article class="hentry">
    <header class="entry-header">
    <div class="entry-thumbnail">
        <a href="${entry.page}"><img src="${entry.image}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1"/></a>
    </div>
    <h2 class="entry-title"><a href="${entry.page}" rel="bookmark">${entry.name}</a></h2>

    ${LoadEntryCategories(entry.categories)}
    `
    




    document.getElementById("app").innerHTML += `
    </header>
    </article>
    
    `

}

function LoadEntryCategories(categories) {

    let result = "";

    for (let i = 0; i < categories.length; i++) {
        
        result += `
        <a class='portfoliotype' href='index.html?category=${categories[i]}'>${categories[i]}</a>
        `
    
    }

    return result;

}

 function LoadCategoryTitle() {
    let params = (new URL(document.location)).searchParams;
    let category = params.get("category");

    if (category == null) {
        document.getElementById("category-title").innerHTML += `
        
        <h3 class="page-title">
        All Projects
        </h3>
        `
    
        return;
    }
    document.getElementById("category-title").innerHTML += `
    

    <h3 class="page-title">
    ${category}s
    </h3>
`

 }

 function LoadSiteNav() {
    


    for (let i = 0; i < sitenav_data.sitesections.length; i++) {

        document.getElementById("sitenav").innerHTML += `
        <li><a href="${sitenav_data.sitesections[i].link}">${sitenav_data.sitesections[i].title}</a></li>
        `   
    }
 }