## RoboPerception

This project enables web-based teleoperation support for different types of robots like [MiniPupper](https://minipupperdocs.readthedocs.io/en/latest/).
Video streaming is implemented via WebRTC, and teleoperation is done via ROS.
Note that the [backend](https://github.com/WaverleySoftware/robo-perception/tree/main/backend) expects you've already connected a depth camera like [OAK-D Lite](https://shop.luxonis.com/products/oak-d-lite-1) to your robot (only Luxonis products are supported at the moment). If you don't have one yet, you can still teleoperate the robot via keyboard w/o a video stream, or just use a simulator (guide TBD).

<video src="https://user-images.githubusercontent.com/6638780/216462051-69f42309-a2ed-4503-bd91-8f26c7efc3ee.mp4"></video>

- [RoboPerception](#roboperception)
  - [Architecture](#architecture)
  - [Installation](#installation)
  - [Running](#running)
  - [Building FE and BE Docker images](#building-fe-and-be-docker-images)
  - [ToDo](#todo)

### Architecture

The following diagram reflects the most recent implementation:

![RoboticsDiagram](https://user-images.githubusercontent.com/6638780/215894287-12096b5d-7e7c-42dd-910d-089199378e9a.png)

- **backend**: Python BE, which streams camera video to the remote browser via WebRTC; it internally uses [DepthAI](https://docs.luxonis.com/projects/api/en/latest/index.html) API on real hardware, and Gazebo camera images in simulation mode;
- **frontend**: ReactJS FE which uses [roslibjs](https://github.com/RobotWebTools/roslibjs) to communicate with ROS bridge and WebRTC API for camera streaming;
- **rosbridge**: WS proxy between FE/BE and ROS that handles the following messages.

| Source | Pub/Sub | Topic                              | Message Type                | Example    |
| ------ | ------- | ---------------------------------- | --------------------------- | ---------- |
| FE     | Pub     | /key                               | std_msgs/String             | i/I/1/,    |
| FE     | Pub     | /robot_pose/change                 | std_msgs/String             | sit/stand  |
| FE     | Sub     | /teleop_status                     | std_msgs/Bool               | true/false |
| FE     | Sub     | /robot_pose/is_standing            | std_msgs/Bool               | true/false |
| FE     | Sub     | /battery/state                     | sensor_msgs/BatteryState    |            |
| FE     | Sub     | /memory/state                      | std_msgs/Float32            | 0.0-100.0  |
| FE     | Sub     | /cpu/state                         | std_msgs/Float32            | 0.0-100.0  |
| BE     | Sub     | /camera/color/image_raw/compressed | sensor_msgs/CompressedImage |            |

- ROS Bridge should be visible to a client to perform common operations via Web UI.
- You should provide `CompressedImage` to see a virtual camera stream from Gazebo in simulation mode.
- Only `BatteryState.percentage` property is used for rendering for battery stats.
- Teleoperation is impossible while `is_standing` or `teleop_status` flag is `false`.
- Keyboard keys are sent in a raw format. You should implement ROS subscriber which transforms a key to `cmd_vel`.
- `/robot_pose/change` is very robot-specific: FE just sends either a `sit` or `stand` command.

### Installation

Clone the source code:

```shell
git clone https://github.com/WaverleySoftware/robo-perception.git && cd robo-perception
```

Prepare required env files:

```shell
./generate_configs.sh [ROBOT_IP_ADDRESS]
```

Robot's IP is required for the FE to be able to communicate with the BE via remote browser.

Setup backend:
```shell
cd backend && python3 -m venv .venv
source .venv/bin/activate
pip3 install pip --upgrade
pip3 install -r requirements.txt
```

Setup frontend:
```shell
cd ../frontend
npm install
```

### Running

Start ROS bridge and all the custom ROS services that implement the message protocol described in [architecture](#architecture) section.

Start backend:
```shell
cd robo-perception/backend && source .venv/bin/activate
./run.sh
```

Start frontend:
```shell
cd robo-perception/frontend && npm start
```

Open your web browser and go to: `http://[ROBO_PERCEPTION_SERVICE_IP_ADDRESS]:3000`

### Building FE and BE Docker images

Run the following command to build FE and BE images:

```shell
docker compose build
```

### ToDo

- [ ] Polish FE and BE code
- [x] Add local deployment instructions
- [ ] Add simulated environment instructions
- [ ] Add Docker instructions
- [ ] Migrate to ROS2
- [ ] Add interactive map for SLAM and navigation
- [ ] Add gamepad support
