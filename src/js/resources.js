import { ImageSource, Sound, Resource, Loader } from "excalibur";
import playerImage from "../images/player.png";
import BGImage from "../images/bg.png";
import floorImage from "../images/floor.png";
import bulletImage from "../images/bullet.png";
import filthImage from "../images/filth.png";
import startImage from "../images/start.png";
import deadImage from "../images/deathscreen.png"

const Resources = {
  bg: new ImageSource(BGImage),
  player: new ImageSource(playerImage),
  floor: new ImageSource(floorImage),
  bullet: new ImageSource(bulletImage),
  filth: new ImageSource(filthImage),
  start: new ImageSource(startImage),
  dead: new ImageSource(deadImage)
};
const ResourceLoader = new Loader([Resources.bullet, Resources.bg, Resources.floor, Resources.player, Resources.filth, Resources.start, Resources.dead]);
export { Resources, ResourceLoader };