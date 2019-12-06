import chai from "chai";
import chaiHttp from "chai-http";
import supertest from "supertest";
import app from "../../app.js";

chai.use(chaiHttp);
chai.should();
chai.expect();

describe("Fetch red-flag/intervention", () => {
  describe("Get specific red-flag/intervention", () => {
    it("User should receive a successful get red-flag/intervention message", done => {
      supertest("http://localhost:8080/api/v2")
        .get("/red-flags/2")
        .set("Accept", "application/json")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Get specific red-flag/intervention", () => {
    it("User should receive an error get red-flag id format", done => {
      supertest("http://localhost:8080/api/v2")
        .get("/red-flags/g")
        .set("Accept", "application/json")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(403);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Get specific red-flag/intervention", () => {
    it("User should receive an error get red-flag not found", done => {
      supertest("http://localhost:8080/api/v2")
        .get("/red-flags/67")
        .set("Accept", "application/json")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a("object");
          done();
        });
    });
  });
  describe("Get all red-flag/intervention", () => {
    it("User should receive a successful get red-flag/intervention message", done => {
      supertest("http://localhost:8080/api/v2")
        .get("/red-flags")
        .set("Accept", "application/json")
        .set(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6ImJpaGlyZSIsImxhc3RfbmFtZSI6ImJvcmlzIiwiZW1haWwiOiJtdWhpcmVib3Jpc0B5YWhvby5mciIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IiQyYSQxMCROR0hPMWJzNHNhdXAzN0h3S3Mya3MuUVFyYkRMbHNpWDRHcFNOaVBYcTZCSjFUdlJ2cEFjYSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1NzUwMTcwNTN9.eqtNHB03N5-cQRpWa72-MTXYO7AKJq5as5-_JwEyAp0"
        )
        .expect("Content-Type", /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a("object");
          done();
        });
    });
  });
});
