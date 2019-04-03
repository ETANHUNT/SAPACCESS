module.exports = {
  LISTTEXT: 'SAP Query 12.03.2019/11:56:27 SRW5',
  LIST_ID: 'G00',
  PROGRAM: 'AQZZSTOCKRM=====ZWSC_TEST=====',
  USED_VARIANT: 'STANDARD',
  DATA_TO_MEMORY: 'X',
  DBACC: 0,
  EXTERNAL_PRESENTATION: 'Z',
  QUERY: 'ZWSC_TEST',
  SKIP_SELSCREEN: 'X',
  USERGROUP: 'STOCKRM',
  VARIANT: '',
  WORKSPACE: 'G',
  FPAIRS: [{ INDEX_A: '0001', INDEX_U: '0002', TYPE: 'W' }],
  LDATA:
    [{
      LINE:
        '005:36.00,003:THB,010:6ZUR0060AB,000:,004:1000;005:36.00,003:THB,010:6ZUR0060AB,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060BL,000:,004:1000;005:30.00,003:THB,010:6ZUR0060BL,002:01,004:1000;004:1.00,003:THB,010:6ZUR0060BO,000:,004:1000;005:30.02,003:THB,010:6ZUR0060BO,002:01,004:1000;004:1.00,003:THB,010:6ZUR0060BO,002:03,004:1000;005:30.00,003:THB,010:6ZUR0060CR,000:,004:1000;005:30.00,003:THB,010:6ZUR0060CR,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060CR,000:,004:2100;005:30.00,003:THB,010:6ZUR0060HP,000:,004:1000;005:30.00,003:THB,010:6ZUR0060HP,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060HP,000:,004:2100;005:30.00,003:THB,010:6ZUR0060HP,000:,004:2200;005:30.00,003:THB,010:6ZUR0060IC,000:,004:1000;005:30.00,003:THB,010:6ZUR0060IC,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060LL,000:,004:1000;005:30.00,003:THB,010:6ZUR0060LL,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060LT,000:,004:1000;005:30.00,003:THB,010:6ZUR0060LT,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060ME,000:,004:1000;005:30.00,003:THB,'
    },
    {
      LINE:
        '010:6ZUR0060ME,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060NN,000:,004:1000;005:30.00,003:THB,010:6ZUR0060NN,002:01,004:1000;005:30.00,003:THB,010:6ZUR0060OT,000:,004:1000;005:30.00,003:THB,010:6ZUR0060OT,002:01,004:1000;005:30.00,003:THB,011:6ZUR0060OT2,000:,004:1000;005:30.00,003:THB,011:6ZUR0060OT2,002:01,004:1000;005:30.00,003:THB,011:6ZUR0060OT2,000:,004:2100;/'
    }],
  LISTDESC:
    [{
      LID: 'G00',
      FPOS: '01',
      FCONT: '0',
      FCURPOS: '002',
      FGRAF: '',
      FTYP: 'P',
      FLEN: '006',
      FDEC: '02',
      FOLEN: '015',
      FCUR: 'F',
      FADD: '',
      FDESC: 'Moving average price/periodic unit price',
      FNAME: 'MBEWV-VERPR',
      FCOL: 'MovAvgPrice',
      FNAMENEW: 'MBEWV-VERPR',
      FNAMEINT: 'MBEWV-VERPR',
      FKEY: '',
      FGTYP: '',
      FNZERO: '',
      FSUM: '',
      FSONLY: '',
      FSORT: '00',
      FSODS: '',
      FSUBT: '',
      FLPOS: '0001',
      FNUMB: '10',
      FNUMBT: 'MBEW',
      FNOSUM: '',
      FSONP: ''
    },
    {
      LID: 'G00',
      FPOS: '02',
      FCONT: '0',
      FCURPOS: '000',
      FGRAF: '',
      FTYP: 'C',
      FLEN: '005',
      FDEC: '00',
      FOLEN: '005',
      FCUR: 'W',
      FADD: '',
      FDESC: 'Currency key',
      FNAME: 'T001-WAERS',
      FCOL: 'Curr.',
      FNAMENEW: 'T001-WAERS',
      FNAMEINT: 'T001-WAERS-0101',
      FKEY: '',
      FGTYP: '',
      FNZERO: '',
      FSUM: '',
      FSONLY: '',
      FSORT: '00',
      FSODS: '',
      FSUBT: '',
      FLPOS: '0002',
      FNUMB: '10',
      FNUMBT: 'MBEW',
      FNOSUM: '',
      FSONP: ''
    },
    {
      LID: 'G00',
      FPOS: '03',
      FCONT: '0',
      FCURPOS: '000',
      FGRAF: 'X',
      FTYP: 'C',
      FLEN: '018',
      FDEC: '00',
      FOLEN: '018',
      FCUR: '',
      FADD: '',
      FDESC: 'Material number',
      FNAME: 'MBEWV-MATNR',
      FCOL: 'Material',
      FNAMENEW: 'MBEWV-MATNR',
      FNAMEINT: 'MBEWV-MATNR',
      FKEY: '',
      FGTYP: '',
      FNZERO: '',
      FSUM: '',
      FSONLY: '',
      FSORT: '00',
      FSODS: '',
      FSUBT: '',
      FLPOS: '0003',
      FNUMB: '10',
      FNUMBT: 'MBEW',
      FNOSUM: '',
      FSONP: ''
    },
    {
      LID: 'G00',
      FPOS: '04',
      FCONT: '0',
      FCURPOS: '000',
      FGRAF: 'X',
      FTYP: 'C',
      FLEN: '010',
      FDEC: '00',
      FOLEN: '010',
      FCUR: '',
      FADD: '',
      FDESC: 'Valuation type',
      FNAME: 'MBEWV-BWTAR',
      FCOL: 'Val. type',
      FNAMENEW: 'MBEWV-BWTAR',
      FNAMEINT: 'MBEWV-BWTAR',
      FKEY: '',
      FGTYP: '',
      FNZERO: '',
      FSUM: '',
      FSONLY: '',
      FSORT: '00',
      FSODS: '',
      FSUBT: '',
      FLPOS: '0004',
      FNUMB: '10',
      FNUMBT: 'MBEW',
      FNOSUM: '',
      FSONP: ''
    },
    {
      LID: 'G00',
      FPOS: '05',
      FCONT: '0',
      FCURPOS: '000',
      FGRAF: 'X',
      FTYP: 'C',
      FLEN: '004',
      FDEC: '00',
      FOLEN: '004',
      FCUR: '',
      FADD: '',
      FDESC: 'Valuation area',
      FNAME: 'MBEWV-BWKEY',
      FCOL: 'ValA',
      FNAMENEW: 'MBEWV-BWKEY',
      FNAMEINT: 'MBEWV-BWKEY',
      FKEY: '',
      FGTYP: '',
      FNZERO: '',
      FSUM: '',
      FSONLY: '',
      FSORT: '00',
      FSODS: '',
      FSUBT: '',
      FLPOS: '0005',
      FNUMB: '10',
      FNUMBT: 'MBEW',
      FNOSUM: '',
      FSONP: ''
    }],
  SELECTION_TABLE:
    [{
      SELNAME: 'SP$00001',
      KIND: 'S',
      SIGN: 'I',
      OPTION: 'CP',
      LOW: '6ZUR0060*',
      HIGH: ''
    }]
};