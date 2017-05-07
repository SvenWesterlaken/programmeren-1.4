var chai = require('chai'),
    http = require('chai-http'),
    server = require('../app'),
    should = chai.should();

chai.use(http);

describe('Hello', function(){
  it('GET /api/v1/hello', function(done) {
    chai.request(server)
      .get('/api/v1/hello')
      .end( function (err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
