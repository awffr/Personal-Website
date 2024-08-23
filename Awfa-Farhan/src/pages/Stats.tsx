import React from 'react';
import Header from '../components/Header';
import GitHubCalendar from 'react-github-calendar';

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const selectLastHalfYear = (contributions: Array<Activity>): Array<Activity> => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 7;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const Stats: React.FC = () => {
  return (
    <div className="bg-[#08090A] min-h-screen flex flex-col relative overflow-clip">
      <Header/>

      <div className="h-full mt-32 flex flex-col flex-grow justify-start items-center text-[#CECECE]">
        <div className='flex flex-items gap-4'>
          <img 
            src='/logo-github.svg'
            alt='Github logo'
            className="w-10 h-10"
          />
          <h2 className="font-semibold text-3xl text-white">
            Contributions
          </h2>                
        </div>
        <p className="mt-9 mb-24 font-regular text-base leading-7 text-[#959595] text-center">
        My contributions from the last few months on github <br></br>— hmm.. not much :P
        </p>

        <GitHubCalendar 
          username="awffr" 
          transformData={selectLastHalfYear} 
          labels={{
            totalCount: '{{count}} public repository contributions',
          }}
        />
        
      </div>
    </div>
  );
};

export default Stats;
