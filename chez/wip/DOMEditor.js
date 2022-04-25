(function () {
  var changeDom = (() => {
    document.body.parentElement.innerHTML = document.getElementById("dom_edit_drag_modal_code_editor").textContent;

    document.getElementById("dom_edit_drag_modal_code_editor").textContent = document.body.parentElement.innerHTML;
  });
  document.body.parentElement.innerHTML += '<div id="dom_edit_drag_modal">       <div id="dom_edit_drag_modal_header">DOM Editor</div><textarea id="dom_edit_drag_modal_code_editor" cols="50" rows="25"></textarea><br><button onclick="changeDom()">Run &gt;</button><br><br></div>';
  document.getElementById("dom_edit_drag_modal").style = "position:absolute;z - index: 9;background - color: #f1f1f1;text - align: center;border: 1px solid #d3d3d3;";
  document.getElementById("dom_edit_drag_modal_header").style = "padding:10px;cursor: move;z - index: 10;background - color: orange;color: #fff;font - family: monospace;font - size: 50px;";
  document.getElementById("dom_edit_drag_modal_code_editor").style = "resize: vertical;";
  dragElement(document.getElementById("dom_edit_drag_modal"));
  function dragElement(e) {
    var n = 0, t = 0, o = 0, l = 0;
    document.getElementById(e.id + "_header").onmousedown = (u => { (u = u || window.event).preventDefault(), o = u.clientX, l = u.clientY, document.onmouseup = (() => { document.onmouseup = null, document.onmousemove = null }), document.onmousemove = (u => { (u = u || window.event).preventDefault(), n = o - u.clientX, t = l - u.clientY, o = u.clientX, l = u.clientY, e.style.top = e.offsetTop - t + "px", e.style.left = e.offsetLeft - n + "px" }) })
  };
  document.getElementById("dom_edit_drag_modal_code_editor").textContent = document.body.parentElement.innerHTML
})()