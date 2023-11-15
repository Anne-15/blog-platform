"use client"
import React, { ReactNode, useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

interface PanelProps {
  title: string;
  jobTitle: string;
  date: string;
  children: ReactNode;
}

const Panel: React.FC<PanelProps> = ({ title, jobTitle, date, children }) => {
  const [isActive, setIsActive] = useState(false);

  const setToggleButton = () => {
    setIsActive(!isActive)
  }

  return (
    <section className="mb-10 mt-10 pb-8 shadow-2xl rounded-2xl">
      <div className='flex flex-row justify-between mx-36 mb-5 pt-10 mt-10' onClick={setToggleButton} style={{ cursor: 'pointer' }}>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <Image
        src={isActive ? '/down-arrow.svg' : '/up-arrow.svg'}
        width={30}
        height={30}
        alt={isActive ? 'up arrow' : 'down arrow'}
        />
      </div>
      {!isActive && (
        <div className='mx-60 scroll-pl-6 flex flex-col gap-10'>
          <div className='w-full h-fit rounded-xl shadow-xl p-5'>
            <h1 className='font-bold text-lg'>{jobTitle}</h1>
            <p className='mb-2 text-sm font-medium'>{date}</p>
            <p className='text-sm ml-2 mb-2'>{children}</p>
          </div>
        </div>
        
      )}
    </section>
  );
};

const About = () => {

  return (
    <>
        <Navbar/>
        <div className='container mx-auto'>
          <p>My porfolio page about me</p>
          {/* hero section */}
          <section className='flex flex-row justify-around'>
            <Image
            src={'/aboutme.jpg'}
            width={100}
            height={50}
            alt='my profile'
            className='rounded-full'
            />
            <div>
              <p>Section with words about me</p>
            </div>
          </section>

          {/* other things section */}
          <Panel title="Experience" jobTitle="SOFTWARE TEST ENGINEER I, TECHNO BRAIN GROUP" date="[June 2022 - April 2023]">
            Triaged daily customer feedback and collaborated with Microsoft to understand customer needs <br />
            Generated comprehensive daily, monthly, and quarterly review reports <br />
            Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
            Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
            Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for
                the process improvement. <br />
            Leveraged machine learning models and tools for identification and categorization of similar customer feedback. <br />
            Leveraged automation using Microsoft tools to streamline triaging processes of the customer feedback. <br />
          </Panel>
          <Panel title="Experience" jobTitle="SOFTWARE TEST ENGINEER I, TECHNO BRAIN GROUP" date="[June 2022 - April 2023]">
            Triaged daily customer feedback and collaborated with Microsoft to understand customer needs <br />
            Generated comprehensive daily, monthly, and quarterly review reports <br />
            Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
            Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
            Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for
                the process improvement. <br />
            Leveraged machine learning models and tools for identification and categorization of similar customer feedback. <br />
            Leveraged automation using Microsoft tools to streamline triaging processes of the customer feedback. <br />
          </Panel>
          
          {/* <section className='mb-10 mt-10 pb-8 shadow-2xl rounded-2xl'>
            <div className='flex flex-row justify-between mx-36 mb-5 pt-10 mt-10' onClick={handleToggleCollapse} style={{ cursor: 'pointer' }}>
              <h1 className='font-bold text-2xl'>Experience</h1>
              <Image
              src={dropDown ? '/down-arrow.svg' : '/up-arrow.svg'}
              width={30}
              height={30}
              alt={dropDown ? 'up arrow' : 'down arrow'}
              />
            </div>
            {!dropDown && (
              <div className='mx-60 scroll-pl-6 flex flex-col gap-10'>

                <div className='w-full h-fit rounded-xl shadow-xl p-5'>
                  <h1 className='font-bold text-lg'>SOFTWARE TEST ENGINEER I, TECHNO BRAIN GROUP</h1>
                  <p className='mb-2 text-sm font-medium'>[June 2022 - April 2023]</p>
                  <p className='text-sm ml-2 mb-2'>
                    Triaged daily customer feedback and collaborated with Microsoft to understand customer needs <br />
                    Generated comprehensive daily, monthly, and quarterly review reports <br />
                    Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
                    Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
                    Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for
                        the process improvement. <br />
                    Leveraged machine learning models and tools for identification and categorization of similar customer feedback. <br />
                    Leveraged automation using Microsoft tools to streamline triaging processes of the customer feedback. <br />
                  </p>
                  <p className='font-medium text-sm'>Skills: critical thinking, power bi, data analysis, powerpoint presentation, Automation</p>
                </div>

                <div className='w-full h-fit rounded-xl shadow-xl p-5'>
                  <h1 className='font-bold text-lg'>SOFTWARE TEST ENGINEER I, TECHNO BRAIN GROUP</h1>
                  <p className='mb-2 text-sm font-medium'>[June 2022 - April 2023]</p>
                  <ul className='text-sm ml-2 mb-2'>
                    <li>Triaged daily customer feedback and collaborated with Microsoft to understand customer needs</li>
                    <li>Generated comprehensive daily, monthly, and quarterly review reports</li>
                    <li>Created visually appealing Power BI dashboard reports for data presentation and reports automation.</li>
                    <li>Created visually appealing Power BI dashboard reports for data presentation and reports automation.</li>
                    <li>Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for
                        the process improvement.</li>
                    <li>Leveraged machine learning models and tools for identification and categorization of similar customer feedback..</li>
                    <li>Leveraged automation using Microsoft tools to streamline triaging processes of the customer feedback.</li>
                  </ul>
                  <p className='font-medium text-sm'>Skills: critical thinking, power bi, data analysis, powerpoint presentation, Automation</p>
                </div>

              </div>
            )}
          </section> */}

          
        </div>
        <Footer/>
    </>
  )
}

export default About