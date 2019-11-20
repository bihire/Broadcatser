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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRGaHNucDd3SWh4ZkZYeFAvVVRBY0ZPQ1gxdDVnUng2N1V5Lk8yTk1xZ2ticndTdjJoOWJpeSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQyMDEyNDd9.MEDVcS6wTh45CTHmcR04sltn6GBrGhf9jAl8uYndTdM')
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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRGaHNucDd3SWh4ZkZYeFAvVVRBY0ZPQ1gxdDVnUng2N1V5Lk8yTk1xZ2ticndTdjJoOWJpeSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQyMDEyNDd9.MEDVcS6wTh45CTHmcR04sltn6GBrGhf9jAl8uYndTdM')
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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRGaHNucDd3SWh4ZkZYeFAvVVRBY0ZPQ1gxdDVnUng2N1V5Lk8yTk1xZ2ticndTdjJoOWJpeSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQyMDEyNDd9.MEDVcS6wTh45CTHmcR04sltn6GBrGhf9jAl8uYndTdM')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
   
})