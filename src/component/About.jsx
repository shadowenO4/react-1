import React from 'react';

export default function About() {
  return (
    <section className="page-section about-section text-white mb-0" id="about">
      <div className="container">
        <h2 className="section-heading text-center text-uppercase">About</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download 
              includes the complete source files including HTML, CSS, and JavaScript as well 
              as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              You can create your own custom avatar for the masthead, change the icon in 
              the dividers, and add your email address to the contact form to make it fully 
              functional!
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="btn-outline-light-custom" href="#">
            <i className="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
}
