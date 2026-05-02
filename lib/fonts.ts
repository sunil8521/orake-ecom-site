import { Sansita, DM_Sans } from "next/font/google";

export const titleFont = Sansita({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
export const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Aliases used in some components (Product, Collections)
export const headingFont = titleFont;
export const bodyFont = textFont;
