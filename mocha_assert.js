var assert = require('assert')
//describe를 사용할려면 mocha설치 및 package.json의 테스트를 수정해줘야한다.
describe('#Hello World!', function(){
    it('입력 값은 Hello World', function() {
        var input = 'Hello World!';
        assert.equal('Hello World!',input)
    });
});