function circumference(r) {
    var circumference = r*2*3.1415
    return circumference
    }
    
    //Added QUnit Test
    QUnit.test("calculate the circumference of circle", function (assert) {
    assert.equal(circumference(1), 6.283, "circumference of circle for radius 1");
    assert.equal(circumference(2),12.566, " circumference of circle for radius 2");
    assert.equal(circumference(3),18.849, " circumference of circle for radius 3")
    assert.equal(circumference(4),25.132, "circumference of circle for radius 4");
    assert.equal(circumference(10),62.830000000000005, "circumference of circle for radius 10 ")
    assert.equal(circumference(12), 10000, "invalid circumference value")
    });  