# API

Tied directly to ingame completion.

## Index

-   [Main](https://blackshibe.github.io/deadline-wiki-data/insitux/Main.html)
-   [API](https://blackshibe.github.io/deadline-wiki-data/insitux/API.html)
-   [Code samples](https://blackshibe.github.io/deadline-wiki-data/insitux/Samples.html)
-   [User scripts](https://blackshibe.github.io/deadline-wiki-data/insitux/Scripts.html)

# Contents

<div id="contents" style="list-style-type: none">

</div>

<script defer>
    fetch("https://raw.githubusercontent.com/phunanon/Insitux/master/integrations/Deadline.json").then((response) => {
        response.text().then((data) => {
            let parsed = JSON.parse(data);
            let doc = document.getElementById("contents");
            doc.innerText = "";

            for (i in parsed) {
                let code = "";

                for (other_i in parsed[i].list) {
                    code += parsed[i].list[other_i].directory + "\n";
                    parsed[i].list[other_i].description.forEach((element) => {
                        code += element + "\n";
                    });
                    code += "<br>\n<br/>";
                }

                let list_item = document.createElement("li");
                let title = document.createElement("h1");
                title.innerText = i;
                let description = document.createElement("p");
                description.innerText = parsed[i].description;
                let pre = document.createElement("pre");
                let code_element = document.createElement("code");
                pre.appendChild(code_element);
                code_element.innerHTML = code;

                list_item.appendChild(title);
                list_item.appendChild(description);
                list_item.appendChild(pre);

                doc.appendChild(list_item);
            }
        });
    });
</script>
