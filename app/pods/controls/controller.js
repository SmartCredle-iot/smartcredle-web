import Ember from 'ember';

export default Ember.Controller.extend({
  isMusic: false,
  isCradle: true,
  isLight: true,
  actions: {
    toggleMusic: function() {
      this.toggleProperty('isMusic');
      console.log('teste');
    },
    toggleLight: function() {
      this.toggleProperty('isLight');
    },
    toggleCradle: function() {
      this.toggleProperty('isCradle');
    }
  }
});
