var chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../index.js'),
    should = chai.should();

chai.use(chaiHttp);

describe('API test', function() {
  it('Test GET /api/v2/recipes', function(done) {
    chai.request(server)
        .get('/api/v2/recipes')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
  });
  it('Test GET /api/v2/recipes/:number (2)', function(done) {
    chai.request(server)
        .get('/api/v2/recipes/2')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
  });
  it('Test GET /api/v2/recipes?category=<cat> (Salad)', function(done) {
    chai.request(server)
        .get('/api/v2/recipes?category=Salad')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
  });
});
