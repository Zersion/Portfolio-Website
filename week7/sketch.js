let classifier;
let canvas;
let clearBtn;
let classifyBtn;
let statusMsg;
let resultContainer;

// 状态变量
let isModelReady = false;

function setup() {
  // 创建画布并放入指定的 div 中
  canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  background(255); // 白色背景，符合 DoodleNet 训练数据的风格

  // 获取 DOM 元素
  clearBtn = select('#clearBtn');
  classifyBtn = select('#classifyBtn');
  statusMsg = select('#status-msg');
  resultContainer = select('#result-container');

  // 绑定按钮事件
  clearBtn.mousePressed(clearCanvas);
  classifyBtn.mousePressed(classifyDoodle);

  // 初始化 DoodleNet 模型
  // 注意：ml5 v1 的回调函数只接收 results，不再接收 error 参数
  classifier = ml5.imageClassifier('DoodleNet', modelLoaded);
}

function draw() {
  // 如果鼠标按住，则绘制线条
  if (mouseIsPressed && mouseY > 0 && mouseY < height && mouseX > 0 && mouseX < width) {
    stroke(0); // 黑色线条
    strokeWeight(16); // 较粗的笔触，识别效果更好
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function modelLoaded() {
    isModelReady = true;
    statusMsg.html('✅ Model loaded! Start drawing.');
    
    // Correct approach: directly remove the disabled attribute
    classifyBtn.elt.disabled = false;
    
    console.log('DoodleNet Model Loaded!');
}

// 清空画布
function clearCanvas() {
  background(255); // 必须使用 background(255) 而不是 clear()，否则背景变透明会影响识别
  resultContainer.html('<div id="status-msg">Canvas cleared. Draw something new!</div>');
  // 重新获取状态消息的引用，因为 innerHTML 被覆盖了
  statusMsg = select('#status-msg');
}

// 执行识别
function classifyDoodle() {
  if (!isModelReady) return;

  // 显示正在识别
  resultContainer.html('<div id="status-msg">🤔 Thinking...</div>');
  
  // 将 p5 的画布传递给分类器
  classifier.classify(canvas, gotResults);
}

// 获取分类结果的回调
function gotResults(results) {
  // ml5 v1 的错误处理方式：如果出错，通常会在控制台抛出，或者 results 为空
  if (!results || results.length === 0) {
    console.error('Classification failed or returned no results.');
    resultContainer.html('<div id="status-msg">❌ Error recognizing doodle. Please try again.</div>');
    return;
  }

  console.log(results); // 在控制台查看完整结果数组

  // 提取置信度最高的结果
  let bestMatch = results[0];
  let label = bestMatch.label;
  let confidence = (bestMatch.confidence * 100).toFixed(1);

  // 更新 UI 显示
  resultContainer.html(`
    <div>I think this is a...</div>
    <div class="label-highlight">${label}</div>
    <div class="confidence">(${confidence}% confidence)</div>
  `);
}