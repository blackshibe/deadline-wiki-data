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
```