(async function() {
    var messifierProtectionToken = Math.floor(Math.random() * 1000000000000);
    var messifierToken = "messifier_" + Math.floor(Math.random() * 1000000000000) + "._" + Math.floor(Math.random() * 1000000000000);

    document.body.innerHTML += "<div style='position: absolute;width: 100%;text-align: center;top: calc(50% - 50px);font-size: 100px;z-index: 100000000;' id='messifier_" + messifierProtectionToken + "'>Messifying...</div>"
    let all = Array.from(document.querySelectorAll("*"));
    await all.forEach(function(el, _i) {
        if (el.style.transition) {
            el.style.transition += ", background 5s, color 5s, border 1s";
        } else {
            el.style.transition = "background 5s, color 5s, border 1s";
        }

        if (el.hasAttribute("src") || el.hasAttribute("href") || el.hasAttribute("onclick")) {
            el.setAttribute("src", "https://chezcoder.tk/assets/bok.png");
            
            el.addEventListener("mouseup", function(e) {
                e.preventDefault();
                if (Math.round(Math.random()) === 0) {
                    window.open("https://www.youtube.com/watch?reload=9&v=dQw4w9WgXcQ", "_blank");
                } else {
                    window.open("https://chezcoder.tk/assets/bok.png", "_blank");
                }
            });
        }

        document.getElementById("messifier_" + messifierProtectionToken).style.color = "black";
        document.getElementById("messifier_" + messifierProtectionToken).style.fontFamily = "Arial";

        setTimeout(function(){
            clrr = Math.floor(Math.random()*255);
            clrb = Math.floor(Math.random()*255);
            clrg = Math.floor(Math.random()*255);
            
            el.style.color = `rgb(${clrr}, ${clrb}, ${clrg}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.background = `rgb(${255 - clrr}, ${255 - clrb}, ${255 - clrg}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.borderTop = `${Math.floor(Math.random() * 10)}px ${["solid", "double", "inset", "outset", "dotted", "hidden", "dashed", "groove", "ridge"][Math.floor(Math.random()*9)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.borderBottom = `${Math.floor(Math.random() * 10)}px ${["solid", "double", "inset", "outset", "dotted", "hidden", "dashed", "groove", "ridge"][Math.floor(Math.random()*9)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.borderLeft = `${Math.floor(Math.random() * 10)}px ${["solid", "double", "inset", "outset", "dotted", "hidden", "dashed", "groove", "ridge"][Math.floor(Math.random()*9)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.borderRight = `${Math.floor(Math.random() * 10)}px ${["solid", "double", "inset", "outset", "dotted", "hidden", "dashed", "groove", "ridge"][Math.floor(Math.random()*9)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.fontWeight = ["normal", "bold", "bolder", "100", "200", "300", "400", "500", "600", "700", "800", "900"][Math.floor(Math.random()*12)];
            el.style.textDecoration = `${["underline", "overline", "line-through"][Math.floor(Math.random()*3)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100}) ${["solid", "wavy", "dotted", "dashed", "double"][Math.floor(Math.random()*5)]}`;
            el.style.fontStyle = ["normal", "italic", "obliqu"][Math.floor(Math.random()*3)];
            el.style.fontStretch = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expande"][Math.floor(Math.random()*9)];
            el.style.fontVariant = ["normal", "small-caps"][Math.floor(Math.random()*2)];
            el.style.fontFamily = ["Arial, sans-serif", "Helvetica, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif", "Gill Sans, sans-serif", "Noto Sans, sans-serif", "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", "Optima, sans-serif", "Arial Narrow, sans-serif", "Times, Times New Roman, serif", "Didot, serif", "Georgia, serif", "Palatino, URW Palladio L, serif", "Bookman, URW Bookman L, serif", "New Century Schoolbook, TeX Gyre Schola, serif", "American Typewriter, serif", "Andale Mono, monospace", "Courier New, monospace", "Courier, monospace", "FreeMono, monospace", "OCR A Std, monospace", "DejaVu Sans Mono, monospace", "Comic Sans MS, Comic Sans, cursive", "Apple Chancery, cursive", "Bradley Hand, cursive", "Brush Script MT, Brush Script Std, cursive", "Snell Roundhand, cursive", "URW Chancery L, cursive", "Impact, fantasy", "Luminari, fantasy", "Chalkduster, fantasy", "Jazz LET, fantasy", "Blippo, fantasy", "Stencil Std, fantasy", "Marker Felt, fantasy", "Trattatello, fantasy"][Math.floor(Math.random()*36)];
            el.setAttribute("messifier-token", messifierToken);
            el.scrollIntoView({ block: "center", inline: "center" });

            if (_i == all.length - 1) {
                document.getElementById("messifier_" + messifierProtectionToken).style.transition += ", opacity 2s";
                document.getElementById("messifier_" + messifierProtectionToken).style.opacity = "0";
                
                setTimeout(function() {
                    document.getElementById("messifier_" + messifierProtectionToken).remove();
                    alert("Messification done!");
                    // messidriver();
                }, 2000);
            }
        }, _i * 100);

    });

    function messidriver() {
        let all = Array.from(document.querySelectorAll("*"));
        all.forEach(function(el) {
            if (el.getAttribute("messifier-token") == messifierToken) return;

            if (el.style.transition) {
                el.style.transition += ", background 5s, color 5s, border 1s";
            } else {
                el.style.transition = "background 5s, color 5s, border 1s";
            }    

            if (el.hasAttribute("src") || el.hasAttribute("href") || el.hasAttribute("onclick")) {
                el.setAttribute("src", "https://chezcoder.tk/assets/bok.png");
                
                el.addEventListener("mouseup", function(e) {
                    e.preventDefault();
                    if (Math.round(Math.random()) === 0) {
                        window.open("https://www.youtube.com/watch?reload=9&v=dQw4w9WgXcQ", "_blank");
                    } else {
                        window.open("https://chezcoder.tk/assets/bok.png", "_blank");
                    }
                });
            }

            clrr = Math.floor(Math.random()*255);
            clrb = Math.floor(Math.random()*255);
            clrg = Math.floor(Math.random()*255);
            
            el.style.color = `rgb(${clrr}, ${clrb}, ${clrg}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.background = `rgb(${255 - clrr}, ${255 - clrb}, ${255 - clrg}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.border = `${Math.floor(Math.random() * 10)}px ${["solid", "double", "inset", "outset", "dotted", "hidden", "dashed", "groove", "ridge"][Math.floor(Math.random()*9)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100})`;
            el.style.fontWeight = ["normal", "bold", "bolder", "100", "200", "300", "400", "500", "600", "700", "800", "900"][Math.floor(Math.random()*12)];
            el.style.textDecoration = `${["underline", "overline", "line-through"][Math.floor(Math.random()*3)]} rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*50+50)/100}) ${["solid", "wavy", "dotted", "dashed", "double"][Math.floor(Math.random()*5)]}`;
            el.style.fontStyle = ["normal", "italic", "obliqu"][Math.floor(Math.random()*3)];
            el.style.fontStretch = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expande"][Math.floor(Math.random()*9)];
            el.style.fontVariant = ["normal", "small-caps"][Math.floor(Math.random()*2)];
            el.style.fontFamily = ["Arial, sans-serif", "Helvetica, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif", "Gill Sans, sans-serif", "Noto Sans, sans-serif", "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", "Optima, sans-serif", "Arial Narrow, sans-serif", "Times, Times New Roman, serif", "Didot, serif", "Georgia, serif", "Palatino, URW Palladio L, serif", "Bookman, URW Bookman L, serif", "New Century Schoolbook, TeX Gyre Schola, serif", "American Typewriter, serif", "Andale Mono, monospace", "Courier New, monospace", "Courier, monospace", "FreeMono, monospace", "OCR A Std, monospace", "DejaVu Sans Mono, monospace", "Comic Sans MS, Comic Sans, cursive", "Apple Chancery, cursive", "Bradley Hand, cursive", "Brush Script MT, Brush Script Std, cursive", "Snell Roundhand, cursive", "URW Chancery L, cursive", "Impact, fantasy", "Luminari, fantasy", "Chalkduster, fantasy", "Jazz LET, fantasy", "Blippo, fantasy", "Stencil Std, fantasy", "Marker Felt, fantasy", "Trattatello, fantasy"][Math.floor(Math.random()*36)];
            el.setAttribute("messifier-token", messifierToken);        
        });
    }
}());