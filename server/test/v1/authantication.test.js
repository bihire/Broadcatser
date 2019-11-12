import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'
import app from '../../app.js'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Authantication', () => {
    describe('User Signup', () => {
        it('User should receive a successful signup message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "boris",
                    email: "muhirebori@yahoo.fr",
                    password: "bobo1234",
                    confirmPassword: "bobo1234",
                    phoneNumber: "1234567890 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User Signup', () => {
        it('User should receive an error about first name message', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " b@ihire",
                    lastName: "boris",
                    email: "muhirebori@yahoo.fr",
                    password: "bobo1234",
                    confirmPassword: "bobo1234",
                    phoneNumber: "1234567890 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User Signup', () => {
        it('User should receive an error message about last name', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "b@oris",
                    email: "muhirebori@yahoo.fr",
                    password: "bobo1234",
                    confirmPassword: "bobo1234",
                    phoneNumber: "1234567890 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User Signup', () => {
        it('User should receive an error message about email', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "boris",
                    email: "muhireboriyahoo.fr",
                    password: "bobo1234",
                    confirmPassword: "bobo1234",
                    phoneNumber: "1234567890 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User Signup', () => {
        it('User should receive an error message about password', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "boris",
                    email: "muhirebori@yahoo.fr",
                    password: "1234",
                    confirmPassword: "bobo1234",
                    phoneNumber: "1234567890 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User Signup', () => {
        it('User should receive an error message about confirm password', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "boris",
                    email: "muhirebori@yahoo.fr",
                    password: "bobo1234",
                    confirmPassword: "bobo123",
                    phoneNumber: "1234567890 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User Signup', () => {
        it('User should receive an error message about phoneNumber', (done) => {
            supertest('http://localhost:8080/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "boris",
                    email: "muhirebori@yahoo.fr",
                    password: "bobo1234",
                    confirmPassword: "bobo1234",
                    phoneNumber: "123456789 "
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
describe('User Signup', () => {
    it('User should receive an error message about email exist arleady', (done) => {
        supertest('http://localhost:8080/api/v1')
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                firstName: " bihire",
                lastName: "boris",
                email: "muhireboris@yahoo.fr",
                password: "bobo1234",
                confirmPassword: "bobo1234",
                phoneNumber: "1234567890"
    })
        .expect('Content-Type', /json/)
        .end((err, res) => {
            res.should.have.status(401);
            res.should.be.a('object');
            done();
        });
});
    });
})