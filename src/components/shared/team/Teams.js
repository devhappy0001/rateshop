import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Container,Button} from "@material-ui/core/";
import './team.scss';
import { teamMemberOne,teamMemberTwo,teamMemberThree } from "../../../core/Images";

const Teams = () => {
  var options=  {

    className:"owl-theme",
    margin:20,
    responsiveClass: true,
    autoplay:true,
    dots:false,
    responsive: {
      0: {
          items: 1,
      },
      575: {
          items: 2,
      },
      992: {
          items: 3,
      },
      1400:{
        margin:40,
      }
    }
  }
  return (
    <>
      <section className="our-team"> 
      <Container>
          <div className="heading">
            <h3><span>Our</span> Teams</h3> 
        </div>
 
          <OwlCarousel
            // items={3}
            // className="owl-theme"
            // loop
            // nav
            // margin={40}
            // autoplay={true}
            // dots={false}
            {...options}
          >
            <div>
              <figure>
                <img
                  className="img"
                  src={teamMemberOne}
                  alt="team-member-1"
                />
              </figure>
              <div className="info-details">
                <h4>Desire Silcott</h4>
                <p>Customer Success Specialist</p>
              </div>
            </div>
            <div>
              <figure>
                <img
                  className="img"
                  src={teamMemberTwo}
                  alt="team-memeber-2"
                />
              </figure>
              <div className="info-details">
                <h4>DChase Belair</h4>
                <p>Principle Broker</p>
              </div>
            </div>
            <div>
              <figure>
                <img
                  className="img"
                  src={teamMemberThree}
                  alt="team-member-3"
                />
              </figure>
              <div className="info-details">
                <h4>Diana Dokmajian</h4>
                <p>Customer Success Team Lead</p>
              </div>
            </div>
            <div>
              <figure>
                <img
                  className="img"
                  src={teamMemberThree}
                  alt="team-member-3"
                />
              </figure>
              <div className="info-details">
                <h4>Diana Dokmajian</h4>
                <p>Customer Success Team Lead</p>
              </div>
            </div>
          </OwlCarousel>
        <div className="d-flex justify-content-center mt-80">
          <Button variant="contained" color="default">
            Get Started Now
          </Button>
        </div>
        </Container>
      </section>
    </>
  );
};

export default Teams;
