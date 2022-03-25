import HashLinkComponent from './HashLinkComponent';

const SideNavbar = () => {
  return (
      <ul className="nav">
        <li>
          <h4 className="headerOfComponentsSideBar">Components</h4>
        </li>
        <HashLinkComponent title='CPU' />
        <HashLinkComponent title='CPU Cooler' />
        <HashLinkComponent title='Motherboard' />
        <HashLinkComponent title='Memory' />
        <HashLinkComponent title='Storage' />
        <HashLinkComponent title='Video Card' />
        <HashLinkComponent title='Case' />
        <HashLinkComponent title='Power Suply' />
        <HashLinkComponent title='Monitor' />
      </ul>
  )
}

export default SideNavbar;