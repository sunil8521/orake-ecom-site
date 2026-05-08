import { Sansita, DM_Sans } from "next/font/google";

export const titleFont = Sansita({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
export const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Aliases used in some components
export const headingFont = titleFont;
export const bodyFont = textFont;

// Aliases used in the admin panel
export const adminTitleFont = titleFont;
export const adminTextFont = textFont;
