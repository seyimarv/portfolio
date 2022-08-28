import { createGlobalStyle } from "styled-components";
import ArticulatCF500 from "./Fonts/Articulat.CF/ArticulatCF-Medium.otf";
import ArticulatCF400 from "./Fonts/Articulat.CF/ArticulatCF-Normal.otf";
import ArticulatCF600 from "./Fonts/Articulat.CF/ArticulatCF-DemiBold.otf";
import BoldArticulatCF from "./Fonts/Articulat.CF/ArticulatCF-Bold.otf";
import BoldRocGrotesk from "./Fonts/Roc Grotesk/RocGrotesk_30.otf";
import MediumRocGrotesk from "./Fonts/Roc Grotesk/RocGrotesk_37.otf";
import NormalRocGrotesk from "./Fonts/Roc Grotesk/RocGrotesk_23.otf";
import { devices as MediaQueries } from "./theme/mediaQueries";

export default createGlobalStyle`
@font-face {
    font-family: "Articulat.CF";
    src:  url(${BoldArticulatCF});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Articulat.CF";
    src:  url(${ArticulatCF400});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Articulat.CF";
    src:  url(${ArticulatCF500});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Articulat.CF";
    src:  url(${ArticulatCF600});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "RocGrotesk";
    src:  url(${NormalRocGrotesk});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "RocGrotesk";
    src:  url(${BoldRocGrotesk});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "RocGrotesk";
    src:  url(${MediumRocGrotesk});
    font-weight: 500;
    font-style: normal;
  }
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    background: ${({ theme }) => theme.colors.primary};

  
    ${MediaQueries.down.tabland} { // width < 900?
        font-size: 55%; //1 rem = 8px, 8/16 = 50%
    }

    ${MediaQueries.down.tabport} { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }

    ${MediaQueries.down.phone} { // width < 1200?
        font-size: 45%;  //1 rem = 9px, 9/16 = 50%
    }


}

body {
    box-sizing: border-box;
    font-family: 'Source Code Pro', monospace;
    font-family: "Articulat.CF";
   
    a {
        outline: none !important;
        text-decoration: none !important;
    }
}
`;
