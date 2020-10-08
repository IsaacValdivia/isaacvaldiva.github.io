import React from "react";
import "./ProgrammingData.css";

export const AUDIO_SLIDES = [
         {
           id: 1,
           body: (
             <div className="d-flex h-100 flex-column justify-content-start align-items-center">
               <div className="d-flex h-100 flex-column justify-content-between align-items-center text-justify fullDiv">
                 <div className="h-100">
                   <h5 className="headerResponsive text-center">
                     Android application to reproduce music based on the user's emotions
                   </h5>
                   <p className="bodyResponsive">
                     One of my biggest projects so far was developing an intelligent environment that automatically
                     recommends and plays music from Spotify based on the user's emotions, alongside researchers from
                     University of Zaragoza.
                   </p>
                 </div>
                 <div className="d-flex h-100 w-100 flex-column justify-content-center align-items-center videoContainer">
                   <iframe
                     id="videoItself1"
                     altText="Demo video of the application"
                     width="560"
                     height="315"
                     src="https://www.youtube.com/embed/SMTIy1APUE0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen="true"
                     webkitallowfullscreen="true"
                     mozallowfullscreen="true"
                   ></iframe>
                 </div>
                 <p className="bodyResponsive underText">
                   <ol>
                     <li>The user of this system wears an electronic wristband —Empatica E4— throughout the day.</li>
                     <li>
                       The wristband continuously measures their physiological signals and sends them to an application
                       installed on the user's personal phone.
                     </li>
                     <li>
                       The application processes these measurements periodically to predict and store the user's
                       emotional states.
                     </li>
                     <li>
                       Their emotional states are then used to decide, at each moment, the most pleasant and
                       satisfactory kind of music to play for the user.
                     </li>
                     <li>
                       The application communicates its decisions to an Amazon Echo speaker, by synthesising a voice
                       command.
                     </li>
                     <li>
                       Finally, the Amazon Echo speaker obeys the command and reproduces music from Spotify, adapted to
                       the user's current emotions and musical preferences.
                     </li>
                   </ol>
                   <hr id="sep1" />
                   The source code of the project is kept private, as it belongs to an ongoing research line. The
                   application was built entirely with native Java code, and used Python + SciKit-learn for emotion
                   classification.
                 </p>
               </div>
             </div>
           )
         }
       ];

export const VIDEOGAME_SLIDES = [
         {
           id: 2,
           body: (
             <div className="d-flex h-100 flex-column justify-content-start align-items-center">
               <div className="d-flex h-100 flex-column justify-content-between align-items-center text-justify fullDiv">
                 <div className="h-100">
                   <h5 className="headerResponsive text-center">Burgertime C++/SFML clone</h5>
                   <p className="bodyResponsive">
                     An implementation of the classic arcade originally released by Data East in 1982. It features 2 new
                     difficulty modes that make use of optimal path-finding and swarming techniques, new audio assets
                     and customizable maps (and an a**-kicking trailer in Spanish :D).
                     <hr id="sep2"/>
                     Code in Github @ <a href="https://github.com/IsaacValdivia/burgertime">IsaacValdivia/burgertime</a>
                   </p>
                 </div>
                 <div className="d-flex h-100 w-100 flex-column justify-content-center align-items-center videoContainer">
                   <iframe
                     id="videoItself2"
                     altText="Demo video of the application"
                     width="560"
                     height="315"
                     src="https://www.youtube.com/embed/Z7LHLflR5wE"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen="true"
                     webkitallowfullscreen="true"
                     mozallowfullscreen="true"
                   ></iframe>
                 </div>
               </div>
             </div>
           )
         }
       ];