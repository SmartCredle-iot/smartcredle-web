import Ember from 'ember';

export default Ember.Controller.extend({
  isCradle: false,
  isAlert: false,
  isMusic: false,
  isLight: true,
  actions: {
    toggleMusic: function() {
      this.toggleProperty('isMusic');
      this.get('store').findAll('music').then(function (data) {
        console.log('teste ==> ', data);
      }).catch(function (err) {
        // console.log('erro  =>>', err );
      })
    },
    toggleLight: function() {
      this.toggleProperty('isLight');
      this.get('store').findAll('light').then(function (data) {
        console.log('teste ==> ', data);
      }).catch(function (err) {
        // console.log('erro  =>>', err );
      })
    },
    toggleCradle: function() {
      this.toggleProperty('isCradle');
      this.get('store').findAll('cradle').then(function (data) {
        console.log('teste ==> ', data);
      }).catch(function (err) {
        // console.log('erro  =>>', err );
      })
    },
    toggleAlert: function() {
      if (this.get('isCradle')) {
        this.toggleProperty('isAlert');
      }else {
        this.get('f7').alert('Ativar somente com o Berço em movimento!');
      }
    }
  }
});
