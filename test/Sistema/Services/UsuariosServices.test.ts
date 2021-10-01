import {UsuariosServices} from '../../../app/Modules/Sistema/Services/UsuariosServices';
var assert = require('assert');

describe('UsuariosServices', function() {

  describe('#sumar()', function() {

    it('should return a + b', function() {
      const us = new UsuariosServices();

      assert.equal( us.sumar(1, 2), 3);
    });
    
  });
});