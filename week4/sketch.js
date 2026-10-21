// ml5.js 1.0 and FaceMesh
// https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/0-introduction/patt-vira
// https://youtu.be/2h8VArJ3gnQ

// Subscribe to Patt Vira's channel!
// https://youtube.com/@PattVira

let video;
let faceMesh;
let faces = [];

function preload() {
  faceMesh = ml5.faceMesh({ maxFaces: 1, flipped: true });
}

function gotFaces(results) {
  // console.log(results);
  faces = results;
}

function setup() {
  createCanvas(960, 720);
  video = createCapture(VIDEO, { flipped: true });
  video.size(960, 720);
  video.hide();

  faceMesh.detectStart(video, gotFaces);

  console.log(ml5.version);
}

function mousePressed() {
  console.log(faces);
}

function draw() {
  background(0);
  image(video, 0, 0);

  if (faces.length > 0) {
    // let lips = faces[0].lips;
    let leftEye = faces[0].leftEye;
    let rightEye = faces[0].rightEye;
    strokeWeight(4);
    noFill();
    stroke(255, 100, 255);
    console.log(leftEye);
    console.log(rightEye);

    let leftMidPoint = { x: leftEye.x+leftEye.width/2, y: leftEye.y + leftEye.height/2 };
    let rightMidPoint = { x: rightEye.x+rightEye.width/2, y: rightEye.y + rightEye.height/2 };
    let midPoint = { x: (leftMidPoint.x + rightMidPoint.x)/2, y: (leftMidPoint.y + rightMidPoint.y)/2 };
    circle(leftMidPoint.x, leftMidPoint.y, 5);
    circle(rightMidPoint.x, rightMidPoint.y, 5);
    circle(midPoint.x, midPoint.y, 5);
    // rect(leftEye.x, leftEye.y, leftEye.width, leftEye.height);
    // rect(rightEye.x, rightEye.y, rightEye.width, rightEye.height);
    
    for (let eyePoint of leftEye.keypoints) {
      strokeWeight(2);
      stroke(0, 255, 0);
      point(eyePoint.x, eyePoint.y);
    }

    for (let eyePoint of rightEye.keypoints) {
      strokeWeight(2);
      stroke(0, 255, 0);
      point(eyePoint.x, eyePoint.y);
    }
    
    
  }
}
