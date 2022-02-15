# Getting Started

A better base explanation written by Patrick himself is available in [phunanon/Insitux](https://github.com/phunanon/Insitux)<br/>
If you want to look at scripts written by other people, check out [phunanon/InsituxScripts](https://github.com/phunanon/InsituxScripts/)

# Index

-   [Main](https://blackshibe.github.io/deadline-wiki-data/insitux/Main.html)
-   [Getting Started](https://blackshibe.github.io/deadline-wiki-data/insitux/GettingStarted.html)
-   [API](https://blackshibe.github.io/deadline-wiki-data/insitux/Api.html)
-   [Code Samples](https://blackshibe.github.io/deadline-wiki-data/insitux/Samples.html)

# Preparation

Grab a VIP server (they're free!) and press the ` key on your keyboard ingame to open the terminal window.
You can drag its position or size like a regular window by using the handles that only become visible once you hover on top of them.

# The basics

just like any other language Insitux has primitive datatypes which functions take in to output something.
you can call functions with the format `(function ...arguments)`:

```clj
(print "hello world")
```

...and define your own with `function`:

```clj
(function greet name (print "hello, " name "!"))
(greet "dave")
; -> hello, dave!
```

all math works in this way, too:

```clj
(let a 0)
(let c (+ a 10))
(print a b)
; -> 0 10
```

don't forget about booleans:

```clj
(print true false)
-> true false
(if true (print "true is truthy"))
-> true is truthy
```

# Integration with the game

however, the main point of Insitux inside deadline is interaction with the game itself.
the entirety of the available API is available from both the ingame terminal or [here.](./Api.md)

## Get-Set

The dollar sign denotes a get-or-set operation.
Let's first shift the time by a few hours:

```clj
($dl.globals.time_offset 10)
-> 10
```

This will set the value of dl.globals.time_offset to 10.
You can think of it as doing `dl.globals.time_offset.value = 10`.
Next, you can tell everyone about the current time offset:

```clj
(dl.util.fmessage "the current time offset is: " $dl.globals.time_offset)
-> null
```

The chat window should say "the current time offset is: 10", or "##########" depending on how roblox feels that given day.
Think of it as `dl.util.fmessage("the current time offset is:" .. dl.globals.time_offset.get())`

## Enum-like strings

You may notice there is `dl.util.set_map` with a string as an argument, but the function does not actually load anything if you give it a variable or a regular map name.
Insitux or shobfix do not have a specific solution for this like an Enum datatype, so every possible value is denoted inside the [API](./Api.md) section.

based off of this, you can now load a shooting range:

```clj
(dl.util.set_map "dl_shooting_range")
```

## Events

You may want your scripts to react to what happens in the game world. there is a folder (`dl.events`) for this.
We can try writing a simple chat-bot with on_chat_message:

```clj
(function sent sender channel contents (print "message sent: " sender " " channel " " contents))
(dl.events.on_chat_message.connect sent)
```

This will create a function `sent` that then connects to `on_chat_message`.
then, if we type something into the chat, we can see that the console window prints out the message:

```
message sent: BIackShibe all hello insitux
```

you may want to kill this event connection eventually, for this you can use `(dl.events.on_chat_message.kill)`.
Next, let's make the bot only react to a certain prefix:

```clj
(function sent sender channel contents
    (print "message sent: " sender " " channel " " contents)
    (if (starts? contents "!help")
        (print "received message!")
    )
)
(dl.events.on_chat_message.connect sent)
```

and say `!help` in the chat:

```
message sent: BIackShibe all !help
received message!
```

You can always expand this further.
