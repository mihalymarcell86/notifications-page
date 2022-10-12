import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";
import chessImg from "../assets/images/image-chess.webp";

const notifications = [
  {
    userName: "Mark Webber",
    avatar: avatarMarkWebber,
    time: "1m",
    action: "REACT_POST",
    target: "My first tournament today!",
    read: false,
  },
  {
    userName: "Angela Gray",
    avatar: avatarAngelaGray,
    time: "5m",
    action: "FOLLOW",
    read: false,
  },
  {
    userName: "Jacob Thompson",
    avatar: avatarJacobThompson,
    time: "1 day",
    action: "JOINED_GROUP",
    target: "Chess Club",
    read: false,
  },
  {
    userName: "Rizky Hasanuddin",
    avatar: avatarRizkyHasanuddin,
    time: "5 days",
    action: "MESSAGE",
    target:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true,
  },
  {
    userName: "Kimberly Smith",
    avatar: avatarKimberlySmith,
    time: "1 week",
    action: "COMMENT_PIC",
    target: chessImg,
    read: true,
  },
  {
    userName: "Nathan Peterson",
    avatar: avatarNathanPeterson,
    time: "2 weeks",
    action: "REAACT_POST",
    target: "5 end-game strategies to increase your win rate",
    read: true,
  },
  {
    userName: "Anna Kim",
    avatar: avatarAnnaKim,
    time: "2 weeks",
    action: "LEFT_GROUP",
    target: "Chess Club",
    read: true,
  },
];

export default notifications;
