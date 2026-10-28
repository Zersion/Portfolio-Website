let shared;
let me;
let participants;
let spriteImg;
let bgImg;

function preload() {
  partyConnect(
    "wss://demoserver.p5party.org",
    "code-as-nature-wasd"
  );

  shared = partyLoadShared("shared");
  me = partyLoadMyShared({
    x: 500,
    y: 400,
    hue: random(360),
    facing: 1  // 1 = right, -1 = left
  });
  participants = partyLoadGuestShareds();

  // Replace with your own image paths or URLs
  spriteImg = loadImage("assets/kendoka.png");
  bgImg = loadImage("assets/dojo.jpg");
}

function setup() {
  createCanvas(1000, 800);
  colorMode(HSB, 360, 100, 100);
  imageMode(CENTER);
}

function draw() {
  // Draw the background image to fill the canvas
  image(bgImg, width / 2, height / 2, width, height);

  for (const p of participants) {
    if (p.x === undefined || p.y === undefined) continue;

    // Tint the sprite with the player's hue so players are distinguishable
    tint(p.hue, 70, 100);

    push();
    translate(p.x, p.y);

    // Flip horizontally when facing left
    if (p.facing === -1) {
      scale(-1, 1);
    }

    image(spriteImg, 0, 0, 100, 100);
    pop();

    // Reset tint so text/strokes render normally
    noTint();

    // Outline for "me"
    // if (p === me) {
    //   noFill();
    //   stroke(0, 0, 0);
    //   strokeWeight(2);
    //   ellipse(p.x, p.y, 64, 64);
    // }

    noStroke();
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(p === me ? "you" : "peer", p.x, p.y - 45);
  }
}

function keyPressed() {
  const speed = 5;

  if (key === 'w' || key === 'W') {
    me.y = max(30, me.y - speed);
  }
  if (key === 's' || key === 'S') {
    me.y = min(height - 30, me.y + speed);
  }
  if (key === 'a' || key === 'A') {
    me.x = max(30, me.x - speed);
    me.facing = -1;
  }
  if (key === 'd' || key === 'D') {
    me.x = min(width - 30, me.x + speed);
    me.facing = 1;
  }
}