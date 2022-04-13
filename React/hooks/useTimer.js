/*================================================ // -----  --  -
/* useTimer takes takes a time dur to wait, then runs a function
/*=____________________________________________ ==// --- /*/

/*---------->
/* USAGE
/*===------------------// ---- / --- --  -
/* useTimer(500, () => alert('time is up'))
/*===-----------------//-*/
export const timer = (dur, func) => {
  const timer = setTimeout(() => func(), dur)
  return () => clearTimeout(timer)
}