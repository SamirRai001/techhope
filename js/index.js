

// audio on click 

var buttons = document.getElementsByClassName("audio");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var soundClip = this.getAttribute("data-sound");
        var audio = new Audio(soundClip);
        audio.play();
    });
}


// image change animation

function rotateImages(elementId, imagePaths, interval) {
    var currentIndex = 0;
    var targetElement = document.getElementById(elementId);

    function changeImage() {
        targetElement.src = imagePaths[currentIndex];
        currentIndex = (currentIndex + 1) % imagePaths.length;
    }

    setInterval(changeImage, interval);
}

rotateImages("mainlogo", [
    "Image/logo-animation-1.png",
    "Image/logo-animation-2.png",
    "Image/logo-animation-3.png"
], 1000);

rotateImages("main-text-logo", [
    "Image/logo-animation-4.png",
    "Image/logo-animation-5.png",
    "Image/logo-animation-6.png",
    "Image/logo-animation-7.png",
    "Image/logo-animation-8.png"
], 1500);

rotateImages("main-link-1", [
    "Image/link-animation-1.png",
    "Image/link-animation-2.png",
    "Image/link-animation-3.png",
    "Image/link-animation-4.png"
], 2000);

rotateImages("main-link-2", [
    "Image/link-animation-5.png",
    "Image/link-animation-6.png",
    "Image/link-animation-7.png",
    "Image/link-animation-8.png"
], 2000);

rotateImages("main-link-3", [
    "Image/link-animation-9.png",
    "Image/link-animation-10.png",
    "Image/link-animation-11.png",
    "Image/link-animation-12.png"
], 2000);


// auto typing animation

 // Array of texts to be typed
 const texts = ["TECH HOPE", "Coding", "Designing", "Learning"];

 // Delay between each letter (in milliseconds)
 const typingDelay = 100;

 // Delay before erasing the text (in milliseconds)
 const erasingDelay = 2000;

 // Delay before starting the typing effect again (in milliseconds)
 const newTextDelay = 1000;

 let textIndex = 0;
 let charIndex = 0;
 let erase = false;

 const typingEffect = document.getElementById('typing-effect');

 function type() {
     if (charIndex < texts[textIndex].length) {
         typingEffect.textContent += texts[textIndex].charAt(charIndex);
         charIndex++;
         setTimeout(type, typingDelay);
     } else {
         setTimeout(eraseText, erasingDelay);
     }
 }

 function eraseText() {
     if (charIndex >= 0) {
         const currentText = typingEffect.textContent;
         typingEffect.textContent = currentText.substring(0, charIndex - 1);
         charIndex--;
         setTimeout(eraseText, typingDelay);
     } else {
         erase = false;
         textIndex++;
         if (textIndex >= texts.length) {
             textIndex = 0;
         }
         setTimeout(type, newTextDelay);
     }
 }

 document.addEventListener('DOMContentLoaded', type);


//  auto audio after load

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    audio.play();
});