import React, { useEffect } from 'react'
import useSEO from '../helper/useSeo'

const Grieviance = () => {

  useEffect(() => {
      if (window.scrollY > 100) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, []);


  useSEO({
    title: "Grieviance | EarlyWages",
    description:
      "Early wages is one of the easiest lending platform focused on young low income professional, students a customer segment that is underserved by traditional lenders.",
    keywords:
      "salary loan, instant salary loan, personal loan for salaried employees, quick salary advance, instant loan India, online loan application, employee loan service, fast loan approval, short term salary loan, digital lending platform, instant cash loan, emergency salary loan, loan for working professionals, quick personal loan India, salary based lending, 24 hour loan approval, fintech loan service, online personal loan India, easy loan for salaried people, quick cash advance India",
  });
  return (
    <section id="about" className="about w-[90%] max-w-[1400px] m-auto my-25">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 className='text-5xl font-semibold mb-5'>Rates & <span className='text-primary'>Fees</span></h2>
          <p>Rates &amp; Processing Fee</p>
        </div>

        <div className="row content">

          <div className="col-md-12 col-lg-12">
            <p>
              EarlyWages is committed to delivering exceptional customer service and addressing any grievances promptly
              and effectively. Below is a rephrased overview of their Grievance Redressal Policy:
            </p>
            <h2>Grievance Redressal Policy Overview</h2>
            <br />
            <h3>Objective</h3>
            Junoon Capital prioritizes customer satisfaction and aims to resolve all concerns efficiently. The policy
            ensures:
            <ul className="custom-bullets">
              <li>Timely and effective resolution of customer complaints.</li>
              <li>Utilization of customer feedback to enhance services and processes. </li>
              <li>Provision for escalating unresolved issues to higher authorities within the organization</li>
            </ul>
          </div>
          

          <div className="col-md-12 col-lg-12">
            <br />
          <br />
            <h3>Definition of a Complaint</h3>
            <p>A complaint is any expression of dissatisfaction related to:</p>
            <ul className="custom-bullets">
              <li>Services, products, or policies of Junoon Capital Services Pvt. Ltd.</li>
              <li>Services provided by third-party agencies on behalf of Junoon Capital.</li>
              <li>Behavior of employees.</li>
              <li>Confidentiality and protection of personal and financial information.</li>
            </ul>
            <p>Note: Requests for data modification or inquiries about loan products, interest rates, etc., are not
              classNameified as complaints and should be directed to customer care.</p>
          </div>
         
          <div className="col-md-12 col-lg-12">
            <br />
            <br />
            <h3>Who Can Lodge a Complaint</h3>
            <p>Any individual who has availed a loan or financial facility from Junoon Capital Services Pvt. Ltd. is
              eligible to file a complaint.</p>
          </div>
         
          <div className="col-md-12 col-lg-12">
            <br />
            <br />
            <h2>Procedure for Lodging a Complaint</h2>
            <h3>1. Modes of Submission</h3>
            <p>Customers can submit their complaints through:</p>
            <ul className="custom-bullets">
              <li><b>Phone: </b>Call at +91-9311343335</li>
              <li><b>Email: </b>Send an email to care@junooncapital.com</li>
            </ul>
            <p>For in-person visits to Junoon Capital offices, administrative staff will assist customers in raising
              their concerns through official channels or via the "Early Wages", "PaisaUdhar" and "InstaPaise" loan
              applications.</p>

            <h3>2. Information Required</h3>
            <p>When lodging a complaint, please provide: </p>
            <ul className="hover-list">
              <li>Full name</li>
              <li>Complete correspondence address</li>
              <li>Registered email ID</li>
              <li>Registered contact number</li>
              <li>Detailed description of the complaint </li>
              <li>Any supporting documents, if available</li>
            </ul>
          </div>
        
          <div className="col-md-12 col-lg-12">
            <br />
            <br />
            <h2>Complaint Resolution Process</h2>
            <h3>1. Immediate Resolution</h3>
            <p>Complaints that can be addressed promptly will be resolved during the initial contact, and the case will
              be closed accordingly. </p>
            <h3>2. Further Investigation</h3>
            <p>If a complaint requires additional verification or support from other departments:</p>
            <ul className="hover-list">
              <li>
                The customer will be informed about the expected resolution timeline.
              </li>
              <li>A formal communication will be sent to the relevant department, with the Grievance Redressal Officer
                (GRO) in the loop.</li>
              <li>
                The customer care team will provide:
                <ul>
                  <li>Information on all issues raised.</li>
                  <li>Explanation of the final solution.</li>
                  <li>Expected timelines for resolution.</li>
                  <li>Regular updates on the progress.</li>
                  <li>Requests for any additional information or documents, if necessary.</li>
                </ul>
              </li>
            </ul>
            <p>Efforts will be made to contact the customer through the same medium used to lodge the complaint.</p>
            <h3>3. Record Maintenance</h3>
            <p>Once resolved, the complaint status will be updated to "closed" in the system. These records are
              maintained for future reference and can be reviewed as needed.</p>
            <p>For more detailed information, please visit the official Grievance Redressal page: <a target="_blank"
                href="https://www.junooncapital.com/grievance-redressal">GRIEVANCE REDRESSAL</a> </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grieviance