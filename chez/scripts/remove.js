document.body.onclick = function (t) { 
  t.preventDefault();
  t.onclick = function () {};
  document.body.onmouseover = function () {};
  document.body.onmouseout = function () {};
  document.body.onclick = function () {};
  t.target.style.background = t.target.getAttribute("tempStore_background");
  t.target.style.cursor = t.target.getAttribute("tempStore_cursor");
  t.target.style.display = "none";
};
document.body.onmouseover = function (t) {
  t.target.setAttribute("tempStore_background", t.target.style.background);
  t.target.setAttribute("tempStore_cursor", t.target.style.cursor);
  t.target.style.background = "yellow";
  t.target.style.cursor = "pointer";
};
document.body.onmouseout = function (t) {
  t.target.style.background = t.target.getAttribute("tempStore_background");
  t.target.removeAttribute("tempStore_background");
  t.target.style.cursor = t.target.getAttribute("tempStore_cursor");
  t.target.removeAttribute("tempStore_cursor");
};