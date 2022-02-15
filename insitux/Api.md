# API

# Index

-   [Main](https://blackshibe.github.io/deadline-wiki-data/insitux/Main.html)
-   [API](https://blackshibe.github.io/deadline-wiki-data/insitux/Api.html)
-   [Code samples](https://blackshibe.github.io/deadline-wiki-data/insitux/Samples.html)

# Enum-like strings

```clj
; MAPS
demo_baseplate
demo_claustrophobic_v3
demo_claustrophobic_v4
dl_shooting_range
dl_afghanistan
dl_shipment
```

```clj
; CALIBERS
45acp_match_fmj
545x39_ammo1
556_ammo1
762x51_nato_m80
762x54r_7n1
9x18_makarov_ammo
9x19_standard_ammo
invalid
```

```clj
; WEAPONS
M4A1
AK74N
UMP45
PP19
MP5
Remington700
MosinNagant
Glock17
Makarov
```

```clj
; CAMERA MODES
Default (fallback)
Freecam
Frozen
Tperson
```

# Contents

Tied directly to ingame completion.

<div id="__contents__" style="list-style-type: none">

</div>

<script defer>
    fetch("https://raw.githubusercontent.com/phunanon/Insitux/master/integrations/Deadline.json").then((response) => {
        response.text().then((data) => {
            let parsed = JSON.parse(data);
            let doc = document.getElementById("__contents__");
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
