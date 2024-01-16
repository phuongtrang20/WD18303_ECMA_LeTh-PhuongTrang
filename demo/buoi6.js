let object = {
    name: 'tèo',
    age: 25,
    city: 'Hà Nội',
    playGame : function(){
        console.log(this);
        // console.log(this.name + 'is playing name.');
    },

    cooking : () =>{
        console.log(this.fullname);
        console.log(this);
        console.log('Cooking someking delicious');
    }
}
object.name = 'Tính';
object.cooking()
function helloWold(button){
    console.log(button.getAttribute('attribute-name'));
}

function multiply(a, b = 1){
    console.log('a:', a);
    console.log('b:', b);
    return a * b;
}
console.log(multiply(2, 5));


const increment = (a, b = 1) => a + b;
console.log(increment(5, 2));
console.log(increment(5, 1));
