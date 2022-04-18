export const uistyls = ({

  // styled-compnent props
  as, theme,

  // border
  brd, brdc, brdl, brdr, brdrc, brdbc, brdlc, brdw, nobrd, brdb, brdstyl, brdt, brdtc, outlined, underlined, dashed,

  // background
  bg, bgc, bgi, bgs, bgp, nobgc, nobg, cover, contain, bgr, norepeat,

  // radius
  rad, rounded, squared, norad, radt, radb, radtl, radtr, radbl, radbr, radr, radl,

  // text
  fnt, c, fntwt, upcase, caps, txtdeco, txtc, txtl, txtr, fam, bold, ellips, txtunderline, txtlh,

  // size
  fullh, fullw, fullvw, fullvh, hauto, full, fullv, hmin, hmax, wauto, wmaxauto, wmin, wminfull, hmaxfull, wmax, w, h,

  // grid
  g, gtr, gtc, gaf, gta, ga, gar, gac, gc, gr,

  // flex
  f, fdc, fjc, fai, fjcc, faic, fc, fdr, fw, f0, f1, f2, f3, f4, f5, middle, base,

  // cursor
  point, arrow, curs,

  // spacing
  gg, p, nop, nom, nogg, pb, pt, pr, pl, m, mb, mt, mr, ml,

  // transition
  transf, transi, del, dur, transit,

  // position
  abs, rela, tp, bt, rt, lt, z, zi,

  // view
  noover, scrollx, scrolly, opac, block, inline, hide, disp,

  //outline 
  outc, outw, outs,

  // effects
  boxshad

}) => ({

  // display
  display: hide
    ? 'none'
    : (gta || gar || gac || gtr || gtc || gaf || g)
      ? 'grid'
      : (f || fdc || fdr)
        ? 'flex'
        : block
          ? 'block'
          : inline
            ? 'inline-block' :
            disp,

  // border
  border: nobrd ? 0 : brd,
  borderWidth: nobrd ? 0 : (outlined || dashed) ? '1px' : underlined ? '0 0 1px 0' : brdw,
  borderTop: brdt,
  borderRight: brdr,
  borderBottom: brdb,
  borderLeft: brdl,
  borderStyle: (outlined || underlined) ? 'solid' : dashed ? 'dashed' : brdstyl,
  borderTopColor: (theme.colors[brdtc] || brdtc),
  borderColor: (theme.colors[dashed] || theme.colors[outlined] || theme.colors[brdc] || outlined || brdc),
  borderBottomColor: underlined ? (theme.colors[underlined] || underlined) : (theme.colors[brdbc] || brdbc),
  borderLeftColor: (theme.colors[brdlc] || brdlc),
  borderRightColor: (theme.colors[brdrc] || brdrc),


  // background
  backgroundColor: nobgc ? `transparent` : (theme.colors[bgc] || bgc),
  background: nobg ? `transparent` : (theme.colors[bg] || bg),
  backgroundImage: bgi && `url(${bgi})`,
  backgroundPosition: bgp,
  backgroundSize: cover ? 'cover' : contain ? 'contain' : bgs,
  backgroundRepeat: norepeat ? 'no-repeat' : bgr,

  // radius
  borderRadius: (squared || norad) ? 0 : rounded ? (theme.border.radius.base || rounded) : (theme.border.radius[rad] || rad),
  borderTopLeftRadius: (squared || norad) ? 0 : (theme.border.radius[radt] || radt) || (theme.border.radius[radl] || radl) || (theme.border.radius[radtl] || radtl),
  borderTopRightRadius: (squared || norad) ? 0 : (theme.border.radius[radt] || radt) || (theme.border.radius[radr] || radr) || (theme.border.radius[radtr] || radtr),
  borderBottomLeftRadius: (squared || norad) ? 0 : (theme.border.radius[radb] || radb) || (theme.border.radius[radl] || radl) || (theme.border.radius[radbl] || radbl),
  borderBottomRightRadius: (squared || norad) ? 0 : (theme.border.radius[radb] || radb) || (theme.border.radius[radr] || radr) || (theme.border.radius[radbr] || radbr),

  // text
  color: (theme.colors[c] || c),
  fontWeight: fntwt ? fntwt : bold && 'bold',
  textTransform: upcase ? `uppercase` : caps && `capitalize`,
  textDecoration: as === 'a' ? 'none' : txtdeco ? txtdeco : txtunderline && 'underline',
  fontSize: (theme.font[fnt] || fnt),
  fontFamily: (theme.font.family[fam] || fam),
  textAlign: txtc ? 'center' : txtl ? 'left' : txtr && 'right',
  textOverflow: ellips && 'ellipsis',
  lineHeight: txtlh,

  // size
  width: w ? w : (fullw || full) ? `100%` : (fullvw || fullv) ? `100vw` : wauto && `auto`,
  minWidth: wminfull ? `100%` : wmin && wmin,
  maxWidth: wmax || wmaxauto,
  height: (fullh || full) ? `100%` : (fullvh || fullv) ? `100vh` : hauto ? `auto` : h,
  minHeight: hmin,
  maxHeight: hmaxfull ? `100%` : hmax && hmax,

  // grid
  gridTemplateRows: gtr,
  gridTemplateColumns: gtc,
  gridAutoFlow: gaf,
  gridAutoRows: gar,
  gridTemplateAreas: gta,
  gridArea: ga,
  gridColumn: gc,
  gridRow: gr,

  // flex
  flexDirection: (fdc || (f && fc)) ? 'column' : fdr && 'row',
  justifyContent: (fjcc || fc || middle) ? `center` : fjc,
  alignItems: (faic || fc || middle) ? 'center' : base ? 'flex-end' : fai,
  flexGrow: f0 ? 0 : f1 ? 1 : f2 ? 2 : f3 ? 3 : f4 ? 4 : f5 && 5,
  flexWrap: fw === true ? 'wrap' : fw,

  // cursor
  cursor: point ? 'pointer' : arrow ? 'arrow' : curs && curs,

  // spacing
  gridGap: nogg ? 0 : (theme.padding[gg] || gg),
  margin: (as === `ul` || nom) ? 0 : wmaxauto ? '0 auto' : (theme.padding[m] || m),
  marginBottom: (theme.padding[mb] || mb),
  marginLeft: (theme.padding[ml] || ml),
  marginTop: (theme.padding[mt] || mt),
  marginRight: (theme.padding[mr] || mr),
  padding: nop ? '0' : (theme.padding[p] || p),
  paddingBottom: (theme.padding[pb] || pb),
  paddingLeft: (theme.padding[pl] || pl),
  paddingTop: (theme.padding[pt] || pt),
  paddingRight: (theme.padding[pr] || pr),

  // animation
  transform: transf,
  transition: (!dur && !del) && transi,
  transitionProperty: (dur || del) && transi,
  //animationDelay: !transi && del && del,
  transitionDelay: del && `${del}ms`,
  transitionDuration: dur && `${dur}ms`,
  transitionTimingFunction: (del || dur) && !transit ? 'ease' : transit,

  // position
  position: (abs || fullv) ? `absolute` : rela && `relative`,
  top: (theme.padding[tp] || tp),//fullv ? 0 : tp ? neg ? `-${(theme.padding[tp] || tp)}` : (theme.padding[tp] || tp) : false,
  bottom: (theme.padding[bt] || bt),//bt ? neg ? `-${(theme.padding[bt] || bt)}` : (theme.padding[bt] || bt) : false,
  right: (theme.padding[rt] || rt),//rt ? neg ? `-${(theme.padding[rt] || rt)}` : (theme.padding[rt] || rt) : false,
  left: (theme.padding[lt] || lt), //fullv? 0: lt ? neg ? `-${(theme.padding[lt] || lt)}` : (theme.padding[lt] || lt) : false,

  // view
  overflow: (noover || ellips) && 'hidden',
  overflowX: scrolly ? 'hidden' : scrollx && 'auto',
  overflowY: scrollx ? 'hidden' : scrolly && 'auto',
  opacity: opac,
  whiteSpace: ellips && 'nowrap',
  zIndex: (z || zi),

  // list
  listStyle: (as === `li` || as === `ul`) && `none`,

  // outline
  outlineColor: outc,
  outlineWidth: outw,
  outlineStyle: outs,

  // effects
  boxShadow: boxshad

})

export const runall = props => uistyls(props)