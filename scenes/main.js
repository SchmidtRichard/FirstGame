//Add a sprite
const player = add([
  sprite("ferret-game02"),
  scale(0.1),
  pos(20, 20),
  
  //Apply gravity to the sprite
  body()
])

//Move the sprite accross the board
const MOVE_SPEED = 150

keyDown("right", () => {
  player.move(MOVE_SPEED, 0)
})

keyDown("left", () => {
  player.move(-MOVE_SPEED, 0)
})

//Add a level to the game - the first argument is the map and the second one the object (config)
addLevel([
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                        @        ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "                                 ",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxx     ",
], {
  //The width and the height are the values for every object (character) in the map e.g. x
  width: 40,
  height: 40,
  "x" : [sprite("ground"), solid()],
  "@" : [sprite("panda-8-bit"), scale(0.1), body(), "dangerous"]
})

//What happens when two things collide
player.collides("dangerous", () => {
  //Destroy the player
  destroy(player)
})