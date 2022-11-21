const request = require("supertest")
const app = require('./routes/User')
const mongoose = require('mongoose')

test.todo("It should response to GET Method"), () => {
    const response = request(app).post("http://localhost:8000/User/add").json({
        "Name": "Obaid",
        "Email": "obaid",
        Age: 12,
        Contact: "123"
    })
    expect(response.statusCode).toBe(200)
}
test.todo('It should delete a user'),
  () => {
    const response = request(app).delete(
      'http://localhost:8000/User/637b3ffe75a2cad3b163e9fd'
    );
    expect(response.statusCode).toBe(200);
  };
test.todo('It should response the get method'),
  () => {
    const response = request(app).post('http://localhost:8000/User/add').json({
      Name: 'Dayyan'
    });
    expect(response.statusCode).toBe(200);
  };