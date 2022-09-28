import { AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const BottomBar = () => {
  return (
    <div className='bottom-navigation z-50'>
      <LinkedIn />
      <GitHub/>
    </div>
  );
};


const LinkedIn = () => {
  return (
      <a href="https://www.linkedin.com/in/daniel-corner-409128148/" className='sidebar-icon'>
      <AiFillLinkedin    className='sidebar-icon p-1'  ></AiFillLinkedin>
      </a>
  )
    }

const GitHub = () => {
  return (
    <a href="https://github.com/DMCorner" className='sidebar-icon'>
      <AiFillGithub   className='sidebar-icon p-1'  />
      </a>
  )
    }


export default BottomBar;