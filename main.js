var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    // for every creep name in Game.creeps
    for (let name in Game.creeps)   {
        // get the creep object
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester')   {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'upgrader')   {
            roleUpgrader.run(creep);
        }
    }

    var name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined,
        { role: 'harvester', working: false});

    if (name != undefined)  {
        console.log("Spawned new creep: " + name);
    }


};