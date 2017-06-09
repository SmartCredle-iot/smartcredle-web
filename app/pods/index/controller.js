import Ember from 'ember';

export default Ember.Controller.extend({
  isCradle: false,
  isAlert: false,
  isMusic: false,
  isLight: true,
  actions: {
    toggleMusic: function() {
      this.toggleProperty('isMusic');
    },
    toggleLight: function() {
      this.toggleProperty('isLight');
    },
    toggleCradle: function() {
      this.toggleProperty('isCradle');
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
