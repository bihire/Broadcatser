import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Fetch red-flag/intervention', () => {
    describe('Get specific red-flag/intervention', () => {
        it('User should receive a successful get red-flag/intervention message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .get('/red-flags/1')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJE1XTkdrUy50Z1EuRmxaY3puTm1nQXVzVlZ4V1R5NUJvaHZjY2tZdlVpSjQ5YVFaSy9xV1dhIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk0OTE0NX0.VqTFrNCp0sqJ0u3gc3cC_7LVq6gpeLYsDqDQVOdUat0')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Get specific red-flag/intervention', () => {
        it('User should receive an error get red-flag id format', (done) => {
            supertest('http://localhost:8080/api/v1')
                .get('/red-flags/g')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJE1XTkdrUy50Z1EuRmxaY3puTm1nQXVzVlZ4V1R5NUJvaHZjY2tZdlVpSjQ5YVFaSy9xV1dhIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk0OTE0NX0.VqTFrNCp0sqJ0u3gc3cC_7LVq6gpeLYsDqDQVOdUat0')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Get all red-flag/intervention', () => {
        it('User should receive a successful get red-flag/intervention message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .get('/red-flags')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJE1XTkdrUy50Z1EuRmxaY3puTm1nQXVzVlZ4V1R5NUJvaHZjY2tZdlVpSjQ5YVFaSy9xV1dhIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk0OTE0NX0.VqTFrNCp0sqJ0u3gc3cC_7LVq6gpeLYsDqDQVOdUat0')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
   
})