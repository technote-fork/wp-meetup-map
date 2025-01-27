/// <reference types="react-scripts" />

type Country = {
  name: string
  "alpha-2": string
  "alpha-3": string
  "country-code": string
  "iso_3166-2": string
  region: string
  "sub-region": string
  "intermediate-region": string
  "region-code": string
  "sub-region-code": string
  "intermediate-region-code": string
}

declare module 'ISO-3166-Countries-with-Regional-Codes/all/all.json' {
  const countries: Country[];
  export default countries;
}
