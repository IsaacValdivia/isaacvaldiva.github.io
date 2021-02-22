import React from "react";
import {
  GiMinerals,
  GiViolin,
  GiSoundWaves,
  GiConsoleController,
  GiQuillInk,
  GiPianoKeys,
  GiAudioCassette,
  GiPerspectiveDiceSixFacesRandom
} from "react-icons/gi";
import Node from "./components/Node";
import NodePanel from "./components/NodePanel";
import "./Audio.css";
import "./constants/Constants";
import "./VideoData";
import {
  METAL_ITEMS,
  ORCHESTRAL_ITEMS,
  ELECTRONIC_ITEMS,
  CHAMBER_ITEMS,
  INTERACTIVE_ITEMS,
  PERFORMANCE_ITEMS,
  HYBRID_ITEMS,
  HIP_HOP_ITEMS
} from "./VideoData";
import OwnCarousel from "./components/OwnCarousel";

const METAL_ICON = <GiMinerals />;
const ORCHESTRAL_ICON = <GiViolin />;
const ELECTRONIC_ICON = <GiSoundWaves />;
const CHAMBER_ICON = <GiQuillInk />;
const INTERACTIVE_ICON = <GiConsoleController />;
const PERFORMANCE_ICON = <GiPianoKeys />;
const HIP_HOP_ICON = <GiAudioCassette />;
const HYBRID_OTHER_ICON = <GiPerspectiveDiceSixFacesRandom />;

const TOP_LEFT_CONTENT = <OwnCarousel video data={ORCHESTRAL_ITEMS} />;
const TOP_CENTER_CONTENT = <OwnCarousel video data={INTERACTIVE_ITEMS} />;
const TOP_RIGHT_CONTENT = <OwnCarousel video data={METAL_ITEMS} />;
const MID_LEFT_CONTENT = <OwnCarousel video data={ELECTRONIC_ITEMS} />;
const MID_RIGHT_CONTENT = <OwnCarousel video data={CHAMBER_ITEMS} />;
const BOT_RIGHT_CONTENT = <OwnCarousel video data={HYBRID_ITEMS} />;
const BOT_CENTER_CONTENT = <OwnCarousel video data={PERFORMANCE_ITEMS} />;
const BOT_LEFT_CONTENT = <OwnCarousel video data={HIP_HOP_ITEMS} />;

const TOP_LEFT = <Node title="Orchestral" icon={ORCHESTRAL_ICON} nodeContent={TOP_LEFT_CONTENT} />;
const TOP_CENTER = <Node title="Interactive" icon={INTERACTIVE_ICON} nodeContent={TOP_CENTER_CONTENT}/>;
const TOP_RIGHT = <Node title="Metal&Rock" icon={METAL_ICON} nodeContent={TOP_RIGHT_CONTENT} />;
const MID_LEFT = <Node title="Electronic" icon={ELECTRONIC_ICON} nodeContent={MID_LEFT_CONTENT} />;
const MID_RIGHT = <Node title="Chamber" icon={CHAMBER_ICON} nodeContent={MID_RIGHT_CONTENT} />;
const BOT_RIGHT = <Node title="Hybrid" icon={HYBRID_OTHER_ICON} nodeContent={BOT_RIGHT_CONTENT} disabled />;
const BOT_CENTER = <Node title="Performance" icon={PERFORMANCE_ICON} nodeContent={BOT_CENTER_CONTENT} />;
const BOT_LEFT = <Node title="Hip-Hop" icon={HIP_HOP_ICON} nodeContent={BOT_LEFT_CONTENT} disabled />;

const Audio = () => {
  const nodeList = [TOP_LEFT, TOP_CENTER, TOP_RIGHT, MID_LEFT, MID_RIGHT, BOT_LEFT, BOT_CENTER, BOT_RIGHT];
  return (
    <NodePanel nodeList={nodeList} />
  );
};

export default Audio;
