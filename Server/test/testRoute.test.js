// const chaiHttp = require('chai-http');
// const chai = require('chai');
// const app = require('../src/index.js').app;

// chai.use(chaiHttp);

// describe('TEST ROUTE /', () => {
//     it('Returns a cookie "name"', (done) => {
//         chai.request(app)
//         .get('/')
//         // .set('X-API-Key', 'foobar')
//         .set('Cookie','session=f6s76f87df6s8')
//         .send({ 
//         username: 'AAA$2b$10$iI6hjSOBoxM6xJsn1PlZtu',
//         password:'Spadfi422'})
//         .end((req, res) => {
//             // console.log(res.text);
//             chai.expect(res).to.have.cookie('name');
//             // chai.assert(2,2);
//             done();
//         });

//     });
// });