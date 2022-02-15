# API

Tied directly to ingame completion.

<div id="contents">

</div>

## Index

-   [Main](https://blackshibe.github.io/deadline-wiki-data/insitux/Main.html)
-   [API](https://blackshibe.github.io/deadline-wiki-data/insitux/API.html)
-   [Code samples](https://blackshibe.github.io/deadline-wiki-data/insitux/Samples.html)
-   [User scripts](https://blackshibe.github.io/deadline-wiki-data/insitux/Scripts.html)

<script defer>
    let response = await fetch("https://raw.githubusercontent.com/phunanon/Insitux/master/integrations/Deadline.json");
    response.text().then((data) => {
        let parsed = JSON.parse(data);
        let doc = document.getElementById("contents");
        for (i in parsed) {
            doc.innerText += parsed[i];
        }
    });
</script>
