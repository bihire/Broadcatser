import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Location', () => {
    describe('Update location', () => {
        it('User should receive a successful updated location message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "location": "-90,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update location', () => {
        it('User should receive an error message about red-flag not found', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/2/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "location": "-90,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update location', () => {
        it('User should receive an error message about red-flag id', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/g/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "location": "-90,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update location', () => {
        it('User should receive an error message about format of latitude and longitude', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "location": "-90,-180,g"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update location', () => {
        it('User should receive an error message about format of latitude and longitude', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "location": "-93,-180"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update location', () => {
        it('User should receive an error message about jwt token', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                // .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

               
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update location', () => {
        it('User should receive an error message about jwt token validation', (done) => {
            supertest('http://localhost:8080/api/v1')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                .set('token', 'egJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')


                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Delete red-flag/intervention', () => {
        describe('delete specific red-flag/intervention', () => {
            it('User should receive a successful delete red-flag/intervention message', (done) => {
                supertest('http://localhost:8080/api/v1')
                    .delete('/red-flags/1')
                    .set('Accept', 'application/json')
                    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRMUE5TeEYyeW1aRjg1bXY5dVNXR3NlaC9KcHJ4WmpzM0xub3VxN3NJWjdYWnk1d3dwdkZOUyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQ5NTUwMTB9.-RlFml5z1stctPsfNnICpktDf-QKGOGHQx33lz_SzP4')
                    .expect('Content-Type', /json/)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a('object');
                        done();
                    });
            });
        });
    })
})