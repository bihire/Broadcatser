import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Comment', () => {
    describe('Update comment', () => {
        it('User should receive a successful updated comment message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/comment')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRMUE5TeEYyeW1aRjg1bXY5dVNXR3NlaC9KcHJ4WmpzM0xub3VxN3NJWjdYWnk1d3dwdkZOUyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQ5NTUwMTB9.-RlFml5z1stctPsfNnICpktDf-QKGOGHQx33lz_SzP4')

                .send({
                    "comment": "-90,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update comment', () => {
        it('User should receive an error message about red-flag not found', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/2/comment')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "comment": "-90,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update comment', () => {
        it('User should receive an error message about red-flag id', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/g/comment')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "comment": "-90,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update comment', () => {
        it('User should receive an error message about format of comment', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/comment')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "comment": 1
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
   
})