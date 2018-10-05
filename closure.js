let multiplier = factor => {
    return number => number * factor + pippo;
}

let twice = multiplier(2);
console.log(twice(5));
