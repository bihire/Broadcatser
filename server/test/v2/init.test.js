import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'
import app from '../../app.js'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Testing', () => {
    describe('Get a successfull endpoint message', () => {
        it('User should receive a successful message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Get a successfull api message', () => {
        it('User should receive a successful api message', (done) => {
            supertest('http://localhost:8080')
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Get a not found api version message', () => {
        it('User should receive a not found api version message', (done) => {
            supertest('http://localhost:8080/api/v7')
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.a('object');
                    done();
                });
        });
    })
})