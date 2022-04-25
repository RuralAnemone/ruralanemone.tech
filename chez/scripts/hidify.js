(function() {
    var b = document.createElement("button");
    b.setAttribute("onclick", `__hidify__js__(this)`);
    b.setAttribute("style", "position:absolute;left:10px;top:10px;z-index:10000000;");
    b.textContent="Quick, hide the page!";
    document.body.parentElement.prepend(b);

    var c = document.createElement("script");
    c.setAttribute("nonce", "");
    c.textContent = `function __hidify__js__(l) {
        document.body.style.display != "none" ? document.body.style.display="none" : document.body.style.display="block";
        l.textContent === "" ? l.textContent = "Quick, hide the page!" : l.textContent = "";
    }`;
    document.body.parentElement.prepend(c);
}());