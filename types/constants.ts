export const DEXCOM_PROVIDER_NAME = 'dexcom'
export const NIGHTSCOUT_PROVIDER_NAME = 'nightscout'

export const FIVE_MINUTES = 5 * 60 * 1000

export enum CurrentDayStatus {
  Pending,
  Pass,
  Fail,
  Failing,
}
