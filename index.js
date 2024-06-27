// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"];
function writeCards(names,result){
    const results=[];
    for (let i=0; i<names.length;i++){
        const result=(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        results.push(result);
      }
      return results;
      
}
writeCards(names);


function  countDown (){ 
    countDown=10;
while (countDown>=0) {
  console.log(countDown--);
}}