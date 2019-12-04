import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'
import app from '../../app.js'


chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Location', () => {
    describe('Update location', () => {
        it('User should receive a successful updated location message', (done) => {
            supertest('http://localhost:8080/api/v2')
                .patch('/red-flags/2/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

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
            supertest('http://localhost:8080/api/v2')
                .patch('/red-flags/6/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

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
            supertest('http://localhost:8080/api/v2')
                .patch('/red-flags/g/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

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
            supertest('http://localhost:8080/api/v2')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

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
            supertest('http://localhost:8080/api/v2')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

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
            supertest('http://localhost:8080/api/v2')
                .patch('/red-flags/1/location')
                .set('Accept', 'application/json')
                // .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

               
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
            supertest('http://localhost:8080/api/v2')
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
            it('User should receive an error about red-flag/intervention not found message', (done) => {
                supertest('http://localhost:8080/api/v2')
                    .delete('/red-flags/67')
                    .set('Accept', 'application/json')
                    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTc1Mjg0MzE0fQ.h63MpVqFhQVBFunnFS9f4-_VqsdbGhozMt62c0Zgkzc')
                    .expect('Content-Type', /json/)
                    .end((err, res) => {
                        res.should.have.status(404);
                        res.should.be.a('object');
                        done();
                    });
            });
        });
    })
    describe('Delete red-flag/intervention', () => {
        describe('delete specific red-flag/intervention', () => {
            it('User should receive a successful delete red-flag/intervention message', (done) => {
                supertest('http://localhost:8080/api/v2')
                    .delete('/red-flags/2')
                    .set('Accept', 'application/json')
                    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTc1Mjg0MzE0fQ.h63MpVqFhQVBFunnFS9f4-_VqsdbGhozMt62c0Zgkzc')
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