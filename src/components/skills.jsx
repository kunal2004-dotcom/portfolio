import React from 'react';
import { LuHome,LuUser,LuLightbulb,LuLayers, LuPhone } from "react-icons/lu";
import bash from './icons/bash.svg';
import docker from './icons/docker.svg';
import k8s from './icons/kubernetes.svg';
import selenium from './icons/selenium.svg';
import tailwind from './icons/tailwind.svg';
import mongo from './icons/mongodb.svg';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';   
import Animation from './lottiefiles/skills.lottie'; 

const skills = () => {
return (
    <div className='md:p-22 md:pt-24 p-8 flex justify-between md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] md:mt-0 mt-6 pt-16'>
            <div className=''>
                    
                    <div>
                            <h1 className='font-poppins text-4xl font-medium'>My <span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Technical</span><br className='md:block hidden'/> Experience/<span className='md:hidden block'> </span><span>Skills.</span></h1>
                            <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
                            <br/>
                    </div>
                    <div className='md:w-6/12'>
                            <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                                    <LuLightbulb className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={22}/>
                                    <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Skills</span>
                            </div>
                    </div>
                    <div>
                            
                            <div>
                            <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2.5 md:mt-0 mt-2'>Languages</h1>
                            <img src='https://skillicons.dev/icons?i=c' alt="c" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                            <img src='https://skillicons.dev/icons?i=cpp' alt="c++" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                            <img src='https://skillicons.dev/icons?i=python&theme=dark' alt="python" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-1'/>
                            <img src='https://skillicons.dev/icons?i=java&theme=light' alt="java" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-1'/>
                            <img src='https://skillicons.dev/icons?i=mysql' alt="mysql" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                            </div>
                            <div>
                                    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2 md:mt-0 mt-2'>Others Skills</h1>
                                    <img src='https://skillicons.dev/icons?i=git' alt="git" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                                    <img src='https://skillicons.dev/icons?i=github' alt="github" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                                    <img src='https://skillicons.dev/icons?i=flask' alt="vim" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                                    <img src='https://skillicons.dev/icons?i=linux&theme=dark' alt="linux" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2'/>
                            </div>
                    </div>
                    <br/>
                    <div className='md:w-6/12'>
                            <div className='md:w-40 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                                    <LuLightbulb className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={22}/>
                                    <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Projects</span>
                            </div>
                    </div>
                    <div className='md:w-12/12 md:mt-10 '>
                    <ul className='list-disc pl-5'>
                            <li className='font-poppins text-justify'>I have done projects on data Analyatics <a href='https://github.com/kunal2004-dotcom/Car-price-prediction' className='text-blue-500 underline'>Car Price Prediction</a></li>

                            <li className='font-poppins text-justify'>I have a project on data analyatics with Ai&ml <a href='https://github.com/kunal2004-dotcom/WineQualityAnalyzer.git' className='text-blue-500 underline'>Wine Quality Analyzer</a></li>

                            <li className='font-poppins text-justify'>I have a project on data analyatics with ml<a href='https://github.com/kunal2004-dotcom/smart-crop-recommendation-system-.git' className='text-blue-500 underline'>Smart Crop Recommendation System</a></li>
                            <li className='font-poppins text-justify'>I have a project on data analyatics with AI<a href='https://github.com/kunal2004-dotcom/supply_chain.git' className='text-blue-500 underline'>Supply Chain Management</a></li>
                            <li className='font-poppins text-justify'>I have a project on Generative AI<a href='https://github.com/kunal2004-dotcom/Text-to-image.git' className='text-blue-500 underline'>Text to Image Generator</a></li>


                    </ul>
            </div>
            </div>
            
            <div className='hidden lg:block'>
                    <DotLottiePlayer
                            src={Animation}
                            autoplay
                            loop
                    >
                    </DotLottiePlayer>
            </div>
    </div>
    )
}
export default skills;
