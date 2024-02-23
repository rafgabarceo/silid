const topicMapper = new Map();
topicMapper.set("/uc0/temp", {database: "picoAlpha", sensor: "temperature"});
topicMapper.set("/uc0/tds", {database: "picoAlpha", sensor: "tds"});
topicMapper.set("/uc0/turb", {database: "picoAlpha", sensor: "turbidity"});

topicMapper.set("/uc1/flow0", {database: "picoBeta", sensor: "flow0"});
topicMapper.set("/uc1/flow1", {database: "picoBeta", sensor: "flow1"});
topicMapper.set("/uc1/flow2", {database: "picoBeta", sensor: "flow2"});
topicMapper.set("/uc1/flow3", {database: "picoBeta", sensor: "flow3"});
topicMapper.set("/uc1/flow4", {database: "picoBeta", sensor: "flow4"});

topicMapper.set("/uc2/pump0", {database: "picoCharlie", actuator: "pump0"});
topicMapper.set("/uc2/pump1", {database: "picoCharlie", actuator: "pump1"});
topicMapper.set("/uc2/mpump0", {database: "picoCharlie", actuator: "mpump0"});
topicMapper.set("/uc2/mpump1", {database: "picoCharlie", actuator: "mpump1"});
topicMapper.set("/uc2/aer", {database: "picoCharlie", actuator: "aer"});
topicMapper.set("/uc2/rmixer", {database: "picoCharlie", actuator: "rmixer"});
topicMapper.set("/uc2/sol0", {database: "picoCharlie", actuator: "sol0"});
topicMapper.set("/uc2/sol1", {database: "picoCharlie", actuator: "sol1"});
topicMapper.set("/uc2/sol2", {database: "picoCharlie", actuator: "sol2"});
topicMapper.set("/uc2/sol3", {database: "picoCharlie", actuator: "sol3"});
topicMapper.set("/uc2/sol4", {database: "picoCharlie", actuator: "sol4"});
topicMapper.set("/uc2/checkstate", {database: "picoCharlie", actuator: "all"});

topicMapper.set("/uc3/ph", {database: "picoDelta", sensor: "ph"});
topicMapper.set("/uc3/temp", {database: "picoDelta", sensor: "temp"});
export default topicMapper;

