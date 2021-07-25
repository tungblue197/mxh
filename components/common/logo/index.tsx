import React, { FC, useMemo } from 'react'
import style from './logo.module.scss';
export interface ILogoProps {
     size?: number;
     rounded?:  boolean;
}
const Logo: FC<ILogoProps> = ({ size = 40, rounded = false }) => {
    const getRoundedValue = useMemo(() => rounded ? '50%': null, [rounded])
    return (
        <div className={style.logoContainer} style={{ width: size, height:size, borderRadius:  getRoundedValue }}>
            
        </div>
    )
}

export default Logo
