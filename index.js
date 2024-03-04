import topicMapper from "./src/topicMapper.js"; 
import mqtt from "mqtt";
import stateMap from "./src/stateMapper.js";
import fs from "node:fs";

const mqttHost = process.env.MQTT_HOST;
const actuatorTopics = [];
const mqttClient = mqtt.connect(process.env.MQTT_HOST);
const topic = process.env.MQTT_TOPIC;
const startTopic = process.env.MQTT_START_TOPIC;
const endTopic = process.env.MQTT_END_TOPIC;
const heartbeatTopic = process.env.MQTT_HEARTBEAT_TOPIC;
let started = false;
let timeoutId;

console.log(`Listening at ${mqttHost}`);

//  Timers delay before activation
const s2tos3 = 60*16;
const s3tos4 = s2tos3 + 60*14;
const s4tos5 = s3tos4 + 60*4;
const s5tos6 = s4tos5 + 30;
const s6loop = 30;
const s6n = 10;
const s6tos7 = s5tos6 + 30;
const s7tos8 = s6tos7 + 60*5;
const s8tos9 = s7tos8 + 60*16;
const s9tos10 = s8tos9 + 60*40;
const s10tos11 = s9tos10 + 60*16;
const s11tos12 = s10tos11 + 60*16;
const endstate = s11tos12 + 15; 
let data;
let tick;

try {
    let stringBuffer = fs.readFileSync("./tick", "utf8");
    data = parseInt(stringBuffer);
} catch (error) {
    console.error(error);
}

let updateTick = true;
tick = data;

function inRange(tick, min, max) {
    return tick >= min && tick < max;
}

function startSystemTick() {
    timeoutId = setInterval(() => {
	if(updateTick == true) {
	    tick++;
	}
	fs.writeFile("./tick", tick.toString(), err => {
	    if(err) { 
		console.error(err);
	    } else {
		// Don't do anything.
	    }
	});
	if(inRange(tick, 0, s2tos3)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(2)));
	    console.log("State is 2")
	} else if(inRange(tick, s2tos3, s3tos4)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(3)));
	    console.log("State is 3");
	} else if(inRange(tick, s3tos4, s4tos5)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(4)));
	     console.log("State is 4");
	} else if(inRange(tick, s4tos5, s5tos6)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(5)));
	     console.log("State is 5");
	} else if(inRange(tick, s6tos7, s7tos8)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(6)));
	     console.log("State is 6");
	} else if(inRange(tick, s7tos8, s8tos9)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(7)));
	     console.log("State is 7");
	} else if(inRange(tick, s8tos9, s9tos10)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(8)));
	     console.log("State is 8");
	} else if(inRange(tick, s9tos10, s10tos11)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(9)));
	     console.log("State is 9");
	} else if(inRange(tick, s10tos11, s11tos12)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(10)));
	     console.log("State is 10");
	} else if(inRange(tick, s11tos12, endstate)) {
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(11)));
	    console.log("State is 11")
	} else if(tick > endstate) {
	    console.log("Run is finished.");
	    mqttClient.publish(topic, JSON.stringify(stateMap.get(0)));
	    clearTimeout(timeoutId);
	    let resetTick = 0;
	    started = false;
	    fs.writeFile("./tick", resetTick.toString(), err => {
		console.error(err);
	    });
	}
    }, 1000)
}

mqttClient.subscribe(startTopic, {qos: 1});
mqttClient.subscribe(endTopic, {qos: 1});
mqttClient.subscribe(heartbeatTopic, {qos: 1});
mqttClient.on("message", (incomingTopic, message) => {
    fs.readFile("./heartbeat", "utf8", (err, data) => {
	let currentTime = new Date().getTime();
	let lastHeartbeat = parseInt(data);
	let timeDifference = currentTime - lastHeartbeat;
	if(timeDifference > 10) {
	    updateTick = false;
	     mqttClient.publish(topic, JSON.stringify(stateMap.get(0)));
	} else {
	    updateTick = true;
	}
    })
    if(incomingTopic === startTopic) {
	console.log("Got start.")
	if(started !== true) {
	console.log("Recieved start. Setting in progress state.");
	    started = true;
	    startSystemTick();
	} else {
	    console.log("State already started");
	}
    } else if(incomingTopic === endTopic) {
	clearTimeout(timeoutId);
	 mqttClient.publish(topic, JSON.stringify(stateMap.get(0)));
	let resetTick = 0;
	started = false;
	fs.writeFile("./tick", resetTick.toString(), err => {
	    console.error(err);
	});
    } else if(incomingTopic === heartbeatTopic) {
	fs.writeFile("./heartbeat", (new Date().getTime()).toString(), err => {
	    if(err) {
		console.error(err);
	    }
	})
    }
})
