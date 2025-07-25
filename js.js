const user = {
  name: "Jacques Gluke",
  age: 47,
  hobby: "javascript",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
//2
function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps(user));
//3

function findBestEmployee(employees) {
  let bestName = null;
  let maxTasks = -Infinity;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }

  return bestName;
}


const users = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
}


сonsole.log(findBestEmployee(users));
//4
function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

//5
function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

console.log(countTotalSalary({})); 
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); 


//6


function calculateTotalPrice(allProducts, productName) {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity;
    }
  }
  return 0; 
}

console.log(calculateTotalPrice(products, "Радар")); 
console.log(calculateTotalPrice(products, "Дроїд")); 
console.log(calculateTotalPrice(products, "Бластер")); 