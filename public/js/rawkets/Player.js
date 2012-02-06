/**************************************************
** PLAYER MANAGER
**************************************************/

var util = r.Util;

r.namespace("Player");
rawkets.Player = function (options) {
	var self = this;

	// Indexes for each type of player action
	// Must be a power of 2 for bitwise operations (1, 2, 4, 8, etc)
	self.actionTypes = {
		THRUST: 1,
		SHOOT: 2
	};

	self.id = options.id || null;
	self.respawnTime = options.respawnTime || 0;
	self.score = options.score || 0;
	self.dead = options.dead || false;
	self.action = options.action || 0; // Representation of player actions (thrust, shoot, etc)
	
	self.isMe = false;
};

// Helper variable
var Player = rawkets.Player;

// Check player action using bitwise
Player.prototype.is = function(action) {
	var self = this;
	
	return (self.action & action) == action;
};

// Set player action using bitwise
Player.prototype.set = function(action) {
	var self = this;

	return self.action |= action;
};