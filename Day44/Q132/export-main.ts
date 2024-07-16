// Discuss the difference between default and named 
// exports in JavaScript modules.
// In default modules only one default can be use in one file.
// It is designed to export one main functionality or value
//  from the module.
// Export named modules can be more than one.

export default function logMessage(message:string):string{
    return message;
}

export let askName:string = "Would you like to tell your name?" 
