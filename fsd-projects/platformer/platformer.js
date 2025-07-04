$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid(); 


    // TODO 2 - Create Platforms
    createPlatform(100, 700, 200, 200);
    createPlatform(400, 600, 300, 200);
    createPlatform(900, 500, 200, 0.5);
    createPlatform(1300, 500, 300, 0.5);
    createPlatform(1200, 400, 100, 0.5);
    createPlatform(1200, 600, 100, 0.5);
    createPlatform (1000, 300, 100, 0.5);
    createPlatform (700, 300, 100, 0.5);
    createPlatform (500, 400, 100, 0.5);
    createPlatform (300, 400, 100, 0.5)
    createPlatform (200, 300, 100, 0.5)
    
  
    
    




    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 500);
    createCollectable("diamond",500, 300);
    createCollectable("max",230, 250)
    

    
    // TODO 4 - Create Cannons 
    createCannon("top", 300, 800);
    createCannon("right", 300, 1000);
    createCannon("right",700, 100)
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
