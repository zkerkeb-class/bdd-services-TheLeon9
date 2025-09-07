import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

let createdServiceId;

describe("GET /services", () => {
  it("should return all services when services exist", (done) => {
    request(app)
      .get("/services")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        if (res.body.data.length > 0) {
          expect(res.body.message).to.equal("✅ Services fetched");
          expect(res.body.data).to.be.an("array").with.length.greaterThan(0);
        } else {
          expect(res.body.message).to.equal("✅ No Services available");
          expect(res.body.data).to.be.an("array").that.is.empty;
        }

        done();
      });
  });
});

describe("POST /services", () => {
  it("should create a new service", (done) => {
    const newService = {
      title: "Test",
      description: "Test",
      price: 99.99,
    };

    request(app)
      .post("/services")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(newService)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.message).to.equal("✅ Service created");
        expect(res.body.data).to.have.property("id");
        expect(res.body.data.title).to.equal("Test");

        // We keep the ID for the Delete Test
        createdServiceId = res.body.data.id;
        done();
      });
  });

  it("should return 400 if required fields are missing", (done) => {
    const invalidService = {};

    request(app)
      .post("/services")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(invalidService)
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal("❌ Failed to create Service");
        done();
      });
  });
});

describe("DELETE /services/:id", () => {
  it("should delete an existing service", (done) => {
    request(app)
      .delete(`/services/${createdServiceId}`)
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.message).to.equal(
          `✅ Service with id ${createdServiceId} deleted`
        );
        done();
      });
  });

  it("should return 404 if service does not exist", (done) => {
    request(app)
      .delete("/services/999999")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(404)
      .end((err, res) => {
        expect(res.body.error).to.equal("❌ Service with id 999999 not found");
        done();
      });
  });
});
