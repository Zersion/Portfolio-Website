const viewer = document.querySelector("#model-viewer");
const arButton = document.querySelector("#ar-button");

viewer.addEventListener("load", () => {
  console.log("3D model loaded");
});

viewer.addEventListener("ar-status", (event) => {
  console.log("AR status:", event.detail.status);
});