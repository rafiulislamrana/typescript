const formatString = (input: string, toUpper?: boolean) : string => {
    if(toUpper == false){
        let output : string = input.toLowerCase();
        console.log(output)
        return output;
    }
    else{
        let output : string = input.toUpperCase();
        console.log(output)
        return output;
    }
    

}



const filterByRating = (items: { title: string; rating: number }[]) : { title: string; rating: number } [] => {
    let filteredBook : { title: string; rating: number }[] = [];
    items.map(e => {
        if(e.rating >= 4){
            filteredBook.push(e);
        }
        
    });
    console.log(filteredBook)
    return filteredBook;
}



const concatenateArrays = <T>(...arrays: T[][]) : T[] => {

    let concatItem : T[] = [] ;
    arrays.map(e => {
        concatItem.push(...e);
        
    })
    console.log(concatItem);
    return concatItem;

}



class Vehicle {
    private _make : string;
    private _year : number;

    constructor (_make: string, _year: number){
        this._make = _make;
        this._year = _year;
    }

    getInfo(){
        console.log(`Make: ${this._make}, Year: ${this._year}`)
    }
}
class Car extends Vehicle{
    private _model : string  
    constructor (_make: string, _year: number, _model: string){
        super(_make, _year);
        this._model = _model;
    }
    getModel(){
        console.log(`Model: ${this._model}`)
    }
}



const processValue = (value: string | number): number =>{
    if(typeof(value) == "string"){
        return value.length;
    }else{
        return value *2;
    }
}



interface Product {
    name: string;
    price: number;
}
const getMostExpensiveProduct = (products: Product[]): Product | null =>{
    
    if(products.length){
        let highPrice : Product = {name: "", price: 0};
        products.map(e => {
            if(e.price > highPrice.price){
                highPrice = e; 
            }
        })
        console.log(highPrice)
        return highPrice;

    }else{
        console.log(null)
        return null;
    }
    
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
const getDayType = (day: Day): string =>{
    if(day == 6 || day == 5){
        console.log("Weekend")
        return "Weekend";
    }else{
        console.log("Weekday")
        return "Weekday";
    }
}

