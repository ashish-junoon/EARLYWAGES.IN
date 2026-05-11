import React, { useEffect } from "react";
import useSEO from "../helper/useSeo";

const RefundPolicy = () => {
  useEffect(() => {
    if (window.scrollY > 100) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useSEO({
    title: "Refund Policy | EarlyWages",
    description:
      "Early wages is one of the easiest lending platform focused on young low income professional, students a customer segment that is underserved by traditional lenders.",
    keywords:
      "salary loan, instant salary loan, personal loan for salaried employees, quick salary advance, instant loan India, online loan application, employee loan service, fast loan approval, short term salary loan, digital lending platform, instant cash loan, emergency salary loan, loan for working professionals, quick personal loan India, salary based lending, 24 hour loan approval, fintech loan service, online personal loan India, easy loan for salaried people, quick cash advance India",
  });
  return (
    <section id="about" class="about w-[90%] max-w-[1400px] my-25 m-auto">
      <div class="container">
        <div class="section-header">
          <div class="row">
            <div class="col-md-9">
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <h1 className="text-5xl font-semibold mb-5">
                Refund <span className="text-primary">Policy</span>
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 content">
              <p>
                At JPCL (Junoon Capital Services Private Limited) we value our
                customers and are committed to providing best services. Refund
                process will only be initiated by JPCL in following conditions:
              </p>
              <p>We will not pass your details on to any third party.</p>
              <p>&nbsp;</p>
              <ul class="upper-roman">
                <li>
                  If repayment of the loan has been done by the borrower twice
                  by any means.
                </li>
                <li>
                  Any extra payment has been received by JPCL over and above the
                  repayment value in any case.
                </li>
                <li>
                  Repayment has been done mistakenly by the borrower
                  unintentionally before his/her due date of loan repayment.
                </li>
              </ul>

              <p>
                If for some unforeseen reason, the client is not satisfied with
                our services, they may call us to seek direction on future
                calls. We will give our best effort to increase the satisfaction
                levels in such cases. We strongly recommend that before making a
                payment, our visitors and potential clients should read the
                refund policy. If the customer is eligible for the refund then
                the refund amount would be credited in the respective bank
                account within 7 working days.
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
