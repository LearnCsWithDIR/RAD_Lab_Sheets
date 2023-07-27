//Abstract class
class Bookstore{
   constructor( name, price, author, publisher){
    this.name = name;
    this.price= price;
    this.author = author;
    this.publisher = publisher;
   }

   //abstract method
   calculateDiscount(){
    throw new Error("Method not implemented");
   }

   displayDetails(){
    console.log("Name of the book : ",this.name);
    console.log("Price : ",this.price);
    console.log("Author : ",this.author);
    console.log("Publisher: ",this.publisher);

   }
}

// Novel&short stories subclass
class NoverlsShortstories extends Bookstore{
    constructor( name, price, author, publisher){
        super(name,price,author,publisher);
    }

    calculateDiscount(){
        return this.price * 0.15;
    }
}
// educational books subclass
class EducationalBooks extends Bookstore{
    constructor( name, price, author, publisher){
        super(name,price,author,publisher);
    }

    calculateDiscount(){
        return this.price * 0.20;
    }
}

//  biographies subclass
class  Biographies extends Bookstore{
    constructor( name, price, author, publisher){
        super(name,price,author,publisher);
    }

    calculateDiscount(){
        return this.price * 0.10;
    }
}

const educational = new EducationalBooks("Mathematics",2500 ,"S.Perera","TimesLine");
educational.displayDetails();
console.log("Discount : ",educational.calculateDiscount());

const novels = new NoverlsShortstories("Secret five",1000,"Enid Blydon","Sarasavi Publishers");
novels.displayDetails();
console.log("Discount : ",novels.calculateDiscount());

const shortstories  = new NoverlsShortstories("Amma",2000,"Maxim Gorkey","ABC Publishers");
shortstories.displayDetails();
console.log("Discount : ",shortstories.calculateDiscount());

const biographies = new Biographies("Tsnumai",1500,"Thusikaran","PQR Publishers");
biographies.displayDetails();
console.log("Discount : ",biographies.calculateDiscount());

