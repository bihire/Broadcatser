import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Red-flag/Intervention', () => {
    describe('Post a red-flag/intervention', () => {
        it('User should receive a successful create message', (done) => {
            supertest('http://localhost:8080/api/v1/')
                .post('/red-flags')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRMUE5TeEYyeW1aRjg1bXY5dVNXR3NlaC9KcHJ4WmpzM0xub3VxN3NJWjdYWnk1d3dwdkZOUyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQ5NTUwMTB9.-RlFml5z1stctPsfNnICpktDf-QKGOGHQx33lz_SzP4')

                .send({
                    "title": "this is the tittle",
                    "labels": "1",
                    "type": "intervention",
                    "comment": "this is the comment about the red-flag",
                    "location": "-90,3"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });
   
})