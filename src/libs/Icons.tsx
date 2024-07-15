import { FaGooglePlay } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaHandsClapping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

interface IconProps {
  style?: string
}

export const PlayStoreIcon = ({style}:IconProps) => {
  return <FaGooglePlay className={`${style}`}/>
}

export const ARIcon = ({style}:IconProps) => {
  return <TbAugmentedReality className={`size-full ${style}`}  /> 
}

export const HistoryIcon = ({style}:IconProps) => {
  return <MdOutlineHistoryEdu className={`size-full ${style}`}  />
}

export const InteractiveIcon = ({style}:IconProps) => {
  return <FaHandsClapping className={`size-full ${style}`} />
}

export const MenuIcon = ({style}:IconProps) => {
  return <MdMenu className={`size-full ${style}`}/>
}