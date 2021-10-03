const newmail = require('./randomMail.js');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../src/index.js').app;
const { response } = require('express');

chai.use(chaiHttp);

describe('Testing /auth/register', () => {
    it('Returns Registered when the user is already registered', (done) => {
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: 'espai422',
        mail:'maildepureb25a@gmail.com',
        password:'Spai422'})
        .end((req, res) => {
            let response = res.text
            chai.assert(response,'Registered');
            done();
        })
    });
    it('Returns the auth token for new user len between 60 and 62', (done) => {
        var mail = newmail();
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: 'espai422',
        mail:mail,
        password:'Spai422'})
        .end((req, res) => {
            let response = res.text
            let boolean = 59 < response.length < 63
            chai.assert(boolean, true);
            done();
        })
    });
});


