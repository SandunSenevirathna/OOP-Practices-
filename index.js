// Create an Object

/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log("Drawing a Circle");
    },
};
*/


// Factory Function

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log(`Factory Function | Radius is ${radius} and Drawing a Circle`);
        },
    };
}

const circle = createCircle(1)

// Constuctor Function

function Circle(radius){
    this.radius = radius;
    this.draw =  function(){
        console.log(`Constuctor Function | Radius is ${radius} and Drawing a Circle`);
    }
}

const newCircle = new Circle(1)


newCircle.draw();