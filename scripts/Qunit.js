function circumference(r){
	if (typeof side !== 'number'){
		throw Error("Not a Number");
	}
    if ( side >= 0){
        const r = parsedouble(r)
        const circumference = r*2*3.1415
        return 'The volume of cube is: ' +circumference
    }
    if ( side < 0){
        return 'Please enter a side value that is greater than zero'
    }

}




QUnit.test("A test with small positive number", function(assert) {
	assert.equal(circumference(3), "The volume of cube is: " +18.849, "Tested with a small positive whole number - 3");
	assert.equal(circumference(5), "The volume of cube is: " +31.415, "Tested with a small positive whole number - 5");	
 });

 QUnit.test("A test with some more positive numbers", function(assert) {
	assert.equal(circumference(15), "The volume of cube is: " +3375, "Tested with a small positive whole number - 3");
	assert.equal(circumference(56), "The volume of cube is: " +175616, "Tested with a small positive whole number - 5");	
 });

 QUnit.test("A test with large positive number", function(assert) {
    assert.equal(circumference(309098099), "The volume of cube is: " +2.953173769370564e+25, "Tested with a large positive whole number - 309098099");
 });


 QUnit.test("A test with small decimal number", function(assert) {
     assert.equal(circumference(3.3), "The volume of cube is: " +35.937, "Tested with a small decimal value - 3.3");
});

 QUnit.test("A test with a negative number", function(assert) {
     assert.equal(circumference(-2), 'Please enter a side value that is greater than zero', "Tested with a negative value - (-2)");
});

 QUnit.test("A test with non-numbers", function(assert) {
     assert.throws(function () {circumference("a") }, /Not a Number/, "Tested an exception");
});