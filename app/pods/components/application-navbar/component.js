/* global Framework7, Dom7 */

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'navbar',

  didInsertElement: function() {
    this.fw7Actions();
  },
  fw7Actions: function() {
    var myApp = new Framework7(),
        $$ = Dom7;

    $$('.navbar').on('click', '.open-left-panel', function () {
      myApp.openPanel('left');
    });

    // $$('.navbar').on('click', '.panel-close', function () {
    //   myApp.closePanel();
    // });

    $$('.panel-left').on('open', ()=> {
      this.set('isOpen', true);
    });

    $$('.panel-left').on('close', ()=> {
      this.set('isOpen', false);
    });
  },

  actions: {
    backPage: function () {
      history.back();
    }
  }
});
