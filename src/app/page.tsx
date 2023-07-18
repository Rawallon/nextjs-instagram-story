"use client";

import Media from '@/components/Media'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { storyData } from '@/data';
import Wrapper from '@/components/Progress/Wrapper';
import styles from './styles.module.css'

export default function Carrousel() {
  const autoSlideInterval = 1000
  const [currentStoryId, setCurrentStoryId] = useState(0)
  const [dateLastChanged, setDateLastChanged] = useState(Date.now())
  const [remainingTime, setRemainingTime] = useState(0)
  
  const currentProgressBarRef = useRef(null);
  const slideIntervalRef = useRef(null)
  const clickIntervalRef = useRef(null);
  const clickStartTimeRef = useRef(0);
  const barProgressIntervalRef = useRef(null);

  const handleMouseDown = () => {
    clearInterval(clickIntervalRef.current);
    clickStartTimeRef.current = performance.now();
    clickIntervalRef.current = setInterval(() => {
      const clickEndTime = performance.now();
      const clickDuration = clickEndTime - clickStartTimeRef.current;
      if (clickDuration > 200) {
        setRemainingTime(Date.now() - dateLastChanged)
        clearInterval(slideIntervalRef.current);
        clearInterval(clickIntervalRef.current)
        clearInterval(barProgressIntervalRef.current);
      }
    }, 200);
  };

  const handleMouseUp = () => {
    slideIntervalRef.current = setInterval(nextStory, remainingTime);
    console.log(remainingTime);
    clearInterval(clickIntervalRef.current);

    const startTime = Date.now();
    const initialPercentage = parseFloat(currentProgressBarRef.current.style.width);
    clearInterval(barProgressIntervalRef.current);
    barProgressIntervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      console.log(initialPercentage);
      
      const percentage =  ((elapsedTime / remainingTime) * (initialPercentage - 100) * -1) + initialPercentage;
      
      if (currentProgressBarRef.current) {
        currentProgressBarRef.current.style.width = `${percentage}%`;
      }

      if (elapsedTime >= remainingTime) {
        clearInterval(barProgressIntervalRef.current);
      }
    }, 10);
  };


  useEffect(() => {
    const startTime = Date.now();
    clearInterval(barProgressIntervalRef.current);
    barProgressIntervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const percentage = (elapsedTime / autoSlideInterval) * 100;
      if (currentProgressBarRef.current) {
        currentProgressBarRef.current.style.width = `${percentage}%`;
      }

      if (elapsedTime >= autoSlideInterval) {
        clearInterval(barProgressIntervalRef.current);
      }
    }, 10);
  }, [currentProgressBarRef, currentStoryId])
  
  
  const nextStory = () => {
    currentProgressBarRef.current.style.width = '100%';
    goToStory(currentStoryId === storyData.length - 1 ? storyData.length - 1 : currentStoryId + 1);
  };

  const previousStory = () => {
    currentProgressBarRef.current.style.width = '0%';
    goToStory(currentStoryId === 0 ? 0 : currentStoryId - 1);
  };

  const goToStory = (storyId) => {
    setCurrentStoryId(storyId);
  };

  useEffect(() => {
    setDateLastChanged(Date.now())
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(nextStory, autoSlideInterval);
  }, [currentStoryId]);


  
  return (
    <div >
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={styles.mainWrapper}>
        <Media mediaSources={storyData} activeSourceId={currentStoryId}/>
        <Wrapper length={storyData.length} activeBarId={currentStoryId}  activeBarRef={currentProgressBarRef} />
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={previousStory}>Prev</button>
        <button onClick={nextStory}>Next</button>
      </div>
    </div>
  )
}
