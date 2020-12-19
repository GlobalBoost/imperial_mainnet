import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}


export const contractAddresses = {
  ipt: {
    1: '0x2F3ed7b9EA1f6870956db8f2554fc02eA5646CD2',
  },
  masterChef: {
    1: '0x1ec8A7dFfFDcE5Fb13956FF15226B6ef08d4FD42',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xIpt: {
    1: '0x19Fd9cFEae4452266b5Da3f60Db482C3908c5e94'
  }
}


export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      1: '0x987b1ed5d0dba28995c96979b27dab43bd87af78',
    },
    tokenAddresses: {
      1: '0x2F3ed7b9EA1f6870956db8f2554fc02eA5646CD2',
    },
    name: 'Ipt - Farming',
    symbol: 'IPT-ETH ITS',
    tokenSymbol: 'IPT',
    icon: '🍣',
  },
  
  
  // Perm Menu
]
