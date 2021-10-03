const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../src/index.js').app;

chai.use(chaiHttp);

describe('Testing /auth/login route', () => {
    it('Returns 452 when User does not exist', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: 'AAA$2b$10$iI6hjSOBoxM6xJsn1PlZtu',
        password:'Spadfi422'})
        .end((req, res) => {
            // console.log(res.text);
            chai.assert(res.status, 452);
            done();
        });
    });

    it('Returns 401 when Password is not correct', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: '$2b$10$iI6hjSOBoxM6xJsn1PlZtu',
        password:'Spadfi422'})
        .end((req, res) => {
            // console.log(res.text);
            chai.assert(res.status, 401);
            done();
        });
    });

    it('Returns the token when passwords match', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('X-API-Key', 'foobar')
        .send({ 
        username: '$2b$10$iI6hjSOBoxM6xJsn1PlZtu',
        password:'Spai422'})
        .end((req, res) => {
            // console.log(res.text);
            let response = res.text
            let boolean = 5 < response.length < 63
            chai.expect(res).to.have.cookie('session');
            chai.assert(boolean, true);
            done();
        });
    });

});