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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCRVYS9hRnJOeFdnb3hoN29sRUYxNXh1SGZ2NS96czBQcWdxWTVFWnhZcEs3MmJOeDBWUFRNQyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzg4NjJ9.35BfeXMkhkFWvh6CbQiTMxyUBl5O9V8-zIqrC_ewivU')

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