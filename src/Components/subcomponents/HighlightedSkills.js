import React from 'react';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default (props) => {

  const containerClass = props.val ? 'small-loader-container' : 'loader-container'
  const barClass = props.val ? 'small-loader' : 'loader'

  return (
    <div className='loader-container-parent'>
      {
        props.arr.map((skill,index) => {
          return(
            <div key={skill} className={containerClass}>
              <CircularProgressbarWithChildren
                background
                className={barClass}
                value={props.val ? props.val[index] : 0}
                styles={buildStyles({
                  backgroundColor: '#FFFFFF',
                  pathColor: 'rgba(253, 177, 177, 1)',
                  textColor: 'rgba(253, 177, 177, 1)',
                  trailColor: '#FFFFFF'
                })}
              >
                <span>{skill}</span>
              </CircularProgressbarWithChildren>
            </div>
          )
        })
      }
    </div>
  )
}
