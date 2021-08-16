let shapes = new Array(); // lagar en ny array

 shapes = ["sqaure", "Circle", "Prisma", "Triangle"];
shapes.shift(); //Tar bort första saken i shapes (square)

 shapes = ["sqaure", "Circle", "Prisma", "Triangle"];
shapes.push("Rectangle"); //Lägger till "Rectangle" till shapes

 shapes = ["sqaure", "Circle", "Prisma", "Triangle"];
shapes.pop(); // Tar bort sissta saken i shapes (Triangle)

console.log(shapes);