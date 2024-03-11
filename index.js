function receivesAFunction(mets) {
  mets();
}

function returnsANamedFunction() {
  return function namedFunction() {
    // console.log("go mets");
  };
  returnsANamedFunction();
}

function returnsAnAnonymousFunction() {
  return function () {
    // console.log("mets");
  };
}
