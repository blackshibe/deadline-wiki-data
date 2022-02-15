# API

to set values, add $ to treat them like a "set" function:

```clj
($dl.globals.time_offset 0.5)
;; 0.5
```

to get values, add $ to treat them like a "get" function when supplied as arguments

```clj
(print $dl.globals.time_offset)
;; prints the value of dl.globals.time_offset
```

### Other

to define variables, use `var`:

```clj
(var hi 0.5)
(print hi)
;; prints hi (0.5)
```

### Examples

```clj
(print "hello world from deadline " $dl.globals.version " rev. " $dl.globals.revision)
```

```clj
(dl.util.set_map "dl_shipment")
```

## Integration guide

### Playing sounds

`dl.sound` is a class that allows playing sounds.

```clj
(dl.sound.new "handle")
(dl.sound.set_id "handle" "your_id")
(dl.sound.play "handle")
(wait 10)
(dl.sound.set_time_position "handle" 0)
```

`dl.gunshot_emitter` mimicks gunshot sounds the game plays.

```clj
(dl.gunshot_emitter.new "handle" "UMP45")
(dl.gunshot_emitter.set_position "handle" [0 100 0])

;; automatic gunfire
(dl.gunshot_emitter.start_kind "handle" "auto")
(wait 3)
(dl.gunshot_emitter.stop_kind "handle" "auto")
(dl.gunshot_emitter.start_kind "handle" "tail")
```

### Simulating weapons

```clj
;; fires a non-damaging UMP45 shot at 1500 projectile velocity
(dl.util.fire [0 0 0] [0 100 0] "45acp_match_fmj" 1500)
```

```clj
;; blows you up
(dl.players.you.explode)
;; explodes a grenade that deals damage at 0,100,0
(dl.util.explosion [0 100 0])
```

### Manipulating players

```clj
(dl.players.you.fill_ammo "primary")
```

## Index

-   [Main](https://blackshibe.github.io/deadline-wiki-data/insitux/Main.html)
-   [API](https://blackshibe.github.io/deadline-wiki-data/insitux/Api.html)
-   [Code samples](https://blackshibe.github.io/deadline-wiki-data/insitux/Samples.html)
-   [User scripts](https://blackshibe.github.io/deadline-wiki-data/insitux/Scripts.html)

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
