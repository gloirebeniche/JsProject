// fonction avec paramettre simple

function cardDrive(age , pays) {
    if (age >= 18 && pays === "FR" || age >= 16 && pays === "US") {
        return true
    } 
    return false
}
console.log(cardDrive(15,"US"));

//  utilisation des objects

const a = {
    firstname : "john",
    lastname : "doe",
    fullname :  function(){
        console.log(this.firstname,`${this.lastname}`);
    }
}

a.fullname()