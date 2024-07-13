import { FaGooglePlay } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaHandsClapping } from "react-icons/fa6";

export const PlayStoreIcon = () => {
  return <FaGooglePlay/>
}

export const ARIcon = () => {
  return <TbAugmentedReality className=" size-full"  /> 
}

export const HistoryIcon = () => {
  return <MdOutlineHistoryEdu className=" size-full"  />
}

export const InteractiveIcon = () => {
  return <FaHandsClapping className=" size-full" />
}