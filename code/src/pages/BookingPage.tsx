import { useEffect } from "react";

export const BookingPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.ctnotes.com/js/ctnotes/ctnotes_external_form.js";
    script.id = "ctnotestag";
    script.setAttribute("formid", "00Ee1auAsxzW7EsR86E7BMKE6YsRdZia");
    script.setAttribute("css", "1");
    document.getElementById("ctnotesform")?.appendChild(script);
  }, []);

  return (
    <div>
      <div id="ctnotesform" className="booking-form" style={{ display: "inline-block" }}></div>
    </div>
  );
};