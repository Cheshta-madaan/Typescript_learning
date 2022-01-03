class circle{
    static pi= 3.14;
    pi : number= 3;
    static calculatearea(radius: number)
    {
        return this.pi* radius* radius;
    }
    circumference(radius:number)
    {
        return 2* this.pi* radius;
    }
}
console.log(circle.pi);
console.log(circle.calculatearea(5));

let circleobj= new circle();
console.log(circleobj.pi);
console.log(circleobj.circumference(5));
