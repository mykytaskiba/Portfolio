
const sitenav_data = {
    "sitesections":[
    {
        "title":"All Projects",
        "link":"index.html"
    }
    ,
    {
        "title":"Video Games",
        "link":"index.html?category=Video Game"
    }
    ,
    {
        "title":"Physical Games",
        "link":"index.html?category=Physical Game"
    }
    ]
}






for (let i = 0; i < sitenav_data.sitesections.length; i++) {

    document.getElementById("sitenav").innerHTML += `
    <li><a href="${sitenav_data.sitesections[i].link}">${sitenav_data.sitesections[i].title}</a></li>
    `
    
}