document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animated-text");
    const text = textElement.textContent;
    textElement.textContent = "";
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust the speed here (milliseconds)
        }
    }
    
    typeWriter();
});
