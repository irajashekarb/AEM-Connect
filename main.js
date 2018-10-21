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
        h("style", `
            dialog  
            {
                    background: white;
            }`
        ),
        // Main Form
        h("form", { method: "dialog", style: { width: 400}},
            // Form Header
            h("header",
                h("h1", { textContent: "AEM Connect"}),
                h("img", { src: "./images/aemiconexlarge.png", width: 40, height: 40})
            ),
            <hr/>
            // Login Label
            h("label",
                h("span",
                    h("label", { textContent: "LogIn"})
                )
            ), 
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
            // document.body.appendChild(getDialog()).showModal();
            dialog.showModal();
        }
        //myPluginCommand: myPluginCommand
    }
};
