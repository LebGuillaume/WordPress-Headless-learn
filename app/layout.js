import { MainMenu } from "components/MainMenu";
import { Poppins, Aboreto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-aboreto",
});

import "styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import getMenu from "utils/getMenu";

export default async function layout({ children }) {
  const data = await getMenu();
  console.log(data);

  return (
    <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
      <head>
        <title>Hot Dang Homes Course 2</title>
      </head>
      <body>
        <MainMenu
          callToActionLabel={data.callToActionLabel}
          items={data.mainMenuItems}
          callToActionDestination={data.callToActionDestination}
        ></MainMenu>
        {children}
      </body>
    </html>
  );
}
