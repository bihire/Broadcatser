import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'
import app from '../../app.js'


chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Red-flag/Intervention', () => {
    describe('Post a red-flag/intervention', () => {
        it('User should receive a successful create message', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "intervention",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid input images not array', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "interventio",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3",
                    images: "1"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid input image type string', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "interventio",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3",
                    images: ["https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"],
                    videos: [1]
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid input videoUrls format', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "interventio",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3",
                    images: ["https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"],
                    videos: ["1"]
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid input imageUrls format', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "interventio",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3",
                    images: ["1"]
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid input', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "interventio",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid location input', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "intervention",
                    comment: "this is the comment about the red-flag",
                    location: "-90,3,4"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about invalid location input not a number', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "intervention",
                    comment: "this is the comment about the red-flag",
                    location: "-90,h"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Post a red-flag/intervention', () => {
        it('User should receive an error create message about no location', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/red-flags')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

                .set('Accept', 'application/json')
                .send({
                    title: "this is the tittle",
                    labels: "1",
                    type: "intervention",
                    comment: "this is the comment about the red-flag",
                    
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
});