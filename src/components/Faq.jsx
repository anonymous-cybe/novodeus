import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

function Faq() {
  return (
    <div className="faq-container">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className="faq-wrapper">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How does Novodeus differ from other agencies?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Novodeus stands out through a fusion of innovation,
                client-centricity, and a multi-disciplinary approach. Unlike
                traditional agencies, we prioritize collaborative partnerships,
                blending expertise in product design, development, and branding.
                Our relentless pursuit of innovation ensures tailored solutions
                that transcend expectations, guiding clients towards digital
                excellence and success.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How do you work with clients and what are your processes as an
                agency?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Our client engagement begins with an in-depth understanding of
                their goals and challenges. At Novodeus, we follow a meticulous
                process, starting from comprehensive research and ideation,
                progressing to prototyping, iterative design, development, and
                rigorous testing. We emphasize transparent communication,
                regular feedback loops, and a collaborative approach to ensure
                clients are integral to every stage of the project.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Do you work with startups or only with B2B/enterprise companies?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Novodeus believes in nurturing innovation across all scales. We
                collaborate with startups, enterprises, and B2B companies alike.
                Our adaptive strategies cater to the unique needs of each
                client, regardless of their size or industry, ensuring
                innovative solutions that align with their objectives.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Does Novodeus help with product redesign?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Absolutely. Novodeus specializes in holistic solutions,
                including product redesign. Whether it's refining existing
                products for enhanced user experiences or reimagining brand
                identities, our team leverages expertise in design, development,
                and branding to elevate products to new heights.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How do you handle working in different time zones?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We're adept at working across various time zones. Our team
                embraces flexibility, ensuring seamless communication and
                project management irrespective of geographical differences. We
                leverage digital collaboration tools and establish clear
                communication protocols to ensure all stakeholders stay
                connected and informed.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How quickly can you start my project?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                At Novodeus, we prioritize promptness without compromising
                quality. Our project initiation timeline depends on project
                complexity, resource availability, and client readiness. We
                strive to kick-start projects promptly after thorough initial
                discussions, aiming for efficient yet effective project
                commencement. Contact us to discuss your project timeline and
                our current availability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
