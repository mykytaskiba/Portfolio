
    

    function LoadRightBar(item) {

        LoadMetaData(GetEntry(item));
    }

    function LoadPageData(item) {

        LoadPageData(GetEntry(item));
    }

    function GetEntry(item) {
        for (let i = 0; i < project_data.projects.length; i++) {

            if (project_data.projects[i].name == item) {
                return project_data.projects[i];
            }
        }
        return null;
    }


    function LoadMetaData(entry) {
        
        document.getElementById("metadata").innerHTML +=
        `<header class="entry-header">
					
    
        <h1>${entry.name}</h1>    
		<p>${entry.date}</p>
        
        ${LoadEntryCategories(entry.categories)}
		</header>
		
		<img width="600" height="600" src="${entry.image}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1"/>
		<p>${entry.description}</p>
        `
    }

    function LoadPageDataFromEntry(entry) {

        document.getElementById("pagedata").innerHTML += entry.pagedata;
    }