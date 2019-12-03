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
            supertest('http://localhost:8080/api/v2')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    firstName: " bihire",
                    lastName: "boris",
                    email: "muhireboris@yahoo.fr",
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
            supertest('http://localhost:8080/api/v2')
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
            supertest('http://localhost:8080/api/v2')
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
            supertest('http://localhost:8080/api/v2')
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
            supertest('http://localhost:8080/api/v2')
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
            supertest('http://localhost:8080/api/v2')
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
            supertest('http://localhost:8080/api/v2')
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
        supertest('http://localhost:8080/api/v2')
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
            res.should.have.status(403);
            res.should.be.a('object');
            done();
        });
});
    });
    describe('User SignIn', () => {
        it('User should receive a success message after loggin', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/auth/signin')
                .set('Accept', 'application/json')
                .send({
                    email: "muhireboris@yahoo.fr",
                    password: "bobo1234"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User SignIn', () => {
        it('User should receive an error message about email', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/auth/signin')
                .set('Accept', 'application/json')
                .send({
                    email: "muhireborisyahoo.fr",
                    password: "bobo1234"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User SignIn', () => {
        it('User should receive an error message about password', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/auth/signin')
                .set('Accept', 'application/json')
                .send({
                    email: "muhireboris@yahoo.fr",
                    password: 1234
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User SignIn', () => {
        it('User should receive an error message about existance of email', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/auth/signin')
                .set('Accept', 'application/json')
                .send({
                    email: "muhire@yahoo.fr",
                    password: "bobo1234"
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('User SignIn', () => {
        it('User should receive an error message about passord match', (done) => {
            supertest('http://localhost:8080/api/v2')
                .post('/auth/signin')
                .set('Accept', 'application/json')
                .send({
                    email: "muhireboris@yahoo.fr",
                    password: "bobo12345"
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