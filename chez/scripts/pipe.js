/*
 * == PipeJs ==
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
 * - 1.0.0 / Originaly was going to be a DOM Editor
 * - 1.0.1 / DOM Editor was scraped, replaced with a 200x400 div
 * - 1.0.2 / Added colors and changed font & font size
 * - 1.0.3 / Added stdout history, use up/down arrow keys to toggle to past expressions
 * - 1.0.4 / Changed pipejs.console to pipejs.std, do to conflicting names
 * - 1.0.5 / Made "output" variable part of pipejs object due to scope issues
 * - 1.0.6 / Changed size of editor prompt
 * - 1.0.7 / Changed 200x400 div to sidebar
 * - 1.0.8 / Fixed recursive function bug in piped console functions
 * - 1.0.9 / Added console.debug for other browsers that support it
 * - 1.1.0 / Changed prompt color to orange, and added colors to piped console functions
 * == Beta ==
 * - 1.1.1 / Added "x" to close console
 * - 1.1.2 / Escaped html tag characters due to html appearing in console
 * - 1.1.3 / Added sanitize function instead
 * - 1.1.4 / Added support for console.trace
 * - 1.1.5 / Made pipejs almost undetectable by putting structure outside of html document
 * - 1.1.5 / Only sanitized HTML if input was string type
 * - 1.1.6 / Bug fix
 */

