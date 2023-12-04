
//Making hard-skills block

let hardDiv = document.getElementById('hard')

const hardSkills = ["HTML / CSS","Python", "PgAdmin", "PostgreSQL", "NumPy", "Pandas","JavaScript", "React", "Redux", "Node.JS", "Postman", "Git", "GitHub", "Jira", "Slack", "Figma"]

hardSkills.forEach((skill, index) => {
    index += 1
    let skillDiv = document.createElement('div')
    skillDiv.classList.add("each-skill")
    skillDiv.id = `block-${index}`
    skillDiv.append(document.createTextNode(skill))

    hardDiv.append(skillDiv)
})

//Making Soft skills block

let softDiv = document.getElementById('soft')

const softSkills = ["Hard-worker","Fast-learner", "Analytical mind", "Creative", "Self-reliable","Driven", "Time-managment"]

softSkills.forEach((skill, index) => {
    index += 10
    let skillDiv = document.createElement('div')
    skillDiv.classList.add("each-skill")
    skillDiv.id = `block-${index}`
    skillDiv.append(document.createTextNode(skill))

    softDiv.append(skillDiv)
})

//Creating projects block

let projectsDiv = document.getElementById('projects')

const projects = [
    {
        title: "first-project",
        h3: "Marc Chagall tribute page",
        img : "first-project.png",
        subtitle: "This is my very first project for the full stack course. I made it from scratch after a week of learning on my own, and didn't make any changes just to see how far I could jump from this point in three months.",
        GitHub: "https://github.com/DiGureev/Entry-project",
        Website: "https://digureev.github.io/Entry-project/"
    },

    {
        title: "hackaton",
        h3: "Tel-Aviv self-tours",
        img : "hackaton-project.png",
        subtitle: "This is my own project for new olims, to help them get to know the amazing Tel-Aviv as I see it.",
        GitHub: "https://github.com/DiGureev/Selfish-Tel-Aviv",
        Website: "https://digureev.github.io/Selfish-Tel-Aviv/"
    },
    {
        title: "planner",
        h3: "My Planner (Redux)",
        img : "planner-project.png",
        subtitle: "The everyday planner for myself. Built with React, Redux, Node and PostgreSQL",
        GitHub: "https://github.com/DiGureev/PlannerAppRedux",
        Website: "https://my-planner-app-node-redux.onrender.com/"
    },
    {
        title: "vm",
        h3: "Volunteer Matcher",
        img : "vm-project.png",
        subtitle: "Allows users to discover volunteer opportunities in Israel based on their preferences",
        GitHub: "https://github.com/DiGureev/Volunteers-Matcher",
        Website: "https://volunteers-matcher.onrender.com/"
    }
]


projects.forEach(project => {
    let wraperDiv = document.createElement('div')
    wraperDiv.id = project.title
    wraperDiv.classList.add('each-project')

    let imgDiv = document.createElement('div')
    imgDiv.classList.add("cover-img")
    let img = document.createElement('img')
    img.setAttribute("src", project.img)
    imgDiv.append(img)
    wraperDiv.append(imgDiv)

    let infoDiv = document.createElement('div')
    infoDiv.classList.add("project-info")
    wraperDiv.append(infoDiv)

    let textDiv = document.createElement('div')

    let h3 = document.createElement('h3')
    h3.append(document.createTextNode(project.h3))
    textDiv.append(h3)

    let p = document.createElement('p')
    p.append(document.createTextNode(project.subtitle))
    p.classList.add("sub-card")
    textDiv.append(p)
    infoDiv.append(textDiv)

    let buttonDiv = document.createElement('div')
    buttonDiv.classList.add("with-buttons")

    let buttonGit = document.createElement('button')
    buttonGit.classList.add("card-buttons")
    let buttonGitLink = document.createElement('a')
    buttonGitLink.setAttribute("target", "_blank")
    buttonGitLink.setAttribute("href", project.GitHub)
    buttonGitLink.append(document.createTextNode('To GitHub'))
    buttonGit.append(buttonGitLink)

    let buttonWeb = document.createElement('button')
    buttonWeb.classList.add("card-buttons")
    let buttonWebLink = document.createElement('a')
    buttonWebLink.setAttribute("target", "_blank")
    buttonWebLink.setAttribute("href", project.Website)
    buttonWebLink.append(document.createTextNode('To Website'))
    buttonWeb.append(buttonWebLink)
    
    
    buttonDiv.append(buttonGit)
    buttonDiv.append(buttonWeb)

    wraperDiv.append(buttonDiv)
    projectsDiv.append(wraperDiv)
})
