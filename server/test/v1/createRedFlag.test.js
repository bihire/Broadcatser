// import chai from 'chai'
// import chaiHttp from 'chai-http'
// import supertest from 'supertest'
// import app from '../../app.js'

// chai.use(chaiHttp);
// chai.should();
// chai.expect();


// describe('Testing', () => {
//     describe('Get a successfull endpoint message', () => {
//         it('User should receive a successful message', (done) => {
//             supertest('http://localhost:8080/api/v1/')
//                 .post('/red-flags')
//                 .set('Content-type', 'multipart/form-data')
//                 .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3JpQHlhaG9vLmZyIiwicGhvbmVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBhc3N3b3JkIjoiJDJhJDEwJHNJNEhReUVIeUtmUUNxV3lwd21rSk9XY2RVaFBSMFlVUGVrbVkwM3prY04xR1ROZk9PellpIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU3NDk1MzM3Nn0.Qlmyo_ZNTdvkQvARFlUcfqZz-EOWK4bjV3gfC8zTxk0')                
//                 .attach('image', './sampleUploads/7bBYA.png')
//                 .field('thisBody', JSON.stringify({
//                     "title": "this is the tittle",
//                     "labels": "bro, we @   are, here, ",
//                     "type": "red-flag",
//                     "comment": "this is the comment about the red-flag",
//                     "location": "-90,3"
//                 }))
            
//                 .expect('Content-Type', /json/)
//                 .end((err, res) => {
//                     res.should.have.status(201);
//                     res.should.be.a('object');
//                     done();
//                 });
//         });
//     });
   
// })