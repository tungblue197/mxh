import React, {FC, useMemo} from 'react'
import Image from 'next/image';
export interface IAvatarProps{
    source?: string;
    size?: number; 
    rounded?: boolean;
}

const defaultSource = '/static/images/empty-avatar.png'

const Avatar: FC<IAvatarProps> = ({ source = defaultSource, size = 30, rounded = false}) => {
    const getRouned = useMemo(() => rounded ? '50%': null , []);
    return (
        <div style={{ width: size, height: size, borderRadius: getRouned, overflow:'hidden' }}>
            <Image src={source}  width={size} height={size} />
        </div>
    )
}

export default Avatar
