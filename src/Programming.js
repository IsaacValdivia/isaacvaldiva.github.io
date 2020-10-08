import React from "react";
import NodePanel from "./components/NodePanel";
import {
  GiVintageRobot,
  GiMusicalNotes,
  GiConsoleController
} from "react-icons/gi";
import { AUDIO_SLIDES, VIDEOGAME_SLIDES } from "./ProgrammingData";
import Node from "./components/Node";
import OwnCarousel from "./components/OwnCarousel";


const ROBOTICS_ICON = <GiVintageRobot />;
const AUDIO_ICON = <GiMusicalNotes />;
const VIDEOGAMES_ICON = <GiConsoleController />;

const TOP_LEFT_CONTENT = <OwnCarousel data={AUDIO_SLIDES} />;
const TOP_CENTER_CONTENT = <OwnCarousel data={VIDEOGAME_SLIDES} />;
const TOP_RIGHT_CONTENT = <OwnCarousel  />;
const MID_LEFT_CONTENT = <OwnCarousel  />;
const MID_RIGHT_CONTENT = <OwnCarousel  />;
const BOT_RIGHT_CONTENT = <OwnCarousel />;
const BOT_CENTER_CONTENT = <OwnCarousel />;
const BOT_LEFT_CONTENT = <OwnCarousel />;

const TOP_LEFT = <Node title="Audio-Related" icon={AUDIO_ICON} nodeContent={TOP_LEFT_CONTENT} />;
const TOP_CENTER = <Node title="Videogames" icon={VIDEOGAMES_ICON} nodeContent={TOP_CENTER_CONTENT} />;
const TOP_RIGHT = <Node title="Robotics" icon={ROBOTICS_ICON} nodeContent={TOP_RIGHT_CONTENT} />;
const MID_LEFT = <Node title="Audio \& Music-related" icon={AUDIO_ICON} nodeContent={MID_LEFT_CONTENT} disabled />;
const MID_RIGHT = <Node title="Audio \& Music-related" icon={AUDIO_ICON} nodeContent={MID_RIGHT_CONTENT} disabled />;
const BOT_LEFT = <Node title="Audio \& Music-related" icon={AUDIO_ICON} nodeContent={BOT_RIGHT_CONTENT} disabled />;
const BOT_CENTER = <Node title="Audio \& Music-related" icon={AUDIO_ICON} nodeContent={BOT_CENTER_CONTENT} disabled />;
const BOT_RIGHT = <Node title="Audio \& Music-related" icon={AUDIO_ICON} nodeContent={BOT_LEFT_CONTENT} disabled />;

const Programming = () => {
  const nodeList = [ TOP_LEFT, TOP_CENTER, TOP_RIGHT, MID_LEFT, MID_RIGHT, BOT_LEFT, BOT_CENTER, BOT_RIGHT ];
  return <NodePanel nodeList={nodeList} />;
}

export default Programming;
