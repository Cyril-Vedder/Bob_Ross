function bobRoss() {
        var input1 = prompt("Top? Mario, Troll, or Homer?");
        var input2 = prompt("OK, Middle? Mario, Troll, or Homer?");
        var input3 = prompt("Great! Bottom? Mario, Troll, or Homer?");
    /*
    var oneTop = ("marioHead.jpg")
    var twoTop = ("trollHead.jpg")
    var threeTop = ("homerHead.jpg")
    var oneMid = ("marioBody.jpg")
    var twoMid = ("trollBody.jpg")
    var threeMid = ("homerBody.jpg")
    var oneBottom = ("marioLegs.jpg")
    var twoBottom = ("trollLegs.jpg")
    var threeBottom = ("homerLegs.jpg")
    */
    if (input1 === "Mario") {
        //console.log(oneTop);
        document.getElementById('head').innerHTML = '<img src="marioHead.jpg" />';
    }
    else if (input1 === "Troll") {
        //console.log(twoTop);
        document.getElementById('head').innerHTML = '<img src="trollHead.jpg" />';
    }
    else if (input1 === "Homer") {
        //console.log(threeTop);
        document.getElementById('head').innerHTML = '<img src="homerHead.jpg" />';
    }
        if (input2 === "Mario") {
        //console.log(oneMid);
        document.getElementById('body').innerHTML = '<img src="marioBody.jpg" />';
    }
    else if (input2 === "Troll") {
        //console.log(twoMid);
        document.getElementById('body').innerHTML = '<img src="trollBody.jpg" />';
    }
    else if (input2 === "Homer") {
        //console.log(threeMid);
        document.getElementById('body').innerHTML = '<img src="homerBody.jpg" />';
    }
        if (input3 === "Mario") {
        //console.log(oneBottom);
        document.getElementById('leg').innerHTML = '<img src="marioLegs.jpg" />';
    }
    else if (input3 === "Troll") {
        //console.log(twoBottom);
        document.getElementById('leg').innerHTML = '<img src="trollLegs.jpg" />';
    }
    else if (input3 === "Homer") {
        //console.log(threeBottom);
        document.getElementById('leg').innerHTML = '<img src="homerLegs.jpg" />';
    }
}
alert("Welcome to Bob Ross Simulator. Let's paint!");
bobRoss();
