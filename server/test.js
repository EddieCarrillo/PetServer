var app = require('./server')
var request = require('supertest')
var chai  = require('chai').expect
var supertest = request(app);







describe('[AUTHENTICATION TEST]', function(){

var Lemon_Id = '59a4890ab3b81f130414779b'
var Jenkins_ID = '59a4890ab3b81f130414779c'
var spike_ID = '59a4890ab3b81f130414779d'
var token = ''

before(function(done){

  console.log('before hook called')
        request(app).post('/auth/login')
        .set('Accept', 'application/json')
        .send({username: 'JonRogawski', password: 'Mathprof123'})
        .end(function(err, response){
          console.log('Before hook repsonse')
          if (err){
            console.log('Before hook fail')
            console.log(err.message)
            done(err)
          }else{
            token = response.body.token
            console.log('token', token)
            done()
          }
        })



    })





     it('should authorize user for access to resource', function(done){
          request(app)
          .put('/api/pets/' + Lemon_Id)
          .send({name: 'Lemonades'})
          .set('Authorization','Bearer ' + token)
          .end(function(err, res){
            console.log("res.body",res.body)
            chai(res.body).to.deep.equal({
    __v: 0,  _id: "59a4890ab3b81f130414779b",name: "Lemonades", owner: "59a48909b3b81f1304147798"})
    done()
          })
     } )

})
