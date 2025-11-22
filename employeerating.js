employee= [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]
function bestOne(employeesArray) {

  const filtered = employeesArray.filter(employee => employee.tasksCompleted > 5); 
  rating=filtered.map((employee)=>{
    if(employee.rating>4.5){
        console.log("Excellent");
    }
   else if(employee.rating > 3 && employee.rating<4.5){
        console.log("Good");
    }   
    else
        console.log("Needs Improvement");
    }   );
    return {
      name: employee.name,
      rating: employee.rating
    };
}

bestOne(employee);
