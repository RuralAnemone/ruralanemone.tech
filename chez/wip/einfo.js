/*
 * == EInfo ==
 * The ultimate remake of inspect element.
 * 
 * Copyright 2020 - 2021 ChezCoder. All rights reserved.
 * 
 * Contact:
 * - https://repl.it/@ChezCoder
 * - MrPizzaGuy#5459
 * 
 * Changelog:
 * == Alpha ==
 * - 1.0.0 / Added GUI
 * - 1.0.1 / Hovering over eInfo windows wont change the data
 * - 1.0.2 / Hovering over pipejs windows wont change the data
 * - 1.0.3 / Added <script> visibility, <br> visibility, and eLock, not functional yet
 * - 1.0.4 / eLock and <br> visibility are now functional
 * - 1.0.5 / <script> visibility is now functional
 * - 1.0.6 / Adding shortcut to eLock the current element the mouse is hovered over
 * 
 */

(function(){
    function sanitize(arg) {
        return(arg.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
    }

    const version = "1.0.3";

    var einfo = {
        "window": "",
        "display": "",
        "editor": "",
        "selected": "",
        "esaves": [],
        "config": {
            "element": "",
            "showBr": false,
            "showScript": false,
            "eLock": true
        },
    "addAttr": (function(attr_name,attr_value) {
        newvalue = `<span id="einfo_protect" style="color:purple;">${sanitize(attr_name)}</span>=<span id="einfo_protect" style="color:darkgoldenrod;">"${sanitize(attr_value)}"</span>`;
        einfo.display.innerHTML += "<br id=\"einfo_br\">" + newvalue;
    })
    }
    einfo.window = document.createElement("div");
    einfo.window.id = "einfo_window";
    einfo.window.style = "width:500px;height:400px;background:lightgray;border:10px solid gray;border-radius:10px;font-family:monospace;text-align:center;font-style:oblique;display:inline-block;overflow-x:scroll;overflow-y:scroll;white-space:nowrap;resize:both;z-index:10000;color:black;position:fixed;top:1px;right:1px;";
    einfo.window.innerHTML = "<br id=\"einfo_br\"><h1 id=\"einfo_header_h1\" style=\"display:inline;\">eInfo</h1>&nbsp;<p id=\"einfo_header_p\" style=\"display:inline;\">" + version + "</p><br id=\"einfo_br\"><sup id=\"einfo_header_sup\">An HTML debugging tool</sup><br id=\"einfo_br\">By: <a style=\"color:blue;\" href=\"https://repl.it/@ChezCoder\" target=\"_blank\" id=\"einfo_creator\" style=\"text-decoration:none;\">@ChezCoder</a><br id=\"einfo_br\"><br id=\"einfo_br\">";

    einfo.display = document.createElement("div");
    einfo.display.id = "einfo_display";
    einfo.display.style = "text-align:left;width:calc(100%-5);height:100px;background:transparent;border-top:10px darkgray solid;border-bottom:10px darkgray solid;overflow-x:scroll;overflow-y:scroll;white-space:nowrap;margin-top:10px;padding:5px;font-style:normal;font-weight:none;font-size:15px;";
    einfo.display.innerHTML = sanitize("<") + "<span id=\"einfo_protect\" style=\"color:blue;\">element</span>" + sanitize(">") + "<br id=\"einfo_br\"><span id=\"einfo_protect\" style=\"color:purple;\">name</span>=<span id=\"einfo_protect\" style=\"color:darkgoldenrod;\">\"value\"</span>"

    einfo.editor = document.createElement("div");
    einfo.editor.id = "einfo_editor";
    einfo.editor.style = "text-align:left;width:calc(100%-5);height:100px;background:white;overflow-x"

    einfo.config.element = document.createElement("div");
    einfo.config.element.id = "einfo_config_editor"
    einfo.config.element.innerHTML = `<span id="einfo_protect" style="font-size:20px;">Settings</span><br id=\"einfo_br\"><input type="checkbox" id="einfo_config_elock" checked>eLock<br id=\"einfo_br\"><input type="checkbox" id="einfo_config_br">&lt;br&gt; Visibility<br id=\"einfo_br\"><input type="checkbox" id="einfo_config_script">&lt;script&gt; Visibility`;
    einfo.config.element.style = "text-align:center;font-size:15px;border-top:10px solid darkgray;"

    einfo.window.appendChild(einfo.config.element);
    einfo.window.appendChild(einfo.display);
    document.body.appendChild(einfo.window);

    document.body.addEventListener("mouseover",function(e){
        // console.log(einfo)
        if (!e.target.id.startsWith("einfo_") && !e.target.id.startsWith("pipejs_") && e.target.nodeName != "BODY" && !e.target.parentElement.id.startsWith("einfo_") && !einfo.selected && !e.target.getAttribute("einfo_protect")) {
            einfo.display.innerHTML = `&lt;<span id="einfo_protect" style="color:blue;">${sanitize(e.target.nodeName)}</span>&gt;`;
            Array.from(e.target.attributes).forEach(function(attrObj){
                einfo.addAttr(attrObj.name,attrObj.value);
            });
        } else {
            einfo.display.innerHTML = einfo.display.innerHTML;
        }
    });

    document.body.addEventListener("mousedown",function(e){
        // console.log(einfo)
        if (einfo.config.eLock) {

            if (!e.target.id.startsWith("einfo_") && !e.target.id.startsWith("pipejs_") && e.target.nodeName != "BODY" && !e.target.parentElement.id.startsWith("einfo_") && !einfo.selected) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                einfo.esaves.push(e.target.style.background);
                e.target.style.background = "yellow";
                einfo.selected = e.target;
            } else {
                einfo.selected.style.background = einfo.esaves[0];
                einfo.esaves = [];
                einfo.selected = "";
            }
        }
    });

    document.body.addEventListener("keyup",function(e){
        console.log(e.key)
        // if (e.key == " " && einfo.config.eLock) {
        //     if (!e.target.id.startsWith("einfo_") && !e.target.id.startsWith("pipejs_") && e.target.nodeName != "BODY" && !e.target.parentElement.id.startsWith("einfo_") && !einfo.selected) {
        //         e.preventDefault();
        //         e.stopPropagation();
        //         e.stopImmediatePropagation();
        //         einfo.esaves.push(e.target.style.background);
        //         e.target.style.background = "yellow";
        //         einfo.selected = e.target;
        //     } else {
        //         einfo.selected.style.background = einfo.esaves[0];
        //         einfo.esaves = [];
        //         einfo.selected = "";
        //     }
        // }
    });

    setInterval(function(){
        einfo.config.eLock = document.getElementById("einfo_config_elock").checked;
        einfo.config.showScript = document.getElementById("einfo_config_script").checked;
        einfo.config.showBr = document.getElementById("einfo_config_br").checked;
        if (einfo.config.showBr) {
            Array.from(document.querySelectorAll('br')).forEach(function(el) {
                if (el.id != "einfo_br") {
                    let showBr = document.createElement("div");
                    showBr.id = "einfo_dummybr";
                    showBr.style.display = "inline";
                    showBr.innerHTML = "<span id=\"einfo_protect\" style=\"color:gray;font-family:monospace;background:white;\">&ltbr&gt;</span><br id=\"einfo_br\">";
                    el.replaceWith(showBr);
                }
            });
        } else if (!einfo.config.showBr) {
            Array.from(document.querySelectorAll('div')).forEach(function(el) {
                if (el.id == "einfo_dummybr") {
                    let hideBr = document.createElement("br");
                    el.replaceWith(hideBr);
                }
            });
        }

        if (einfo.config.showScript) {
            Array.from(document.querySelectorAll("script")).forEach(function(el){
                el.style = "display:block;color:gray;font-family:monospace;";
                el.innerHTML = el.innerHTML.replace(/\\n/g,"<br>");
                el.setAttribute("einfo_protect","true")
            });
        } else if (!einfo.config.showScript) {
            Array.from(document.querySelectorAll("script")).forEach(function(el){
                el.style.display = "none";
                el.innerHTML = el.innerHTML.replace(/\<br\>/g,"\\n");
            });
        }
    },1000);
}());