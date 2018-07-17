'use strict'

var c = require('./constants')

module.exports = [
  {
    type: c.TYPE_COPPER,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'cmp', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'top', cad: [c._CAD_EAGLE_LEGACY, c._CAD_ORCAD]},
      {ext: 'gtl', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'toplayer\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /top\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /f[._]cu/, cad: c._CAD_KICAD},
      {match: /copper_top/, cad: c._CAD_EAGLE},
      {match: /top copper/, cad: null}
    ]
  },
  {
    type: c.TYPE_SOLDERMASK,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'stc', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'tsm', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gts', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'smt', cad: c._CAD_ORCAD},
      {ext: 'topsoldermask\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /topmask\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /f[._]mask/, cad: c._CAD_KICAD},
      {match: /soldermask_top/, cad: c._CAD_EAGLE},
      {match: /top solder resist/, cad: null}
    ]
  },
  {
    type: c.TYPE_SILKSCREEN,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'plc', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'tsk', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gto', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'sst', cad: c._CAD_ORCAD},
      {ext: 'topsilkscreen\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /topsilk\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /f[._]silks/, cad: c._CAD_KICAD},
      {match: /silkscreen_top/, cad: c._CAD_EAGLE},
      {match: /top silk screen/, cad: null}
    ]
  },
  {
    type: c.TYPE_SOLDERPASTE,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'crc', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'tsp', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gtp', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'spt', cad: c._CAD_ORCAD},
      {ext: 'tcream\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /toppaste\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /f[._]paste/, cad: c._CAD_KICAD},
      {match: /solderpaste_top/, cad: c._CAD_EAGLE}
    ]
  },
  {
    type: c.TYPE_COPPER,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'sol', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'bot', cad: [c._CAD_EAGLE_LEGACY, c._CAD_ORCAD]},
      {ext: 'gbl', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'bottomlayer\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /bottom\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /b[._]cu/, cad: c._CAD_KICAD},
      {match: /copper_bottom/, cad: c._CAD_EAGLE},
      {match: /bottom copper/, cad: null}
    ]
  },
  {
    type: c.TYPE_SOLDERMASK,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'sts', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'bsm', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gbs', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'smb', cad: c._CAD_ORCAD},
      {ext: 'bottomsoldermask\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /bottommask\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /b[._]mask/, cad: c._CAD_KICAD},
      {match: /soldermask_bottom/, cad: c._CAD_EAGLE},
      {match: /bottom solder resist/, cad: null}
    ]
  },
  {
    type: c.TYPE_SILKSCREEN,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'pls', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'bsk', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gbo', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'ssb', cad: c._CAD_ORCAD},
      {ext: 'bottomsilkscreen\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /bottomsilk\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /b[._]silks/, cad: c._CAD_KICAD},
      {match: /silkscreen_bottom/, cad: c._CAD_EAGLE},
      {match: /bottom silk screen/, cad: null}
    ]
  },
  {
    type: c.TYPE_SOLDERPASTE,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'crs', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'bsp', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gbp', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'spb', cad: c._CAD_ORCAD},
      {ext: 'bcream\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /bottompaste\.\w+$/, cad: [c._CAD_GEDA_PCB, c._CAD_DIPTRACE]},
      {match: /b[._]paste/, cad: c._CAD_KICAD},
      {match: /solderpaste_bottom/, cad: c._CAD_EAGLE}
    ]
  },
  {
    type: c.TYPE_COPPER,
    side: c.SIDE_INNER,
    matchers: [
      {ext: 'ly\\d+', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gp?\\d+', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'in\\d+', cad: c._CAD_ORCAD},
      {ext: 'internalplane\\d+\\.ger', cad: c._CAD_EAGLE_OSHPARK},
      {match: /in(?:ner)?\d+[._]cu/, cad: c._CAD_KICAD}
    ]
  },
  {
    type: c.TYPE_OUTLINE,
    side: c.SIDE_ALL,
    matchers: [
      {ext: 'dim', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'mil', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gml', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'gm\\d+', cad: [c._CAD_KICAD, c._CAD_ALTIUM]},
      {ext: 'gko', cad: c._CAD_ALTIUM},
      {ext: 'fab', cad: c._CAD_ORCAD},
      {ext: 'outline\\.gbr', cad: c._CAD_GEDA_PCB},
      {match: /boardoutline/, cad: [c._CAD_EAGLE_OSHPARK, c._CAD_DIPTRACE]},
      {match: /edge[._]cuts/, cad: c._CAD_KICAD},
      {match: /profile/, cad: c._CAD_EAGLE},
      {match: /mechanical \d+/, cad: null}
    ]
  },
  {
    type: c.TYPE_DRILL,
    side: c.SIDE_ALL,
    matchers: [
      {ext: 'txt', cad: [c._CAD_EAGLE_LEGACY, c._CAD_ALTIUM]},
      {
        ext: 'xln',
        cad: [c._CAD_EAGLE, c._CAD_EAGLE_LEGACY, c._CAD_EAGLE_OSHPARK]
      },
      {ext: 'exc', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'drd', cad: c._CAD_EAGLE_LEGACY},
      {ext: 'drl', cad: [c._CAD_KICAD, c._CAD_DIPTRACE]},
      {ext: 'tap', cad: c._CAD_ORCAD},
      {ext: 'fab\\.gbr', cad: c._CAD_GEDA_PCB},
      {ext: 'plated-drill\\.cnc', cad: c._CAD_GEDA_PCB},
      {match: /npth/, cad: c._CAD_KICAD}
    ]
  },
  {
    type: c.TYPE_DRAWING,
    side: null,
    matchers: [
      {ext: 'pos', cad: c._CAD_KICAD},
      {ext: 'gbr', cad: null},
      {ext: 'ger', cad: null},
      {ext: 'pho', cad: null}
    ]
  }
]
