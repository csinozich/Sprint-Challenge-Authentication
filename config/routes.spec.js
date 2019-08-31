const request = require("supertest");

const server = require("../api/server.js");

describe("Register", () => {
  it("should return status code 500", async () => {
    const res = await request(server).post("/api/register");
    expect(res.status).toBe(500);
  });

  it("should return the right structure", async () => {
    const res = await request(server).post("/api/register");
    expect.objectContaining({
      id: expect.any(Number),
      username: expect.any(String),
      password: expect.any(String)
    });
  });
});

describe("Login", () => {
  it("should return status code 500", async () => {
    const res = await request(server).post("/api/login");
    expect(res.status).toBe(500);
  });

  it("should return the right structure", async () => {
    const res = await request(server).post("/api/register");
    expect.objectContaining({
      message: expect.any(String),
      token: expect.any(String)
    });
  });
});

describe("Dad Jokes", () => {
  it("should return status code 401", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res.status).toBe(401);
  });

  it("should return a joke", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res).toContain({
      id: "0189hNRf2g",
      joke:
        "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
    });
  });
});
