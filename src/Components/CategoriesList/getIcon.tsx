import ZeusIcon from "../../assets/gods/icons/zeus.png";
import PoseidonIcon from "../../assets/gods/icons/poseidon.png";
import AresIcon from "../../assets/gods/icons/ares.png";
import AthenaIcon from "../../assets/gods/icons/athena.png";
import DemeterIcon from "../../assets/gods/icons/demeter.png";
import ApolloIcon from "../../assets/gods/icons/apollo.png";
import HeraIcon from "../../assets/gods/icons/hera.png";

const icons = [
  ZeusIcon,
  PoseidonIcon,
  AresIcon,
  AthenaIcon,
  ApolloIcon,
  DemeterIcon,
  HeraIcon,
];

const getIcon = (index = 0): string => {
  if (index <= icons.length - 1) return icons[index];

  return icons[index - icons.length];
};

export default getIcon;
