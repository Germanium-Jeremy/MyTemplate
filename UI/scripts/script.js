const templ1 = document.getElementById("templ1")
const templ2 = document.getElementById("templ2")
// const main = document.getElementsByTagName("main")[0]
const forTemplates = document.getElementsByClassName("forTemplates")[0]
const content1 = templ1.content.cloneNode(true)
const content2 = templ2.content.cloneNode(true)
forTemplates.appendChild(content1)
forTemplates.appendChild(content2)

const imageInput = document.getElementById('imageIn');
const imagePreview = document.getElementById('image');

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.classList.add("img")
    }
    reader.readAsDataURL(file);
  }
});

// TO ALLOW USER TO WRITE TEXT WITHOUT PROMPTING THE FILE SELECTION
var typingTimer;
var doneTypingInterval = 2000; // 1 second

document.getElementById('describe').addEventListener('input', function() {
  clearTimeout(typingTimer);
  document.getElementById('imageIn').style.display = 'none';
  const apply = document.getElementsByClassName('.apply')
  for (i=0; i<apply.length;i++){
    apply.style.display = "none"
  }
  typingTimer = setTimeout(function() {
    // Here you can show the elements again
    document.getElementById('imageIn').style.display = 'block';
    for (i=0; i<apply.length;i++){
      apply.style.display = "none"
    }
  }, doneTypingInterval);
});


// TO PUT TEMPLATE TOGETHER
function changes(){
  const applyButton = document.getElementsByClassName("apply")
  for (i=0; i<applyButton.length;i++){
    applyButton[i].addEventListener("click", function(){
      const template = document.getElementsByTagName("template")
      for (i=0; i<template.length; i++){
        const forTemplate = document.getElementById("usedTempl")
        let content = template.content.cloneNode(true)
        forTemplate.appendChild(content)
      }
    })
  }
}