# exoclick-react sdk
Use [ExoClick's banners](https://www.exoclick.com/signup/?login=tomhooijenga) in React.

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
* [Banner (Web)](https://exoclick-react.netlify.app/src-components-banner-banner#regular-web)
* [Banner (Mobile)](https://exoclick-react.netlify.app/src-components-banner-banner#mobile)
* [Banner (Multi-Format)](https://exoclick-react.netlify.app/src-components-banner-banner#multi-format)
* [Outstream video](https://exoclick-react.netlify.app/src-components-outstream-outstream)