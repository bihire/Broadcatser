import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'
import app from '../../app.js'


chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Status', () => {
    describe('Update status', () => {
        it('User should receive a successful updated status message', (done) => {
            supertest('http://localhost:8080/api/v2')
                .patch('/admin/1/status')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTc1NDQ3OTkzfQ.MqC94Wbu8glQUcXOsVQhR9PhPXZt42yOaWW7eTuMNFY')

                .send({
                    "status": "rejected"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update status', () => {
        it('User should receive an error message about red-flag not found', (done) => {
            supertest('http://localhost:8080/api/v2')
                .patch('/admin/67/status')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTc1NDQ3OTkzfQ.MqC94Wbu8glQUcXOsVQhR9PhPXZt42yOaWW7eTuMNFY')

                .send({
                    "status": "rejected"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update status', () => {
        it('User should receive an error message about red-flag id', (done) => {
            supertest('http://localhost:8080/api/v2')
                .patch('/admin/g/status')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTc1NDQ3OTkzfQ.MqC94Wbu8glQUcXOsVQhR9PhPXZt42yOaWW7eTuMNFY')

                .send({
                    "status": "rejected"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update status', () => {
        it('User should receive an error message about format of status', (done) => {
            supertest('http://localhost:8080/api/v2')
                .patch('/admin/1/status')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')

                .send({
                    "status": "1"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Update status', () => {
        it('User should receive an error message about not admin', (done) => {
            supertest('http://localhost:8080/api/v2')
                .patch('/admin/1/status')
                .set('Accept', 'application/json')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU3NTQ3MTY2N30.p2AyW8tBIesp8OOqOKRCqmiaFjxIZztzwW2tLO-j1N0')

                .send({
                    "status": "rejected"
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