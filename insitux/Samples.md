# Samples

If you want to look at scripts written by other people, check out [phunanon/InsituxScripts](https://github.com/phunanon/InsituxScripts/)

# Index

-   [Main](./Main.html)
-   [Getting Started](./GettingStarted.html)
-   [API](./Api.html)
-   [Code Samples](./Samples.html)

```clj
; load the shooting range
(dl.util.set_map "dl_shooting_range")

; chatbot script
; open this link in the browser to see the code itself
(load "https://phunanon.github.io/InsituxScripts/chatbot2.ix")

; move time by 10 hours
($dl.globals.time_offset 10)

; make the gun editor crazier
($dl.globals.editor_mount_any true)
($dl.globals.disable_attachment_checks true)

; set your team to insurgent
($dl.players.your_name_here.team "insurgent")

; enable teamkilling
($dl.globals.team_kill true)

; make everything dark and creepy
(dl.sound.new "sh")
(dl.sound.set_id "sh" "rbxassetid://9797019832")
(dl.sound.play "sh")
(dl.sound.set_looped "sh" true)
(dl.util.set_map "dl_afghanistan")
(dl.util.set_preset "darkworld")
($dl.globals.time_offset 10)
(dl.util.kill_all_lights)

; replace the player loadout with a turret
; it's a bit unstable but it works
(function spawned name
   (wait 2)
   (print name)
   ((str "dl.players." name ".set_player_weapon") "primary" "Turret" "{\"saved_active\": [],\"mounted\": [],\"save_revision\": 501}")
   ((str "dl.players." name ".set_player_weapon") "secondary" "nothing" "")
)
(dl.events.on_player_spawned.kill)
(dl.events.on_player_spawned.connect spawned)

; the last argument of the function can be acquired with (dl.players.name.get_loadout "Turret" 0)
; alternatively, you can feed it a variable from dl.util.read_setup:
(var setup (dl.util.read_setup "nrel-c85fcab7-f205-4fd7-a0eb-acc9c7a43a6f")) ; the variable itself is just a really long string
(dl.players.BIackShibe.set_player_weapon "primary" "M4A1" setup) 

; turn the game into a movement shooter
; anticheat kills people who stay in the air
($dl.globals.airkill false)
($dl.globals.fall_damage_enabled false)
($dl.globals.gravity 10)
($dl.globals.debug_player_speed 15)
($dl.globals.debug_player_jump_force 4)
```