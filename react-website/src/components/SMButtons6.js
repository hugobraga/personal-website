import React, { Fragment } from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const SMButtons6 = () => {
  return (
    // <div>
    <Fragment>
      <MDBBtn href="#" color="primary">
        Primary href
      </MDBBtn>
      <MDBBtn
        href="https://www.mdbootstrap.com"
        target="_blank"
        color="secondary"
      >
        Secondary href target blank
      </MDBBtn>

      <MDBBtn color="primary" size="lg">
        Large button
      </MDBBtn>
      <MDBBtn color="mdb-color">Normal button</MDBBtn>
      <MDBBtn color="dark-green" size="sm">
        Small button
      </MDBBtn>
    </Fragment>

    //   <MDBContainer>
    //     <MDBBtn size="5x" social="fb">
    //       <MDBIcon fab icon="facebook-f" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="tw">
    //       <MDBIcon fab icon="twitter" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="gplus">
    //       <MDBIcon fab icon="google-plus-g" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="li">
    //       <MDBIcon fab icon="linkedin-in" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="ins">
    //       <MDBIcon fab icon="instagram" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="pin">
    //       <MDBIcon fab icon="pinterest" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="yt">
    //       <MDBIcon fab icon="youtube" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="vk">
    //       <MDBIcon fab icon="vk" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="so">
    //       <MDBIcon fab icon="stack-overflow" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="slack">
    //       <MDBIcon fab icon="slack" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="git">
    //       <MDBIcon fab icon="github" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="comm">
    //       <MDBIcon icon="comments" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="email">
    //       <MDBIcon icon="envelope" />
    //     </MDBBtn>
    //     <MDBBtn size="lg" social="dribbble">
    //       <MDBIcon icon="dribbble" />
    //     </MDBBtn>
    //   </MDBContainer>
    // </div>
  );
};

export default SMButtons6;
