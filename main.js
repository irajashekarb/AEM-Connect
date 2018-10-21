// Constant variables for alert and error functions imported from LIB
const { alert, error } = require("./lib/dialogs.js");

// Function for showing alert
async function showAlert()
{
    await alert("Connect to the Internet", 
    "In order to function correctly, this plugin requires access to the Internet. Please connect to a network that has Internet access."); 
}

// Function for showing error
async function showError()
{
    await error("Synchronization Failed",
    "Failed to synchronize all your changes with our server. Some changes may have been lost.",
    "Steps you can take:",
    "* Save your document",
    "* Check your network connection",
    "* Try again in a few minutes"); 
}

// Main Handler Function
function myPluginCommand(selection) {
   
}

module.exports = {
    commands: {
        myPluginCommand: myPluginCommand,
                         showAlert,
                         showError
    }
};
