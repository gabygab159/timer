const args = process.argv.slice(2)

// console.log("types",typeof args)
// console.log(args)

const timer = (times) => {
  if (times.length === 0) {
    console.log("Please provide a time")   
    return    
  } 
  
  for(let time of times){
    if(time < 0 || isNaN(time)) {
      console.log("This is not a good input " + time)
    } else {

  setTimeout(() => {
    
    process.stdout.write('\007');
    process.stdout.write('.');
    process.stdout.write("\n")
    
    // console.log(typeof time)
  }, time * 1000);
}
}
}

timer(args)