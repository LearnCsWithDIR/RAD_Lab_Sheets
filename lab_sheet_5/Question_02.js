//abstract class
class Solid{
    constructor(){

    }

    //abstract methods
    calculateArea(){
        throw new Error("Method not implemented");
    } 

    calculateVolume(){
        throw new Error("Method not implemented");
    }

}

//Cube subclass
class Cube extends Solid{
    constructor(length){
        super();
        this.length= length;
    }
    calculateArea(){
       return 6 * this.length * this.length;
    } 

    calculateVolume(){
       return this.length * this.length * this.length;
    }
}

//Cuboid subclass
class Cuboid extends Solid{
    constructor(length,breadth,height){
        super();
        this.length =  length;
        this.breadth = breadth;
        this.height = height;
    }

    calculateArea(){
        return 2 * ((this.length * this.breadth) + (this.length * this.height) + (this.breadth* this.height));
    }

    calculateVolume(){
        return this.length * this.breadth * this.height; 
    }
}

//Cylinder subclass
class Cylinder extends Solid{
    constructor(radius,height){
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateArea(){
       return (( 2 * Math.PI * this.radius * this.radius) + (2 * Math.PI * this.radius * this.height));
    }

    calculateVolume(){
       return (Math.PI * this.radius * this.radius * this.height);
    }
}

//Sphere subclass
class Sphere extends Solid{
    constructor(radius){
        super();
        this.radius = radius;
    }

    calculateArea(){
        return 4 * Math.PI * this.radius * this.radius;
    }

    calculateVolume(){
        return ( 4/3.0) * Math.PI * this.radius * this.radius * this.radius;
    }

}
//Cone subclass
class Cone extends Solid{
    constructor(radius,height){
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateArea(){
        const slantHeight = Math.sqrt(this.radius* this.radius + this.height * this.height);
        return Math.PI * this.radius * (this.radius + slantHeight);
    }

    calculateVolume(){
        return (1 / 3) * Math.PI * this.radius * this.radius * this.height;
    }
}

const cube = new Cube(6);
console.log("Surface Area of the cube :",cube.calculateArea());
console.log("Volume of the cube :",cube.calculateVolume());

const cuboid = new Cuboid(3,4,6);
console.log("Surface Area of the cuboid:",cuboid.calculateArea());
console.log("Volume of the cuboid :",cuboid.calculateVolume());

const cylinder = new Cylinder(4,8);
console.log("Surface Area of the cylinder:",cylinder.calculateArea());
console.log("Volume of the cylinder :",cylinder.calculateVolume());

const sphere= new Sphere(5);
console.log("Surface Area of the sphere:",sphere.calculateArea());
console.log("Volume of the sphere:",sphere.calculateVolume());

const cone = new Cone(5,8);
console.log("Surface Area of the cone:",cone.calculateArea());
console.log("Volume of the cone :",cone.calculateVolume());



