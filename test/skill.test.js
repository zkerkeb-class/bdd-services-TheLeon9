import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

let createdSkillId;

describe("GET /skills", () => {
  it("should return all skills", (done) => {
    request(app)
      .get("/skills")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        if (res.body.data.length > 0) {
          expect(res.body.message).to.equal("✅ Skills fetched");
          expect(res.body.data).to.be.an("array").with.length.greaterThan(0);
        } else {
          expect(res.body.message).to.equal("✅ No Skills available");
          expect(res.body.data).to.be.an("array").that.is.empty;
        }

        done();
      });
  });
});

describe("POST /skills", () => {
  it("should create a new skill", (done) => {
    const skill = { value: "Test" };

    request(app)
      .post("/skills")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(skill)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("✅ Skill created");
        expect(res.body.data).to.have.property("id");
        expect(res.body.data.value).to.equal("Test");

        // We keep the ID for the Delete Test
        createdSkillId = res.body.data.id;
        done();
      });
  });

  it("should return 400 if value is missing", (done) => {
    request(app)
      .post("/skills")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send({})
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal("❌ Failed to create Skill");
        done();
      });
  });
});

describe("DELETE /skills/:id", () => {
  it("should delete the created skill", (done) => {
    request(app)
      .delete(`/skills/${createdSkillId}`)
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal(
          `✅ Skill with id ${createdSkillId} deleted`
        );
        done();
      });
  });

  it("should return 404 if skill ID does not exist", (done) => {
    request(app)
      .delete("/skills/999999")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(404)
      .end((err, res) => {
        expect(res.body.error).to.equal("❌ Skill with id 999999 not found");
        done();
      });
  });
});
