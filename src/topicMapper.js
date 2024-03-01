const topicMapper = new Map();

topicMapper.set("/s0/uc0/temp", {database: "picoAlpha0", sensor: "temperature"});
topicMapper.set("/s0/uc0/tds", {database: "picoAlpha0", sensor: "tds"});
topicMapper.set("/s0/uc0/turb", {database: "picoAlpha0", sensor: "turbidity"});
topicMapper.set("/s0/uc1/flow0", {database: "picoBeta0", sensor: "flow0"});
topicMapper.set("/s0/uc1/flow1", {database: "picoBeta0", sensor: "flow1"});
topicMapper.set("/s0/uc1/flow2", {database: "picoBeta0", sensor: "flow2"});
topicMapper.set("/s0/uc1/flow3", {database: "picoBeta0", sensor: "flow3"});
topicMapper.set("/s0/uc2/pump0", {database: "picoChaddie0", actuator: "pump0"});
topicMapper.set("/s0/uc2/pump1", {database: "picoChaddie0", actuator: "pump1"});
topicMapper.set("/s0/uc2/mpump0", {database: "picoChaddie0", actuator: "mpump0"});
topicMapper.set("/s0/uc2/mpump1", {database: "picoChaddie0", actuator: "mpump1"});
topicMapper.set("/s0/uc2/aer", {database: "picoChaddie0", actuator: "aer"});
topicMapper.set("/s0/uc2/rmixer", {database: "picoChaddie0", actuator: "rmixer"});
topicMapper.set("/s0/uc2/sol0", {database: "picoChaddie0", actuator: "sol0"});
topicMapper.set("/s0/uc2/sol1", {database: "picoChaddie0", actuator: "sol1"});
topicMapper.set("/s0/uc2/sol2", {database: "picoChaddie0", actuator: "sol2"});
topicMapper.set("/s0/uc2/sol3", {database: "picoChaddie0", actuator: "sol3"});
topicMapper.set("/s0/uc2/sol4", {database: "picoChaddie0", actuator: "sol4"});
topicMapper.set("/s0/uc2/ph", {database: "picoChaddie0", sensor: "ph"});
topicMapper.set("/s0/uc2/temp", {database: "picoChaddie0", sensor: "temp"});

topicMapper.set("/s1/uc0/temp", {database: "picoAlpha1", sensor: "temperature"});
topicMapper.set("/s1/uc0/tds", {database: "picoAlpha1", sensor: "tds"});
topicMapper.set("/s1/uc0/turb", {database: "picoAlpha1", sensor: "turbidity"});
topicMapper.set("/s1/uc1/flow0", {database: "picoBeta1", sensor: "flow0"});
topicMapper.set("/s1/uc1/flow1", {database: "picoBeta1", sensor: "flow1"});
topicMapper.set("/s1/uc1/flow2", {database: "picoBeta1", sensor: "flow2"});
topicMapper.set("/s1/uc1/flow3", {database: "picoBeta1", sensor: "flow3"});
topicMapper.set("/s1/uc2/pump0", {database: "picoChaddie1", actuator: "pump0"});
topicMapper.set("/s1/uc2/pump1", {database: "picoChaddie1", actuator: "pump1"});
topicMapper.set("/s1/uc2/mpump0", {database: "picoChaddie1", actuator: "mpump0"});
topicMapper.set("/s1/uc2/mpump1", {database: "picoChaddie1", actuator: "mpump1"});
topicMapper.set("/s1/uc2/aer", {database: "picoChaddie1", actuator: "aer"});
topicMapper.set("/s1/uc2/rmixer", {database: "picoChaddie1", actuator: "rmixer"});
topicMapper.set("/s1/uc2/sol0", {database: "picoChaddie1", actuator: "sol0"});
topicMapper.set("/s1/uc2/sol1", {database: "picoChaddie1", actuator: "sol1"});
topicMapper.set("/s1/uc2/sol2", {database: "picoChaddie1", actuator: "sol2"});
topicMapper.set("/s1/uc2/sol3", {database: "picoChaddie1", actuator: "sol3"});
topicMapper.set("/s1/uc2/sol4", {database: "picoChaddie1", actuator: "sol4"});
topicMapper.set("/s1/uc2/ph", {database: "picoChaddie1", sensor: "ph"});
topicMapper.set("/s1/uc2/temp", {database: "picoChaddie1", sensor: "temp"});

export default topicMapper;

