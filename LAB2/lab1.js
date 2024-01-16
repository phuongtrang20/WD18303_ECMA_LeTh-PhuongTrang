const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-up-keys"],
};
function makeList(arr) {
  const failureItems = [];

    arr.forEach(element => {
        failureItems.push( `<li class="text-warning">${element}</li>`);
    });

  return failureItems;

}
const failureItems = makeList(result.failure);
console.log(failureItems.join('\n'));

