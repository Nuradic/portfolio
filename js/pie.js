myjson={
    "django": {"items":[
        "Django + templating for full stack web development",
        "Django + DRf for API development",
        "Django + channels for real time data (Websocket Development)",
        "Django ORM expert for managing database"
    ],"description":""},
    "flutter": {"items":[
        "GetX State management",
        "Sqflite, IsarDb,and hive expert on mobile database",
        "UI/UX ",
        ""
    ],"description":"I am proficient in the Flutter SDK and have hands-on experience in developing mobile applications using Flutter. I have a strong understanding of Dart programming language and its core concepts. I have experience developing mobile applications for both iOS and Android platforms.I have knowledge of various mobile app architecture patterns like MVC, MVVM, and MVP. I am familiar with RESTful APIs and how to integrate them into mobile applications. I have experience working with database systems like SQLite, Firebase, and MySQL.I am proficient in using version control systems like Git to manage the source code of applications. I have experience working in an agile development environment and following agile principles like Scrum or Kanban."},
    "laravel": {
        "items":[
            "Expertise in RESTful APIs",
            "Strong knowledge of Laravel framework",
            "Proficient in PHP programming language",
            "Proficient in documenting code and processes"
        ],
        "description":""
    },
    "react": {
        "items":[
            "Familiarity with front-end technologies",
            "Skilled in using Redux and Flux",
            "Proficient in JavaScript programming language"
        ],
        "description":""
    },
    "android": {
        "items":[
            "Expertise in RESTful APIs",
            "Familiarity with mobile app architecture patterns",
            "Experienced in mobile app development",
            "Strong knowledge of Android SDK and Android Studio",
            "Proficient in Java and Kotlin"
        ],
        "description":""
    },
    "spring": {
        "items":[
            "Strong knowledge of Spring framework",
            "Skilled in using Spring Boot for application development",
            ""
        ],
        "description":""
    },
    "psql": {
        "items":[
            "Strong knowledge of SQL",
            "Familiarity with database design",
            "Expertise in query optimization",
            "Experienced in data modeling",
            "Experienced in database administration"
        ],
        "description":""
    },
    "mysql": {
        "items":[],
        "description":""
    },
}
let wheel=document.getElementById("spinner");
wheel.addEventListener("click",()=>{
let s=document.getElementById("wheel");
s.style.transition="3s";
s.style.transform="rotate(360deg)";
});
let items=document.getElementsByClassName("pie-item");
let prev=0;
for(let j of items){
    j.addEventListener("click",()=>{
        
        let value=j.getAttribute("value");
        if(value>4){
            value=4-value;
        }
        let angle=45*(value);
        let s=document.getElementById("wheel");
        s.style.transition="3s";
        let r=45*(j.getAttribute("value")-1);
        s.style.transform=`rotate(${angle}deg)`;
        for(let k of items){
            k.style="background-color:grey";
        }
        v_name=j.getAttribute("name")

        j.style="background-color:#FF7262";
        let ls=document.getElementById("container-list-1")
        while(ls.firstChild){
            ls.removeChild(ls.firstChild)
        }

        title=document.getElementById("title-1")
        des=document.getElementById("description-1")
        des.innerHTML=myjson[v_name].description
        title.innerHTML=v_name.toUpperCase()
        for(let item of myjson[v_name].items){
            let el=document.createElement("li")
            el.innerHTML=item
            ls.append(el)

        }

        "".
    prev=value;
    });

        // 0 45*0
        // 45 45*1
        // 90 45*2
        // 135 45*3
        // 180 45*4
        // -45
        // -90
        // -135
}


// function change_content(props,doc){
// doc.addEventListener()
// }