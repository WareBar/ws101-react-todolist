import { useEffect, useState } from "react"

const Time = () => {
    const [time, setTime] = useState('')
    
    useEffect(()=>{
        setInterval(()=>{
            const dateObject = new Date();
            const currentTime = `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
            setTime(currentTime)
        }, 1000)
    }, [])

    
    return (
        <>
        {time}
        </>
    )
}

export default Time;