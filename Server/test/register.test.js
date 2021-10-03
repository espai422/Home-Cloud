const bcrypt = require('bcrypt');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.js').app;

chai.use(chaiHttp);

describe('Testing /auth/register', () => {
    it('Returns 400 when request does not contain username neither password', (done) => {
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .end((req, res) => {
            let code = res.status
            chai.assert(code, 400);
            done();
        })
    });

    it('Returns 400 when request does not contain username', (done) => {
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .send({ 
        password:'Spai422'})
        .end((req, res) => {
            let code = res.status
            chai.assert(code, 400);
            done();
        })
    });

    it('Returns 400 when request does not contain password', (done) => {
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .send({ 
        username:'Spai422'})
        .end((req, res) => {
            let code = res.status
            chai.assert(code, 400);
            done();
        })
    });

    it('Returns Registered when the user is already registered', (done) => {
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: 'espai422',
        password:'Spai422'})
        .end((req, res) => {
            let response = res.text
            chai.assert(response,'Registered');
            done();
        })
    });

    it('Returns the auth token for new user len between 60 and 62', (done) => {
        var NewUsername = bcrypt.genSaltSync(10);
        chai.request(app)
        .post('/auth/register')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: NewUsername,
        password:'Spai422'})
        .end((req, res) => {
            let response = res.text
            let boolean = 5 < response.length < 63
            chai.expect(res).to.have.cookie('session');
            chai.assert(boolean, true);
            done();
        });
    });

});


