import { useEffect } from "react"
/*================================================ // -----  --  -
/* useClickOutside is used to detect a click or tap outside an active element
/* and runs function
/*____________________________________________==// --- /*/
/*
/* !!! REQUIRES ref !!!
/*---------->
/* USAGE
/*===------------------// ---- / --- --  -
/* const ref = useRef()
/* return ( <div ref={ref}>target</div> )
/*===-----------------//-*/
export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    // listen for event and target and return function
    const listener = e => (!ref.current || ref.current.contains(e.target)) ? true : handler(e)
    // listen for click
    document.addEventListener("mousedown", listener)
    // listen for touch
    document.addEventListener("touchstart", listener)
    // clean up removes listeners
    return () => { document.removeEventListener("mousedown", listener), document.removeEventListener("touchstart", listener) }
  }, [ref, handler])
}