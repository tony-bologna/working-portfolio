import React from "react";
import { TopNav, NavLink }
    from "./Navbar";
import waterlogo from "../assets/water-logo.mp4";

const Navbar = () => {

    // ######### HIDES MENU WHEN SCROLL....DOES NOT WORK LOL ##############################
    // function runOnScroll() {
    //     // ***** PRINTS SCROLL POSITION **** console.log(scrollPosition)
    //     // var delta =5 ;
    //     // if (Math.abs(lastScrollTop — st) <= delta)
    //     //     return;
    // ****** GETS SCROLL POSITION USING HOOK*******
    //     var scrollPosition = useScrollPosition();
    //     var prevScroll=0;
    //     var element =  document.getElementById('top');
    //     if (typeof(element) != 'undefined' && element != null) {

    //         if (scrollPosition < prevScroll) {
    //             element.style.top='-80px';
    //             console.log('hide' + prevScroll + "scrollstop" + scrollPosition )
    //          }

    //         else {
    //                 element.style.top='0';
    //                 console.log('show')
    //          }           
    //          prevScroll= scrollPosition;
    //          console.log('Prevscroll : ' + prevScroll + ' Scroll Position : ' + scrollPosition)
    //     }
    // }
    //#################### RUNONSCROLL END #########################

    function closeSide() {
        //UN and CHECKS CHECKBOX TO HIDE MENU
        // eslint-disable-next-line
        if (document.getElementById('my-drawer-2').checked = false) {
            document.getElementById('my-drawer-2').checked = true;

        }
        // eslint-disable-next-line
        else if (document.getElementById('my-drawer-2').checked = true) {
            document.getElementById('my-drawer-2').checked = false;
        }
    }
    // ************ATTEMPT AT FLIPPING MENU SCREEN TO SAY MENU/EXIT USING CHECKBOX MANIPLUATION**************************
    // function runSwap () {
    //     closeSide();

    //     if (document.getElementById('swappa').checked=true) {
    //         document.getElementById('swappa').checked=false;
    //     }
    //     else if (document.getElementById('swappa').checked=false) {
    //         document.getElementById('swappa').checked=true;
    //     }
    // }
    // ************ RUNSWAP END **************************


    function aboutScroll() {
        document.getElementById('about').scrollIntoView({ block: "end" });
        closeSide()
    }
    function educationScroll() {
        document.getElementById('education').scrollIntoView({ block: "end" });
        closeSide()
    }
    function workScroll() {
        document.getElementById('work').scrollIntoView({ block: "end" });
        closeSide()
    }
    function skillsScroll() {
        document.getElementById('skills').scrollIntoView({ block: "end" });
        closeSide()
    }
    function projectsScroll() {
        document.getElementById('projects').scrollIntoView({ block: "end" });
        closeSide()
    }
    function contactScroll() {
        document.getElementById('contact').scrollIntoView({ block: "end" });
        closeSide()
    }

    return (

        <TopNav className='drawer lg:drawer-open lg:w-[100%]' >

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content p-4 lg:hidden">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className=" lg:hidden text-[#808080] hover:text-[#4d4dff] text-4xl position-sticky cursor-pointer drawer-button tracking-[1rem] ">

                    MENU

                    {/* **ATTEMPT TO IMPLEMENT SWAP IN MENU*****  */}
                    {/* <label id= 'swappa' className=" z-[100] swap swap-flip"> */}
                    {/* this hidden checkbox controls the state */}
                    {/* <input  type="checkbox" />
          <div className="swap-on"  >😈</div>
          <div className="swap-off">😇</div>
          </label> */}

                </label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu min-h-screen bg-[#ffb3fffc] w-[100%]">
                    {/* Sidebar content here */}
                    <video src={waterlogo} autoPlay loop muted className="hidden lg:inline lg:visible lg:p-[.5rem] lg:mb-2" />
                    <NavLink className='visible lg:hidden overflow-visible text-4xl leading-[3rem] mt-[1%] tracking-[1rem] text-center' onClick={closeSide}>
                        EXIT
                    </NavLink>
                    {/* Literally just the line   */}
                    <svg viewBox="0 0 150 3" xmlns="http://www.w3.org/2000/svg" className="lg:hidden" >
                        <line x1="1" y1="1" x2="149" y2="1" stroke="#808080" strokeWidth="1" strokeLinecap="round" /> 
                    </svg>

                    <NavLink to="/about " className="text-4xl text-center my-[10%] tracking-[1rem] break-all md:text-2xl md:my-[8%] lg:tracking-normal lg:break-normal lg:text-2xl lg:my-[15%]" onClick={aboutScroll}>
                        About
                    </NavLink>
                    <NavLink to="/skills" className="text-4xl text-center my-[10%] tracking-[1rem] break-all md:text-2xl md:my-[8%] lg:tracking-normal lg:break-normal lg:text-2xl lg:my-[15%] " onClick={skillsScroll} >
                        Skills
                    </NavLink>
                    <NavLink to="/projects&activities" className="text-4xl text-center my-[10%] tracking-[.5rem] break-all md:text-2xl md:my-[8%] lg:tracking-normal lg:break-normal lg:text-2xl lg:my-[15%] " onClick={projectsScroll} >
                        Projects<span className="hidden lg:inline"> / Activities</span>
                    </NavLink>
                    <NavLink to="/workexperience" className="text-4xl text-center my-[10%] tracking-[1rem] break-all md:text-2xl md:my-[8%] lg:tracking-normal lg:break-normal lg:text-2xl lg:my-[15%] " onClick={workScroll}>
                        Work <span className="hidden lg:inline"> Experience</span>
                    </NavLink> 
                    <NavLink to="/education" className="text-4xl text-center my-[10%] tracking-[.5rem] break-all md:text-2xl md:my-[8%] lg:tracking-normal lg:break-normal lg:text-2xl lg:my-[15%] " onClick={educationScroll}>
                        Education
                    </NavLink>
                    <NavLink to="/contact" className="text-4xl text-center my-[10%] tracking-[1rem] break-all md:text-2xl md:my-[8%] lg:tracking-normal lg:break-normal lg:text-2xl lg:my-[15%]" onClick={contactScroll} >
                        Contact <span className="hidden lg:inline"> / Socials</span>
                    </NavLink>

                </ul>
            </div>

        </TopNav>


        // ####### OLD NAVBAR ##########
        //  <TopNav>

        //  <video src= {waterlogo} autoPlay loop muted className="invisible lg:visible lg:p-[.5rem] lg:mb-2 lg:w-[30vh]"/>

        //   <NavLink to="/about " onClick={() => document.getElementById("about").scrollIntoView({ block: "end" })}  activeStyle>
        //    About
        //   </NavLink>
        //   <NavLink to="/education" onClick={() => document.getElementById("education").scrollIntoView({ block: "end" })} activeStyle>
        //    Education
        //   </NavLink>
        //   <NavLink to="/workexperience" onClick={() => document.getElementById("work").scrollIntoView({ block: "end" })} activeStyle>
        //    Work Experience
        //   </NavLink>
        //   <NavLink to="/skills" onClick={() => document.getElementById("skills").scrollIntoView()} activeStyle>
        //    Skills
        //   </NavLink>
        //   <NavLink to="/projects&activities" onClick={() => document.getElementById("projects").scrollIntoView()} activeStyle>
        //    Projects and Activities
        //   </NavLink>
        //   <NavLink className ="lg:mb-36" to="/contact" onClick={() => document.getElementById("contact").scrollIntoView()} activeStyle>
        //    Contact
        //   </NavLink>

        //  </TopNav>

    );


}


export default Navbar;