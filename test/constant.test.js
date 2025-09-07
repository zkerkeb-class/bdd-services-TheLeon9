import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

describe("GET /constants", () => {
  it("should return all constants data (projects, users, skills, services)", (done) => {
    request(app)
      .get("/constants")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        const { message, users, projects, skills, services } = res.body;

        expect(message).to.equal("✅ Constants Data fetched");

        expect(users).to.be.an("array");
        expect(projects).to.be.an("array");
        expect(skills).to.be.an("array");
        expect(services).to.be.an("array");

        done();
      });
  });
});
