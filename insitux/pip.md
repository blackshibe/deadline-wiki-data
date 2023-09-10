# is PiP possible on roblox?

- Short answer: No
- Long answer:

## Yes, but not really

In unity, you can create a camera, make it render to a 2D texture, then feed that texture to a plane to display it. This is supported and renders one game world, with the same physics
and the same graphics between cameras. It's 5 minutes of work and the real deal is optimizing the game to run such a setup.

On roblox picture in picture can only be achieved by creating a ViewportFrame. Every time someone shows you PiP on roblox, it's either: 

- A ViewportFrame
- The glass shader, which works like real glass, except magnification for it is disabled below a certain graphics level and it doesn't actually render anything, making the view inside of the scope extremely pixelated (obviously making it completely unsuitable to use as a mechanic for both reasons) 

For those unaware, ViewportFrames are meant to display single models in UI with a transparent background and nothing else. 
They are the more suitable option, but obviously there's gonna be a few issues here...

### Performance

To render the actual game, you must copy the ENTIRETY of the game world to inside the viewport frame. Now - we're copying, not linking, so all CFrame or physics changes every frame must be
cloned manually since ViewportFrames doesn't render the actual game world. This means you must create a TON of listener events and you will have to apply any changes to instances twice.

The results? massively higher memory usage and terrible performance at scale.

### Visuals

ViewportFrames have their own lighting, and don't render fog, depth of field, blur, or any particles. They also don't render the fucking skybox like you'd expect a dual-render system to do.

### The result

Glass doesn't work, neither do ViewportFrames. On roblox dual rendering is nothing more than a gimmick.

## But why doesn't roblox just implement proper dual camera rendering?

-- Warning: these are my opinions of what the engineers think based on what they've said on the DevForum. If you'd like to read the ones the engineers actually have, look up common feature requests on the devforum.
-- I recommend a particularly sad one with a particularly sad and realistic explanation - [The light range limit increase.](https://devforum.roblox.com/t/increase-range-limit-of-lights/68336/199)

Roblox may seem like there's no logic in implementing new features, but there is. Unfortunately from what i've read the mentality seems to be that:

- The ENTIRE engine must be real-time (no baking lighting, like traditional engines have already been doing for years to get decent visuals)
- If it won't run on mobile, don't implement it
- The less control for the user (developer), the better - keep everything simple
- The less breaking changes, the better

### Breaking changes is the word here 

A lot of people really like saying that roblox updates break everything constantly. This hasn't been true for years now; an actively updated game will have no problem keeping up with changes.
The reason Roblox doesn't move the way a normal engine does is because it's not really meant to work like one. Roblox is a live-service platform for live-service games.

Unity can just deprecate an entire API in their newest yearly release; If roblox renamed game.GameId to game.ExperienceId, lots (maybe even most) games would completely break. 
The removal of a completely useless service in 2021 broke the Deadline prototype, and the irony is that there was a warning for said service displayed in the output for several months before its' removal.

The result is that PBR, shadowmap & projection lighting, etc. all gets implemented 10 years behind, even though those things are probably written by college students as exercises for their
graphical programming course. 

Every time Roblox releases a new feature I can only think about how Unity did it a decade ago.
