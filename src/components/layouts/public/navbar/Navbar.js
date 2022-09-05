import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


export default function Navbar() {

  const open = true;

  const [showClass, setShowClass] = React.useState('');

  const anchorRef = React.useRef(null);

  const handleToggle = () => {

    setShowClass((prevClass) => ((prevClass == '') ? 'show' : ''));

  };

  return (
    <div>
      <Paper className='desktop-main'>
        <MenuList className='desktop-menu'>
          <MenuItem><NavLink to='/'>Home</NavLink> </MenuItem>
          <MenuItem><NavLink to="/mortgages">Mortgages</NavLink></MenuItem>
          <MenuItem><NavLink to="/loans">Loans</NavLink></MenuItem>
          <MenuItem><NavLink to="/credit-cards">Credit Cards</NavLink></MenuItem>
          <MenuItem><NavLink to="/banking">Banking</NavLink></MenuItem>
          <MenuItem><NavLink to="/investments">Investments</NavLink></MenuItem>
          <MenuItem><NavLink to="/insurance">Insurance</NavLink></MenuItem>
          <MenuItem><NavLink to="/money-transfers">Money Transfers</NavLink></MenuItem>
          <MenuItem><NavLink to="/credit-score">Credit Score</NavLink></MenuItem>
          <MenuItem><NavLink to="/contact">Contact</NavLink></MenuItem>
          <MenuItem><NavLink to="/blogs">Blogs</NavLink></MenuItem>
        </MenuList>
      </Paper>
      <div className='mobile-menu'>
        <div className={`mobile-overlay ${showClass}`}></div>
        <Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle} className={`mobile-toggle-btn ${showClass}`}>
          <MenuIcon className="mobile-toggle" />
          <CloseIcon className="mobile-toggle toggle-close" />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={`mobile-menu-list  ${showClass}`}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem><NavLink to='/'>Home</NavLink> </MenuItem>
                  <MenuItem><NavLink to="/mortgages">Mortgages</NavLink></MenuItem>
                  <MenuItem><NavLink to="/loans">Loans</NavLink></MenuItem>
                  <MenuItem><NavLink to="/credit-cards">Credit Cards</NavLink></MenuItem>
                  <MenuItem><NavLink to="/banking">Banking</NavLink></MenuItem>
                  <MenuItem><NavLink to="/investments">Investments</NavLink></MenuItem>
                  <MenuItem><NavLink to="/insurance">Insurance</NavLink></MenuItem>
                  <MenuItem><NavLink to="/money-transfers">Money Transfers</NavLink></MenuItem>
                  <MenuItem><NavLink to="/credit-score">Credit Score</NavLink></MenuItem>
                  <MenuItem><NavLink to="/contact">Contact</NavLink></MenuItem>
                  <MenuItem><NavLink to="/blogs">Blogs</NavLink></MenuItem>
                  <MenuItem>
                    <Button variant="contained" className="apply-now" color="secondry" >Apply Now</Button>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
