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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                // .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

               
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
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
                    res.should.have.status(404);
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
})