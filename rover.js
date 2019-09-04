// Rover Object and grid Goes Here
// ======================

      
     var rover = {
        direction: "N",
        x: 0,
        y: 0,
        travelLog: [0,0],
      };
      
      var instructions = "rffrffklfrffk"; 
    

      const myGrid = [
   
        [rover,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ]


      function turnLeft(rover){
        console.log("turnLeft was called!");
        switch (rover.direction) {
          case "N":
            rover.direction = "W";
            console.log("Rover is currently facing West");
            break;
      
          case "W":
            rover.direction = "S";
            console.log("Rover is currently facing South");
            break;
      
          case "S":
            rover.direction = "E";
            console.log("Rover is currently facing East");
            break;
      
          case "E":
            rover.direction = "N";
            console.log("Rover is now facing North");
      
        }
      
      }
      
      function turnRight(rover){
        console.log("turnRight was called!");
        switch (rover.direction) {
          case "N":
            rover.direction = "E";
            console.log("Rover is facing East");
            break;
      
          case "W":
            rover.direction = "N";
            console.log("rover is facing North");
            break;
      
          case "S":
            rover.direction = "W";
            console.log("Rover is facing facing West");
            break;
      
          case "E":
            rover.direction = "S";
            console.log("Rover is facing South");
            break;
        }
      }
   // Al poner la segunda condición en el if o else if hago que no se salga del grid
      function moveForward(rover){
        console.log("moveForward was called");
        if (rover.direction == "W" && rover.x > 0) {
          rover.x -= 1;
          rover.travelLog.push([rover.x, rover.y]); // con esto se empuja a la arra de travelLog
        } else if (rover.direction == "N" && rover.y > 0 ) {
          rover.y -= 1;
          rover.travelLog.push([rover.x, rover.y]);
        } else if (rover.direction == "S" && rover.y < 9) {
          rover.y += 1;
          rover.travelLog.push([rover.x, rover.y]);
        } else if (rover.direction == "E" && rover.x < 9 ) {
          rover.x += 1;
          rover.travelLog.push([rover.x, rover.y]);
        } else  {
          console.log("Houston! We have a problem."); 
        }
      
        } 
      

        function moveBackward(rover){
            console.log("moveForward was called");
            if (rover.direction == "W" && rover.x < 9) {
              rover.x += 1;
              rover.travelLog.push([rover.x, rover.y]); // con esto se empuja a la arra de travelLog
            } else if (rover.direction == "N" && rover.y < 9 ) {
              rover.y += 1;
              rover.travelLog.push([rover.x, rover.y]);
            } else if (rover.direction == "S"  && rover.y > 0) {
              rover.y -= 1;
              rover.travelLog.push([rover.x, rover.y]);
            } else if (rover.direction == "E" && rover.x > 0 ) {
              rover.x -= 1;
              rover.travelLog.push([rover.x, rover.y]);
            } else  {
              console.log("Houston! We have a problem."); 
            }

        }
      
      // Usamos método charAt para que recorra las intrucciones 
      for (var i = 0; i < instructions.length; i++) {
        var inputLetter = instructions.charAt(i);
        if (inputLetter != "r" && inputLetter != "f" && inputLetter != "l" && inputLetter != "b" ) {    
        console.log("command is not valid !!!");
        }else if (inputLetter == "r") {
          turnRight(rover);
        } else if (inputLetter == "f") {
          moveForward(rover);
        } else if (inputLetter == "l") {
          turnLeft(rover);
        } else if (inputLetter == "b") {
            moveBackward(rover);
        } else {
          console.log("Houston! We have a problem."); 
        }
        console.log("The Rover's current position is: [" + rover.x + "," + rover.y + "]");
      }
      
      console.log(rover.travelLog);