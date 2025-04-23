import React, { JSX } from 'react';
import { useInterval } from '../hooks/user-interval';
import { SecondsToTime } from '../utils/second-to-time';

interface Props {
    defaultPomodoroTime: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);
    
    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);
    
    return <div>Olá Mundo! {SecondsToTime(mainTime)}</div>
}