import topicMapper from "./src/topicMapper.js"; 
import mqtt from "mqtt";
import stateMap from "./src/stateMapper.js";

const mqttHost = process.env.MQTT_HOST;
const actuatorTopics = [];
const mqttClient = mqtt.connect(process.env.MQTT_HOST);

topicMapper.forEach((topic, key, map) => {
    if(topic.database === "picoCharlie") actuatorTopics.push(key)
});

actuatorTopics.forEach((topic) => {
    mqttClient.subscribeAsync(topic);
});


