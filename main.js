/**
* Shorthand for creating Elements.
* @param {*} tag The tag name of the element.
* @param {*} [props] Optional props.
* @param {*} children Child elements or strings
*/
function h(tag, props, ...children) {
    let element = document.createElement(tag);
    if (props) {
        if (props.nodeType || typeof props !== "object") {
            children.unshift(props);
        }
        else {
            for (let name in props) {
                let value = props[name];
                if (name == "style") {
                    Object.assign(element.style, value);
                }
                else {
                    element.setAttribute(name, value);
                    element[name] = value;
                }
            }
        }
    }
    for (let child of children) {
        element.appendChild(typeof child === "object" ? child : document.createTextNode(child));
    }
    return element;
}

// Modal Dialog Constant
let dialog;

dialog = 
    
h("dialog",
        // Main Form
        h("form", { method: "dialog", style: { width: 400 } },
            // Form Header
            h("header",
                h( "h1", "AEM Connect" ),
                h("img", { src: "./images/aemiconexlarge.png", width: 40, height: 40})
            ),
            // Horizontal Rule
            h("hr"),
            // Login Label
            h("label",
                h("span","Log In"),
                h("input",{ placeholder : "Email address"})
            ),
            // Password Label
            h("label",
                h("span", "Password"),
                h("input", { placeholder : "Password"})
            ),
            // Footer for buttons
            h("footer",
                h("button", {uxpVariant: "cta", type: "submit", onclick(e) { e.preventDefault() } },"Log in"),
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close() } }, "Cancel")  
            )
        )
)

document.body.appendChild(dialog);

// Main Handler Function
function myPluginCommand(selection) {
   
}

module.exports = {
    commands: {
        menuCommand: function()
        {
            dialog.showModal();
        }
        //myPluginCommand: myPluginCommand
    }
};
