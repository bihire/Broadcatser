import chai from 'chai'
import chaiHttp from 'chai-http'
import supertest from 'supertest'
import app from '../../app.js'

chai.use(chaiHttp);
chai.should();
chai.expect();


describe('Authantication', () => {
    describe('Signup', () => {
        it('Employee should signup', (done) => {
            setTimeout(done, 300);
            supertest('http://localhost:8081/api/v1')
                .post('/auth/signup')
                .set('Accept', 'application/json')
                .send({
                    "firstName": " bihire",
                    "lastName": "boris",
                    "email": "muhirebori@yahoo.fr",
                    "password": "bobo1234",
                    "confirmPassword": "bobo1234",
                    "phoneNumber": "1234567890 ",
                    "isAdmin": true
                })
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });

    // describe('Get a successfull api message', () => {
    //     it('User should receive a successful api message', (done) => {
    //         supertest('http://localhost:8080')
    //             .get('/')
    //             .set('Accept', 'application/json')
    //             .expect('Content-Type', /json/)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.should.be.a('object');
    //                 done();
    //             });
    //     });
    // });
    // describe('Get a not found api version message', () => {
    //     it('User should receive a not found api version message', (done) => {
    //         supertest('http://localhost:8080/api/v2')
    //             .get('/')
    //             .set('Accept', 'application/json')
    //             .expect('Content-Type', /json/)
    //             .end((err, res) => {
    //                 res.should.have.status(404);
    //                 res.should.be.a('object');
    //                 done();
    //             });
    //     });
    // })
})