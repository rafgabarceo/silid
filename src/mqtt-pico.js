import mqtt from "mqtt";
import topicMapper from "./topicMapper"; 

const client = mqtt.connect(process.env.MQTT_HOST);

console.log(topicMapper);
client.on("connect", () => {
})


