import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

let createdProjectId;

describe("GET /projects", () => {
  it("should return all projects when projects exist", (done) => {
    request(app)
      .get("/projects")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        if (res.body.data.length > 0) {
          expect(res.body.message).to.equal("✅ Projects fetched");
          expect(res.body.data).to.be.an("array").with.length.greaterThan(0);
        } else {
          expect(res.body.message).to.equal("✅ No Projects available");
          expect(res.body.data).to.be.an("array").that.is.empty;
        }

        done();
      });
  });
});

describe("POST /projects", () => {
  it("should create a new project", (done) => {
    const newProject = {
      projectNumber: 10,
      title: "Test",
      description: "Test",
      url: "",
      highlight1: "VueJS",
      highlight2: "SCSS",
      highlight3: "Animations",
      highlight4: "Responsive",
      highlight5: "GSAP",
    };

    request(app)
      .post("/projects")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(newProject)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.message).to.equal("✅ Project created");
        expect(res.body.data).to.have.property("id");
        expect(res.body.data.title).to.equal("Test");

        // We keep the ID for the Delete Test
        createdProjectId = res.body.data.id;
        done();
      });
  });

  it("should return 400 if required fields are missing", (done) => {
    const invalidService = {};

    request(app)
      .post("/projects")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(invalidService)
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal("❌ Failed to create Project");
        done();
      });
  });
});

describe("DELETE /projects/:id", () => {
  it("should delete an existing project", (done) => {
    request(app)
      .delete(`/projects/${createdProjectId}`)
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.message).to.equal(
          `✅ Project with id ${createdProjectId} deleted`
        );
        done();
      });
  });

  it("should return 404 if project does not exist", (done) => {
    request(app)
      .delete("/projects/999999")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(404)
      .end((err, res) => {
        expect(res.body.error).to.equal("❌ Project with id 999999 not found");
        done();
      });
  });
});
