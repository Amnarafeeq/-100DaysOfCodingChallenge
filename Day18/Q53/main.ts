// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
//  programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills/
//   from this list and show them.
let devSkills = {
    languages: ["Typescript", "Javascript", "Python"],
    tools: ["VS Code", "Docker", "Git"],
    frameworks: ["React.js", "Angular", "Node.js"] 
}
 let {languages,tools,frameworks} = devSkills;
 console.log(`Language: ${languages[2]}. Tool: ${tools[0]}. FrameWork: ${frameworks[1]}`) 