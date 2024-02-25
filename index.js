import topicMapper from "./src/topicMapper.js"; 
import mqtt from "mqtt";
import stateMap from "./src/stateMapper.js";

const mqttHost = process.env.MQTT_HOST;
const actuatorTopics = [];
const mqttClient = mqtt.connect(process.env.MQTT_HOST);
const topic = "/uc2/state";
let stateTimer = 0;
let mixTimer = 0;
let curr_state = 0;
let next_state = 0;


// Timers
const s1tos2 = 60*16;
const s2tos3 = s1tos2 + 60*14;
const s3tos4 = s2tos3 + 60*4;
const s4tos5 = s3tos4 + 30;
const s5loop = 30;
const s5n = 10;
const s5tos6 = s5loop * s5n + s4tos5;
const s6tos7 = s5tos6 + 60*5;
const s7tos8 = s6tos7 + 60*16;
const s8tos9 = s7tos8 + 60*40;
const s9tos10 = s8tos9 + 60*16;

let stateTimerInterval = setInterval(() => {
    stateTimer++;
    console.log(stateTimer);
}, 1000);

setTimeout(() => {
    clearInterval(stateTimerInterval);
}, s9tos10+1)

const controlActuators = async (state) => {
    let actuatorState = JSON.stringify(stateMap.get(state));
    await mqttClient.publishAsync(actuatorState);
}

const changeState = () => {
    
}

topicMapper.forEach((topic, key, map) => {
    if(topic.database === "picoCharlie") actuatorTopics.push(key)
});

actuatorTopics.forEach((topic) => {
    mqttClient.subscribeAsync(topic);
});

