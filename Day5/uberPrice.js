class uberPrice{
    constructor(pricePerKilometre,kilometresToRide){
       this.pricePerKilometre=pricePerKilometre;
       this.kilometresToRide=kilometresToRide;
    }
    getRidePrice(){
        return this.pricePerKilometre*this.kilometresToRide;
    }
}

const customer1 = new uberPrice(
    60,
    7
)
console.log(customer1.getRidePrice());