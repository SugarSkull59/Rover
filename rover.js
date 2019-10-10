// Rover Object and grid Goes Here
// ======================

      
     let rover = {
        direction: "N",
        x: 0,
        y: 0,
        travelLog: [0,0],
      };
      
      let instructions = "rffrffklfrffk"; 
    
      let obstacles = {
        x: [4, 2],
        y: [1, 3]
    };

     //    Esto es una matriz para yo ver como quedaría: r= rover; X = obstáculos; 0= espacios vacíos
//   [r, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, X, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, X, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


// ======================


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
      
/* Creamos una función  que recibe cuatro parámetros: forward, right, left y backward. Esta función es la que hace todo el movimiento de rover. 1º le paso x- y  que son posiciones; 2º bucle for para que recorrar el string, que corresponde al parámetro primero de función; 3º Un condicional con las distintas opciones; 4º La llamada a la función de validación; 5º El push para travelLog*/

function move(param, rover) {

    x = rover.position[0];
    y = rover.position[1];


    for (let i = 0; i < param.length; i++) {

        if (checkObstacles() === false) {


            if (param[i] === "f") {
                moveForward(rover);

            } else if (param[i] === "l") {
                turnLeft(rover);

            } else if (param[i]) {
                turnRight(rover);

            } else if (param[i] === "b") {
                moveBackward(rover);

            } else {
                console.log("That movement is not valid");
            }
        }
        validationOfMovement();

    }

}



/* Esta función lo que hace es provocar que no se salga de la cuadrícula de 10*10 */
function validationOfMovement() {
    x = rover.position[0];
    y = rover.position[1];



    if ((x >= 0) && (x <= 10) && (y >= 0) && (y <= 10)) {

        console.log(`The movement is correct. Final Position ${rover.position}`);

        rover.travelLog.push(`[ ${rover.position[0]}  ,  ${ rover.position[1]} ]`);
        console.log(rover.travelLog);

    } else {
        return "The movement is wrong"

    }
}



/* Función para comprobar que hay obstaculos, le puse los dos return para que en el caso de encontrar un obstaculo, se salga
y me de la última posición antes del obstaculo */
function checkObstacles() {

    for (let j = 0; j < obstacles.x.length; j++) {
        if (rover.position[0] === obstacles.x[j] && rover.position[1] === obstacles.y[j]) {
            console.log("You can't move forward, there is an obstacle");
            return true;

        } else {
            return false;
        }
    }
}

    