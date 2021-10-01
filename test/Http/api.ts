var chaii = require("chai");
var chaiHttp = require("chai-http");
var assert = require("assert");
var expect = chaii.expect;
var app = require("../../build/app");

chaii.use(chaiHttp);

describe("API", function () {
  describe("#http:/127.0.0.1:8080", function () {

    it("should return http code 200", function () {
      chaii
        .request(app)
        .get("/")
        // .send({ password: "123", confirmPassword: "123" })
        .end(function (err: any, res: any) {
          // expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
    });
  });

});
