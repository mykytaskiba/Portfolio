

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
    
        if (project_data.projects[i].type == category) {
            LoadEntry(project_data.projects[i]);
        }
        
    
    }
    
}

function LoadEntry(entry) {

    document.getElementById("app").innerHTML += `
    
        
        
    <article class="hentry">
    <header class="entry-header">
    <div class="entry-thumbnail">
        <a href="portfolio-item.html"><img src="${entry.image}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1"/></a>
    </div>
    <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">${entry.name}</a></h2>
    <a class='portfoliotype' href='index.html?category=${entry.type}'>${entry.type}</a>
    </header>
    </article>
    
    `

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