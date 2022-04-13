import { useCallback, useEffect } from "react";
/*================================================ // -----  --  -
/* useKeyPress is used to detect if certain keys are... pressed.
/* run function and it will listen while component is mounted then
/* then executes a function and stops listening when a key is pressed
/*=____________________________________________ ==// --- /*/

/*---------->
/* USAGE
/*===------------------// ---- / --- --  -
/* useKeyPress('enter', () => alert('enter pressed'))
/*===-----------------//-*/
export const useKeyPress = (targetKey, func) => {

  const downHandler = useCallback(({ key }) => key === targetKey && func(), [func, targetKey])

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [downHandler]);

  return true
}