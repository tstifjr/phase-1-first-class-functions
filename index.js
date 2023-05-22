function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction (){

    return function name(){console.log("Hello")};
};

function returnsAnAnonymousFunction (){

    return function (){console.log("Bye")};
};

returnsANamedFunction()();
returnsAnAnonymousFunction()();