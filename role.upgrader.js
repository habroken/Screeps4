module.exports = {
    run: function (creep) {

        // if creep is bringing energy to the spawn but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to the spawn
        if (creep.memory.working == true) {
            // try to transfer energy, if the spawn is not in range
            if (creep.upgrade
            // if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            // move towards the spawn
                creep.moveTo(Game.spawns.Spawn1);
        }
    }
    // if creep is supposed to harvest energy from source
    else {
        // find closest source
        var sources = creep.room.find(FIND_SOURCES);
// try to harvest energy, if the source is not in range
if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    // move towards the source
    creep.moveTo(sources[0]);
}
}
// blablabla
}


};