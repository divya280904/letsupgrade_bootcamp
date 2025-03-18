function counter(){
    let counter= 0;
    return function(){
        return counter++;
    }
}
const add= counter();
add();
add();
add();