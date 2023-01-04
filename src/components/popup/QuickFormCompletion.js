import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Button, Dialog,
    //  IconButton,Typography
     } from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
// import StarRateIcon from '@material-ui/icons/StarRate';
import StarIcon from '@material-ui/icons/Star';
import "./popup-common.scss";
import "./QuickFormCompletion.scss";
import CheckIcon from '@material-ui/icons/Check';
import {
    GoogleSvg, 
    ElfSight,
  } from "../../core/ImgsesSvg";
const QuickFormCompletion = () => {
    // const styles = (theme) => ({
    //     root: {
    //         margin: 0,
    //         padding: theme.spacing(2),
    //     },
    //     closeButton: {
    //         position: 'absolute',
    //         right: theme.spacing(1),
    //         top: theme.spacing(1),
    //         color: theme.palette.grey[500],
    //     },
    // });
    // const DialogTitle = withStyles(styles)((props) => {
    //     const { children, classes, onClose, ...other } = props;
    //     return (
    //         <div className='modal-header'>
    //             <MuiDialogTitle disableTypography className={classes.root} {...other}>
    //                 <Typography variant="h6">{children}</Typography>
    //                 {onClose ? (
    //                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
    //                     <CloseIcon />
    //                 </IconButton>
    //                 ) : null}
    //             </MuiDialogTitle>
    //         </div>
    //     );
    // });
    const DialogContent = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
    }))(MuiDialogContent);
    // const DialogActions = withStyles((theme) => ({
    //     root: {
    //       margin: 0,
    //       padding: theme.spacing(1),

    //     },
    // }))(MuiDialogActions);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    var options=  {
        item:2,
        className:"owl-theme",
        margin:20,
        loop:true,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        nav:true,
        responsive: {
          0: {
              items: 1,
          },
          768: {
              items: 2,
          },
          960: {
            items: 1,
          },
          992: {
              items: 2,
          }
        }
      }
    return(<>
    <div className=''>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Completion form
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="modal-dialog completion-dialog" fullWidth
  maxWidth="md">
               
                <DialogContent dividers className='dialog-body'>
                    <div className='dialog-inner quick-completion'>
                        <div className='comp-percentage'>
                            <span>75% Complete</span>
                            <div className='line'>
                                <span style={{width:'75%'}}></span>
                            </div>
                            <p>Our technology searches for applicable lenders offering  the lowest rates in real time</p>
                        </div>
                        <div className='heading'>
                            <h2>You're Almost there!</h2>
                        </div>
                        <ul className='quick-ul'>
                            <li>
                                <img src="https://www.mbanc.ca/wp-content/uploads/2022/02/image_2022_02_14T22_34_37_547Z.png" alt="img" />
                                <span><CheckIcon/></span>
                            </li>
                            <li>
                                <img src="https://www.mbanc.ca/wp-content/uploads/2022/02/image_2022_02_14T22_34_37_549Z.png" alt="img" />     
                                <span><CheckIcon/></span>
                            </li>
                            <li>
                                <img src="https://www.mbanc.ca/wp-content/uploads/2022/02/image_2022_02_14T22_34_37_546Z.png" alt="img" />      
                                <span><CloseIcon/></span>
                            </li>
                        </ul>
                        <div className='complete-save-btn'>
                            <Button variant="contained" color="secondary">Complete it Now</Button>
                            <Button variant="contained" color="secondary">Save for later</Button>
                        </div>
                        <div className='user-reviews'>
                            <OwlCarousel
                                {...options}
                            >
                                <div className='user-review-wrap'>
                                    <div className='user-profile'>
                                        <img src="https://lh3.googleusercontent.com/a-/AOh14Gh40S3w8glI41A666Zg-Mk56ma98CD9F4Nu3CYujg=s240-c-c0x00000000-cc-rp-mo-br100" alt="img" />        
                                        <div className='user-name'>
                                            <h3> <a href="javascript:void(0);">Luke van Belkom</a></h3>
                                            <div className='user-rating'>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                            </div>
                                        </div>                  
                                    </div>
                                    <p>We had our First Home mortgage through Rate shop. It was a very pleasant experience working with them.I will highly recommend them to my friends and family for their mortgages needs!</p>
                                    <div className='post-on-google'>
                                        <GoogleSvg/>
                                        <p>Post on <a href='javascript:void(0);'>Google</a></p>
                                    </div>
                                </div>
                                <div className='user-review-wrap'>
                                    <div className='user-profile'>
                                        <img src="https://lh3.googleusercontent.com/a-/AOh14Gh40S3w8glI41A666Zg-Mk56ma98CD9F4Nu3CYujg=s240-c-c0x00000000-cc-rp-mo-br100" alt="img" />        
                                        <div className='user-name'>
                                            <h3> <a href="javascript:void(0);">Luke van Belkom</a></h3>
                                            <div className='user-rating'>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                            </div>
                                        </div>                  
                                    </div>
                                    <p>We had our First Home mortgage through Rate shop. It was a very pleasant experience working with them.I will highly recommend them to my friends and family for their mortgages needs!</p>
                                    <div className='post-on-google'>
                                        <GoogleSvg/>
                                        <p>Post on <a href='javascript:void(0);'>Google</a></p>
                                    </div>
                                </div>
                                <div className='user-review-wrap'>
                                    <div className='user-profile'>
                                        <img src="https://lh3.googleusercontent.com/a-/AOh14Gh40S3w8glI41A666Zg-Mk56ma98CD9F4Nu3CYujg=s240-c-c0x00000000-cc-rp-mo-br100" alt="img" />        
                                        <div className='user-name'>
                                            <h3> <a href="javascript:void(0);">Luke van Belkom</a></h3>
                                            <div className='user-rating'>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                            </div>
                                        </div>                  
                                    </div>
                                    <p>We had our First Home mortgage through Rate shop. It was a very pleasant experience working with them.I will highly recommend them to my friends and family for their mortgages needs!</p>
                                    <div className='post-on-google'>
                                        <GoogleSvg/>
                                        <p>Post on <a href='javascript:void(0);'>Google</a></p>
                                    </div>
                                </div>
                                <div className='user-review-wrap'>
                                    <div className='user-profile'>
                                        <img src="https://lh3.googleusercontent.com/a-/AOh14Gh40S3w8glI41A666Zg-Mk56ma98CD9F4Nu3CYujg=s240-c-c0x00000000-cc-rp-mo-br100" alt="img" />        
                                        <div className='user-name'>
                                            <h3> <a href="javascript:void(0);">Luke van Belkom</a></h3>
                                            <div className='user-rating'>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                                <a href="javascript:void(0);"><StarIcon/></a>
                                            </div>
                                        </div>                  
                                    </div>
                                    <p>We had our First Home mortgage through Rate shop. It was a very pleasant experience working with them.I will highly recommend them to my friends and family for their mortgages needs!</p>
                                    <div className='post-on-google'>
                                        <GoogleSvg/>
                                        <p>Post on <a href='javascript:void(0);'>Google</a></p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className='google-review-widgets'>
                            <a href=""><ElfSight/>Free Google Reviews widget</a>
                        </div>
                        <div className='quick-appoitment'>
                            <p>Our Mortgage Advisors are focused on Your Needs! Lowest Rates the first time, every time.</p>
                            <Button variant="contained" color="secondary">Call Now 1-800-725-9946</Button>
                            <p>Get Your Lowest Rate <a href="#">Book An Appointment</a></p>
                        </div>
                    </div>
                </DialogContent>
               
            </Dialog>
        </div>
    </>)
}

export default QuickFormCompletion;