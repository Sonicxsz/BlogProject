import {useEffect} from 'react'

function useOutSideClick(elementRef:React.MutableRefObject<HTMLDivElement | null>, handler: () => void, attached = true){

    
    useEffect(() =>{
        if(!attached)return;
        const handleClick = (e:any): void =>{
            if(!elementRef.current) return;
            if(!elementRef.current.contains(e.target)){
                handler()
            }
        }   
        document.addEventListener('click', handleClick)
        return () =>{
            document.removeEventListener('click', handleClick)
        }
    }, [elementRef, handler, attached])
}

export default useOutSideClick