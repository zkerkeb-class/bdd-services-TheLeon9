import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";
import generateFakeToken from "./gen_fake_token.js";

const fakeToken = generateFakeToken();

let existingUser = {
  lastName: "Moracchini",
  firstName: "Florian",
  year: 23,
  country: "France",
  city: "Paris",
  linkedin: "https://www.linkedin.com/in/florian-moracchini/",
  github: "https://github.com/TheLeon9",
  description: "Fullstack Dev passionné 🚀",
  email: "florian.moracchini09@gmail.com",
};

describe("GET /user", () => {
  it("should return the users data correctly", (done) => {
    request(app)
      .get("/user")
      .set("Authorization", `Bearer ${fakeToken}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        if (res.body.data.length > 0) {
          expect(res.body.message).to.equal("✅ Users fetched");
          expect(res.body.data).to.be.an("array").with.lengthOf(1);
        } else {
          expect(res.body.message).to.equal("✅ No Users available");
          expect(res.body.data).to.be.an("array").that.is.empty;
        }

        done();
      });
  });
});

describe("PUT /user/:id", () => {
  it("should update the user successfully", (done) => {
    // We change nothing, we just test
    const updatedData = {
      lastName: "Moracchini",
      firstName: "Florian",
      year: 23,
      country: "France",
      city: "Paris",
      linkedin: "https://www.linkedin.com/in/florian-moracchini/",
      github: "https://github.com/TheLeon9",
      description: "Fullstack Dev passionné 🚀",
      email: "florian.moracchini09@gmail.com",
    };

    existingUser = { ...existingUser, ...updatedData };

    request(app)
      .put(`/user/1`)
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(updatedData)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("✅ User updated");
        done();
      });
  });

  it("should return error for invalid ID", (done) => {
    // Test pour un ID invalide
    const updatedData = {
      firstName: "Invalid",
    };

    request(app)
      .put("/user/999999")
      .set("Authorization", `Bearer ${fakeToken}`)
      .send(updatedData)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.error).to.equal("❌ User not found or update failed");
        done();
      });
  });
});
