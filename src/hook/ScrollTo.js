import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTo(){
    const location = useLocation();

    useEffect(()=>{
      const hash  = location.hash;
      if (location.hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({behavior: "smooth"});
        } else {
          window.scrollTo({top:0,behavior:'instant'});
        }
      }
    }, [location]);
}
export default ScrollTo;