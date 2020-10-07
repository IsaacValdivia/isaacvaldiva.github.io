import React from "react";
import "./ProgrammingData.css";
import { Jumbotron } from "reactstrap";

export const AUDIO_MUSIC_SLIDES = [
         {
           id: 1,
           body: (
             <div className="d-flex flex-row justify-content-center text-justify textDiv">
               <div className="myJumbotron">
                 <h5 className="headerResponsive">Android application to play music based on the user's emotions</h5>
                 <p className="bodyResponsive">
                   One of my biggest projects so far was developing an intelligent environment that automatically
                   recommends and plays music from Spotify based on the user's emotions, alongside researchers from
                   University of Zaragoza.
                 </p>
                 <p className="bodyResponsive">
                   The user of this system wears an electronic wristband —Empatica E4— throughout the day. The wristband
                   continuously measures their physiological signals and sends them to an application installed on the
                   user's personal phone. The application processes these measurements periodically to
                   predict the user's emotional state and determine the most opportune and satisfactory kind of music to play.

                   The result of this processing is communicated to an Amazon Echo speaker by means of a voice command synthesised by the application.
                 </p>
               </div>
             </div>
           )
         }
       ];
