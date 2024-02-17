import topicMapper from "./src/topicMapper.js"; 
import mqtt from "mqtt";

const mqttHost = process.env.MQTT_HOST;
const actuatorTopics = [];
const mqttClient = mqtt.connect(process.env.MQTT_HOST);

topicMapper.forEach((topic, key, map) => {
    if(topic.database === "picoCharlie") actuatorTopics.push(key)
});


async function main() {
    try {
	mqttClient.on("connect", async () => {
	    await mqttClient.subscribeAsync(actuatorTopics);
	    console.log(`Connection established with broker at ${mqttHost}`);
	});

	mqttClient.on("close", async () => {
	    console.log("Connection closed!");
	})

	mqttClient.on("reconnect", async () => {
	    console.log("Connection re-opened!");
	})
    } catch (err) {
	console.error(err);
    }
}

main();
