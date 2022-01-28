# exoclick-react sdk
Use [ExoClick's Ad formats](https://www.exoclick.com/signup/?login=tomhooijenga) in React.

Installation
```bash
npm install exoclick-react
# or
yarn add exoclick-react
```

# Usage
```jsx
import { Banner, Outstream } from "exoclick-react";

// Banner, Mobile Banner and Multi-Format
<Banner zoneId={123} />

// Outstream Video
<Outstream zoneId={123} />
```
Check out [all the docs](https://exoclick-react.netlify.app).

# Features
Currently, supported formats of ExoClick are:
* [Adblock](https://exoclick-react.netlify.app/src-components-adblock-adblock)
* [Banner (Web)](https://exoclick-react.netlify.app/src-components-banner-banner#regular-web)
* [Banner (Mobile)](https://exoclick-react.netlify.app/src-components-banner-banner#mobile)
* [Banner (Multi-Format)](https://exoclick-react.netlify.app/src-components-banner-banner#multi-format)
* [Fullpage Interstitial (Web)](https://exoclick-react.netlify.app/src-components-fullpage-interstitial-fullpage-interstitial#regular-web)
* [Fullpage Interstitial (Mobile)](https://exoclick-react.netlify.app/src-components-fullpage-interstitial-fullpage-interstitial#mobile)
* [Sticky Banner](https://exoclick-react.netlify.app/src-components-sticky-banner-sticky-banner)
* [Placeholder](https://exoclick-react.netlify.app/src-components-placeholder-placeholder)
* [Recommendation Widget](https://exoclick-react.netlify.app/src-components-placeholder-placeholder)
* [Outstream video](https://exoclick-react.netlify.app/src-components-outstream-outstream)

Additionally, there is also the [\<Adblock /> component](https://exoclick-react.netlify.app/src-components-adblock-adblock) to detect 
if the user has ad-blocking enabled.