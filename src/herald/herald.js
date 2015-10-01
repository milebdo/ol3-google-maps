goog.provide('olgm.herald.Herald');

goog.require('goog.events');
goog.require('olgm');
goog.require('olgm.Abstract');



/**
 * Abstract class for all heralds. An herald is responsible of synchronizing
 * something between the OpenLayers and Google Maps maps, whether by
 * using event listeners or manually.
 *
 * The `switchMap` is the method used when the herald has to manually
 * do something when one of the two maps become active.
 *
 * The `activate` and `deactivate` methods used to make the herald
 * register and unregister events.
 *
 * An herald can use a single or both of the above methods.
 *
 * @param {!ol.Map} ol3map
 * @param {!google.maps.Map} gmap
 * @constructor
 * @extends {olgm.Abstract}
 */
olgm.herald.Herald = function(ol3map, gmap) {

  /**
   * @type {Array.<goog.events.Key>}
   * @protected
   */
  this.listenerKeys = [];

  goog.base(this, ol3map, gmap);
};
goog.inherits(olgm.herald.Herald, olgm.Abstract);


/**
 * Register all event listeners.
 */
olgm.herald.Herald.prototype.activate = function() {};


/**
 * Unregister all event listeners.
 */
olgm.herald.Herald.prototype.deactivate = function() {
  olgm.unlistenAllByKey(this.listenerKeys);
};
