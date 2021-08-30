import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router";

 function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };


  

  
  return (
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://icon-library.com/images/2018/9244684_cupid-arrow-cupid-silhouette-transparent-image-transparent-png.png" width="30px" height="0px"></img>
          IndianCupid
        </a>

        <a class="navbar-brand" href="#">
          Matches
        </a>
        <a class="navbar-brand" href="#">
          Search
        </a>
        <a class="navbar-brand" href="#">
          Messages
        </a>

        <div>
          <a  class="navbar-brand" href="#" onClick={handleClick}>
            Activity
          </a>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Likes</MenuItem>
            <MenuItem onClick={handleClose}>Favorites</MenuItem>
            <MenuItem onClick={handleClose}>Profile View</MenuItem>
            <MenuItem onClick={handleClose}>Block List</MenuItem>
          </Menu>
        </div>

        <div>
          
            <a href="https//https://www.thaicupid.com/en/general/crosssitejoin">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="white" class="bi bi-globe2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
              </svg>
            </a>
         

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </Button>
          <Menu id="simple-menu" anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose2}>
            <MenuItem onClick={handleClose2}>View Profile</MenuItem>
            <MenuItem onClick={handleClose2}>Edit Profile</MenuItem>
            <MenuItem onClick={handleClose2}>Matches</MenuItem>
            <MenuItem onClick={handleClose2}>Verify Profile</MenuItem>
            <MenuItem onClick={handleClose2}>Photos</MenuItem>
            <MenuItem onClick={handleClose2}>Switch off Profile</MenuItem>
          </Menu>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick3}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" fill="white" class="bi bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </Button>
          <Menu id="simple-menu" anchorEl={anchorE3} keepMounted open={Boolean(anchorE3)} onClose={handleClose3}>
            <MenuItem onClick={handleClose3}>Profile Setting</MenuItem>
            <MenuItem onClick={handleClose3}>Notification</MenuItem>
            <MenuItem onClick={handleClose3}>Help</MenuItem>
            <MenuItem onClick={()=>{props.history.push('/')}}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);


