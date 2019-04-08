// Sunrise

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.height = 600;
cnv.width = 800;

// img variable
let cloud = document.getElementById("cloud-img");

// Animation
// Global Variables
let cloudLeft = 320;
let cloudRight = 360;
let sunRise = 450;
let square = 100;
let sunSize = 60;
let sunColor = 0;

let frameCount = 0;

// Main Program Loop (60FPS)
requestAnimationFrame(cloudAnimate);
function cloudAnimate() {
    // Update variables
    cloudLeft--;
    cloudRight++;
    frameCount++;
    if (frameCount > 30 && sunRise > 160) {
        sunRise--;
        sunSize = sunSize + 0.1;
    }
    if (sunColor < 180) {
        sunColor++;
    }
    
    // Draw background
        // Background
        ctx.fillStyle = "darkblue";
        ctx.fillRect(0, 0, cnv.width, cnv.height);

        // Sun
        ctx.fillStyle = "rgb(255," + sunColor + ", 0)";
        ctx.beginPath();
        ctx.arc(400, sunRise, sunSize, 0, 2 * Math.PI); // Animated sun
        ctx.fill();
        
        // Ground
        ctx.fillStyle = "darkgreen";
        ctx.fillRect(0, 450, 800, 150);

    // Animation
    ctx.drawImage(cloud, cloudLeft, 180);
    ctx.drawImage(cloud, cloudRight, 160);

    requestAnimationFrame(cloudAnimate);
}
