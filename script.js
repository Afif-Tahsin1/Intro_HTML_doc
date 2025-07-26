let div = document.createElement("div");
div.className = "alert";
div.id = "paragraph";
div.innerHTML = "<p>Congrats! you make a element in javascript";

document.body.append(div);

let heading = document.getElementById("heading");
heading.innerHTML = "&#128512";

document.querySelector("header p").innerHTML = `<b> Good job! </b>`