(function(){
  if (document.getElementById("pipejs_window")) {
    pipejs.window.remove();
    (function(){pipejs = document.createElement("script");pipejs.src="https://chezmarklets--chezcoder.repl.co/scripts/pipe.js";document.body.appendChild(pipejs)}());
  }
  const version = "1.1.6";
  const jversion = "5";
  const year = new Date().getFullYear();
  var documentEl = document.body.parentElement;
  var bodyEl = document.body;
  var pipejs = {
    "window": "",
    "drag": "",
    "editor": "",
    "editorPrompt": "",
    "editorStdout": "",
    "std": {
      "stdhist": [""],
      "stdhist_pointer": 0,
      "output": ""
    }
  };

  // try{
  //   $;
  // } catch(e) {
  //   let jquery = document.createElement("script");
  //   jquery.src = "https://code.jquery.com/jquery-3.4.1.min.js";
  //   document.body.parentElement.appendChild(jquery);
  // }

  function sanitize(arg) {
    try {
      return(arg.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\ /g,"&nbsp;"));
    } catch {
      return arg;
    }
  }
  pipejs.window = document.createElement("div");
  pipejs.window.id = "pipejs_window";
  // pipejs.window.style = "background:rgba(0,0,0,75%);width:200px;height:250px;border-radius:10px;padding:10px;resize:both;color:rgb(0,255,0);font-family:monospace;font-weight:bold;font-size:15px;overflow-x:scroll;white-space:nowrap;outline:none;cursor:text;padding-top:0px;"
  pipejs.window.style = "background:rgba(0,0,0,75%);width:500px;height:99%;padding:10px;resize:both;color:rgb(0,255,0);font-family:monospace;font-weight:bold;font-size:15px;overflow-x:scroll;white-space:nowrap;outline:none;cursor:text;padding-top:0px;position:fixed;right:0px;top:0px;z-index:100000;";
  pipejs.window.addEventListener("mouseup",function(){
    document.getElementById("pipejs_editor_prompt").focus();
  });

  pipejs.editor = document.createElement("div");
  pipejs.editor.id = "pipejs_editor";

  pipejs.editorStdout = document.createElement("div");
  pipejs.editorStdout.id = "pipejs_editor_stdout";
  pipejs.editorStdout.innerHTML = `PipeJs v${version} (c) ${year} - ${year + 1} | <a href="https://repl.it/@ChezCoder" target="_blank" style=\"background:transparent;color:white;\">@ChezCoder</a><br>JavaScript v${jversion}<br><span style=\"color:orange;background:transparent;\">&gt; </span> `;
  pipejs.editorStdout.style = "background:transparent;color:rgb(0,255,0);font-family:monospace;font-weight:bold;font-size:15px;display:inline;";

  pipejs.editorPrompt = document.createElement("input");
  pipejs.editorPrompt.id = "pipejs_editor_prompt";
  pipejs.editorPrompt.style = "background:transparent;border:none;font-size:15px;color:rgb(255,255,255);font-weight:bold;font-family:monospace;outline:none;margin:0px;padding:0px;";
  pipejs.editorPrompt.size = "50";
  pipejs.editorPrompt.onkeypress = onkeypress="this.style.width = ((this.value.length + 1) * 15) + 'px';"
  pipejs.editorPrompt.addEventListener("keydown",function(e) {
    if (e.key == "ArrowUp") {
      if (pipejs.std.stdhist_pointer !== 0 && pipejs.std.stdhist) {
        pipejs.std.stdhist_pointer--;
      }
      this.value = pipejs.std.stdhist[pipejs.std.stdhist_pointer];
    } else if (e.key == "ArrowDown") {
      if (pipejs.std.stdhist_pointer != pipejs.std.stdhist.length - 1 && pipejs.std.stdhist) {
        pipejs.std.stdhist_pointer++;
      }
      this.value = pipejs.std.stdhist[pipejs.std.stdhist_pointer];
    } else if (e.key == "Enter") {
      if (pipejs.std.stdhist[pipejs.std.stdhist.length - 1] != this.value && this.value != "") {
        pipejs.std.stdhist.push(this.value);
      }

      execute(this);

      pipejs.std.stdhist_pointer = pipejs.std.stdhist.length;
      this.value = "";

      console.stdout(pipejs.std.stdhist);
      this.scrollTop = this.scrollHeight
    } else {
      pipejs.std.stdhist_pointer = pipejs.std.stdhist.length;
    }
  });

  pipejs.drag = document.createElement("div");
  pipejs.drag.id = "pipejs_drag";
  pipejs.drag.style = "background:gray;width:calc(100%+20px);height:15px;padding:0px;margin-left:-10px;margin-right:-10px;cursor:grab;"
  pipejs.drag.addEventListener("mousedown",function(e){
    e.target.style.cursor = "grabbing";
  });
  pipejs.drag.addEventListener("mouseup",function(e){
    e.target.style.cursor = "grab";
  });

  let close = document.createElement("div");
  close.innerHTML = "&times;";
  close.style = "background:transparent;color:red;position:absolute;cursor:pointer;";
  close.addEventListener("mouseup",function(){
    document.getElementById("pipejs_window").remove();
  });

  pipejs.editor.appendChild(pipejs.editorStdout);
  pipejs.editor.appendChild(pipejs.editorPrompt);
  
  pipejs.window.appendChild(close);
  pipejs.window.appendChild(pipejs.drag);
  pipejs.window.appendChild(pipejs.editor);

  let dragimg = document.createElement("img");
  dragimg.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-drag-512.png";
  dragimg.style = "width:10px;";

  documentEl.appendChild(pipejs.window);

  function execute(e) {

    let val = e.value;

    console.log = function(log) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:white;\"> " + log + "</span>";
      console.dir(log);
    }

    console.warn = function(log) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:yellow;\">" + log + "</span>";
      console.dir(log);
    }

    console.error = function(log) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:red;\">" + log + "</span>";
      console.dir(log);
    }

    console.info = function(log) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:deepskyblue;\">" + log + "</span>";
      console.dir(log);
    }

    console.debug = function(log) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:green;\">" + log + "</span>";
      console.dir(log);
    }

    console.trace = function(log) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:red;\">" + log + "</span>";
    }


    try {
      eval(val);
    } catch (e) {
      pipejs.std.output = "<span style=\"font-family:monospace;background:transparent;color:red;\">" + e + "</span>";
    }

    // pipejs.std.output = "<span style=\"color:red;\">test</span>";

    pipejs.editorStdout.innerHTML = pipejs.editorStdout.innerHTML.split("<!--pipejs_seperator-->")[0] + " <span style=\"background:transparent;color:white;font-family:monospace;\">" + sanitize(val) + "</span><br>" + "<span style=\"font-family:monospace;\">" + pipejs.std.output + "</span><br><span style=\"color:orange;background:transparent;font-family:monospace;\">&gt; </span> ";
    pipejs.std.output = "";
  }
}());