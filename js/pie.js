myjson={
    "django": {"items":[
        "Django + templating for full stack web development",
        "Django + DRf for API development",
        "Django + channels for real time data (Websocket Development)",
        "Django ORM expert for managing database"
    ],"description":"As a senior developer in Django, I have extensive experience building web applications using the Django framework. I am proficient in using Django's Model-View-Controller (MVC) architecture to create scalable and maintainable applications.I have a deep understanding of Django's core features, including its ORM (Object-Relational Mapping) system, its built-in authentication and authorization system, and its templating engine. I am also proficient in using Django's class-based views, middleware, and signals to create custom functionality and integrate third-party libraries."},
    "flutter": {"items":[
        "GetX State management",
        "Sqflite, IsarDb,and hive expert on mobile database",
        "UI/UX ",
    ],"description":"I am proficient in the Flutter SDK and have hands-on experience in developing mobile applications using Flutter. I have a strong understanding of Dart programming language and its core concepts. I have experience developing mobile applications for both iOS and Android platforms.I have knowledge of various mobile app architecture patterns like MVC, MVVM, and MVP. I am familiar with RESTful APIs and how to integrate them into mobile applications. I have experience working with database systems like SQLite, Firebase, and MySQL.I am proficient in using version control systems like Git to manage the source code of applications. I have experience working in an agile development environment and following agile principles like Scrum or Kanban."},
    "docker": {
        "items":[
          
        ],
        "description":"As a developer  with expertise in Docker, I have extensive experience building and deploying applications using containerization. I am proficient in using Docker to create and manage containers, as well as deploying them to production environments.I have a deep understanding of Docker's architecture and its core components, including Docker Engine, the Docker CLI, and Docker Compose. I am also skilled in using Docker Swarm and Kubernetes for container orchestration and management. As a senior developer, I have experience leading DevOps teams and working closely with infrastructure engineers and IT operations teams. I have excellent communication skills and am able to collaborate effectively with stakeholders and team members to deliver high-quality, well-documented code."
    },
    "react": {
        "items":[
            "Familiarity with front-end technologies",
            "Skilled in using Redux and Flux",
            "Proficient in JavaScript programming language"
        ],
        "description":"As a beginner developer in ReactJS, I am familiar with the fundamental concepts and syntax of the library. I am proficient in using JSX to create React components and rendering them to the DOM, and I have experience with functional and class components, passing props, and managing component data with state.I am also comfortable with handling user events using event handlers and using conditional rendering and loops to create dynamic UIs. I understand the lifecycle methods of React components and how to use them to manage component behavior and performance.While I am still learning, I am eager to explore more advanced topics such as React Router, React Hooks, and state management libraries like Redux. I am committed to staying up-to-date with the latest developments in ReactJS and continuously improving my skills as a developer."
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
        ],
        "description":""
    },
    "psql": {
        "items":[
            "Strong knowledge of SQL",
            "Familiarity with database design",
            "Expertise in query optimization",
            "Experienced in data modeling",
        ],
        "description":"As a senior developer with expertise in PostgreSQL, I have extensive experience designing and managing complex databases for web applications. I am proficient in using PostgreSQL to create and manage database schemas, tables, and indexes, as well as writing and optimizing complex SQL queries. I am also skilled in using PostgreSQL's extensions and contrib modules to add additional functionality to the database.As a senior developer, I have experience leading development teams and working closely with database administrators and system administrators. I have excellent communication skills and am able to collaborate effectively with stakeholders and team members to deliver high-performance, reliable database systems."
    },
    "figma": {
        "items":["UI Components Design","Applying Certain Design system","Prototyping"],
        "description":"As a beginner in Figma, I am familiar with the basics of the design tool and its interface. I have experience creating and editing design files, as well as collaborating with team members using Figma's real-time collaboration features.I am proficient in using Figma's design tools, including its vector editing tools, grids and layout tools, and text tools. I am also familiar with Figma's component and style systems, which allow me to create reusable design elements and maintain consistency throughout my designs.As a beginner in Figma, I am still learning best practices for design workflows and collaboration, as well as more advanced features such as prototyping, animations, and design systems. However, I am eager to continue learning and improving my skills in Figma, and I am committed to creating high-quality designs that meet the needs of users and stakeholders."
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
let selected=0;
for(let j of items){
    j.addEventListener("mouseover",(event)=>{
        j.style.backgroundColor="#FF7262";
        let ste=j.style.backgroundColor.value;

    });
    j.addEventListener("mouseout",(event)=>{
        let ste=j.style.backgroundColor.value;
        let value=j.getAttribute("value");
        if(selected==value){
            j.style.backgroundColor=ste;
            
        }else{

            j.style.backgroundColor="grey";
        }
    });
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
    selected=value;
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

let navs=document.getElementsByClassName("nav-icon");
let nav_selected=0;

for (let n of navs){
    n.addEventListener("mouseover",()=>{
        n.style.backgroundColor="#FF7262";
        n.style.scale="1.2";
        n.style.filter="hue-rotate(360deg)";
    });
    n.addEventListener("mouseout",()=>{
        if (nav_selected == n.getAttribute("value")){
            for(let item of navs){
                item.style.backgroundColor="grey";
            }
            n.style.backgroundColor="#FF7262";

    
        }else{
            n.style.backgroundColor="grey";
            n.style.scale="1";

        }
        if (nav_selected==n.getAttribute("value")){

        }
    });
    n.addEventListener("click",()=>{
        
            n.style.backgroundColor="#FF7262";
            n.style.scale="1.2";
            n.style.filter="hue-rotate(360deg)";

        nav_selected=n.getAttribute("value");
    });
}
// function change_content(props,doc){
// doc.addEventListener()
// }