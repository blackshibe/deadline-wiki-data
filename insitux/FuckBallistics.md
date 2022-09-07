# Why I made this document

The game does little to explain the current ballistics mechanics implemented which results in confusion and outright stupid statements like "distance between afghanistan spawns is 150 studs". <br/>

# TLDR

-   Distance between Afghanistan spawns is 1000 studs, Shipment is 1000x1000 studs
-   Scopes may or may not be inaccurate or off regardless of zeroing distance
-   Zeroing, right now, is bullshit
-   The barrel deviation stat is a maximum, not an average
-   Different weapon classes respond (slightly) differently to barrel deviation
-   Game is shit and unfinished most of the time because of technical reasons as there is only one programmer on the team

# First, distance reference

Zeroing may lead you to believe that the furthest possible distances on the map are only about 400 studs. The maximum was implemented based on meter-to-stud conversion, which is based on the speed of sound in the game (off the top of my head, ~1200 studs/s) <br/>

The distances are much larger:

-   Afghanistan spawn-to-spawn is roughly 1000 studs, the whole map is 2k by 2k studs
-   Shipment is 1k by 1k studs

but this is not an issue for zeroing, because...

# Second, How does zeroing actually work?

Here's a surprise: It doesn't account for bullet drop, at least not in 0.21. <br/>
It works by aiming the reticle at a point X studs away from the barrel, in a straight line. <br/>
Bullet drop has not been measured by the devs but it is only ever an issue with SMGs, which are inaccurate for such uses in the first place. Sniper rifle projectiles travel very, very quickly, making this less problematic. <br/>

# Third, what about barrel deviation?

Barrel deviation is measured in MAXIMUM deviation at 100 studs, which may also become larger over distance. <br/>
In theory, this means a weapon with a barrel deviation of 1 stud may miss by the size of a player head on its' own. <br/>
Projectiles have a statistic that changes how barrel deviation reacts; It's the bias of where shots will go. a low value means they fly mostly randomly. A higher value means they will nearly always hit the center, but sometimes end up curving as far as their barrel deviation allows. <br/>

This is based on caliber, not weapon; it's closer to 1 for shotgun shells and SMG calibers, and higher for rifles and sniper rifles.

# Fourth, Why aren't my shots hitting?

Right now, it may be one of many, many issues. The game adopts a no-bullshit model for handling where shots go and the optics implementation which has evolved too quickly for our 30+ scopes is having problems keeping up. Variable zoom scopes don't make this any easier. <br/>

In all probability, it's probably your optic. They all go through quality control to ensure their zeroing is accurate but it doesn't seem to be enough.
