/* global Framework7 */
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'container-sidebar',
  actionLogout: 'logout',

  didInsertElement: function() {
    this.fw7Actions();
    // this.closeModal();
  },

  fw7Actions: function() {
    var fw7 = new Framework7();
    this.$('a').click(function() {
      fw7.closePanel();
    });
  },

  closeModal: function() {
    var fw7 = new Framework7();
    Ember.$(document).click(function(e) {
      var panel = Ember.$('.container-sidebar');
      var elementClicked = Ember.$(e.target);
      var clickIn = Ember.$.contains(panel[0], e.target);

      if (!clickIn && !elementClicked.hasClass('close-sidebar')) {
        fw7.closePanel();
      }
    });
  },

  actions: {
    sendLogout: function() {
      this.sendAction('actionLogout');
      var fw7 = new Framework7();
      fw7.closePanel();
    }
  }
});
