import chai from "chai";
import chaiHttp from "chai-http";
import supertest from "supertest";
import app from "../../app.js";

chai.use(chaiHttp);
chai.should();
chai.expect();

describe("Red-flag/Intervention", () => {
  describe("Post a red-flag/intervention", () => {
    it("User should receive a successful create message", done => {
      supertest("http://localhost:8080/api/v1")
        .post("/red-flags")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )

        .set("Accept", "application/json")
        .send({
          title: "this is the tittle",
          labels: "1",
          type: "intervention",
          comment: "this is the comment about the red-flag",
          location: "-90,3"
        })
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Post a red-flag/intervention", () => {
    it("User should receive an error create message about invalid input", done => {
      supertest("http://localhost:8080/api/v1")
        .post("/red-flags")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )

        .set("Accept", "application/json")
        .send({
          title: "this is the tittle",
          labels: "1",
          type: "interventio",
          comment: "this is the comment about the red-flag",
          location: "-90,3"
        })
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Post a red-flag/intervention", () => {
    it("User should receive an error create message about invalid location input", done => {
      supertest("http://localhost:8080/api/v1")
        .post("/red-flags")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )

        .set("Accept", "application/json")
        .send({
          title: "this is the tittle",
          labels: "1",
          type: "intervention",
          comment: "this is the comment about the red-flag",
          location: "-90,3,4"
        })
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Post a red-flag/intervention", () => {
    it("User should receive an error create message about invalid location input not a number", done => {
      supertest("http://localhost:8080/api/v1")
        .post("/red-flags")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )

        .set("Accept", "application/json")
        .send({
          title: "this is the tittle",
          labels: "1",
          type: "intervention",
          comment: "this is the comment about the red-flag",
          location: "-90,h"
        })
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Post a red-flag/intervention", () => {
    it("User should receive an error create message about no location", done => {
      supertest("http://localhost:8080/api/v1")
        .post("/red-flags")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )

        .set("Accept", "application/json")
        .send({
          title: "this is the tittle",
          labels: "1",
          type: "intervention",
          comment: "this is the comment about the red-flag"
        })
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a("object");
          done();
        });
    });
  });
});
// describe('Red-flag/Intervention', () => {
//     describe('Post a red-flag/intervention', () => {
//         it('User should receive a successful create message', (done) => {
//             supertest('http://localhost:8080/api/v1/')
//                 .post('/red-flags')
//                 .set('Accept', 'application/json')
//                 .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0')

//                 .send({
//                     "title": "this is the tittle",
//                     "labels": "1",
//                     "type": "intervention",
//                     "comment": "this is the comment about the red-flag",
//                     "location": "-90,3"
//                 })
//                 .expect('Content-Type', /json/)
//                 .end((err, res) => {
//                     res.should.have.status(201);
//                     res.should.be.a('object');
//                     done();
//                 });
//         });
//     });

// })
