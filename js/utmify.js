// Configuração do pixelId
window.pixelId = "6860a5f92020f51448257430";

// Script do pixel
var pixelScript = document.createElement("script");
pixelScript.async = true;
pixelScript.defer = true;
pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
document.head.appendChild(pixelScript);

// Script do UTMify
var utmScript = document.createElement("script");
utmScript.async = true;
utmScript.defer = true;
utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
utmScript.setAttribute("data-utmify-prevent-xcod-sck", "");
utmScript.setAttribute("data-utmify-prevent-subids", "");
utmScript.setAttribute("data-utmify-ignore-iframe", "");
document.head.appendChild(utmScript);


document.querySelectorAll('.redirectToLogin').forEach(function(element) {
  element.addEventListener('click', function() {
    if (location.hostname === 'localhost') {
      window.location.href = '/cnh social/02';
    } else {
      window.location.href = '/02';
    }
  });
});

// Google Pixel UTMify
window.googlePixelId = "686365256006a811622333a9";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
document.head.appendChild(a);