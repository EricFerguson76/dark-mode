import useLocalStorage from '../hooks/useLocalStorage'
import { useEffect } from 'react'



const userDarkMode  = (key, initialValue) =>{
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (someValue){
            document.body.add('dark-mode')
        }else{
            document.body.remove('dark-mode')
        }
    }, [someValue]);

    return[someValue, setSomeValue];
}

export default userDarkMode;