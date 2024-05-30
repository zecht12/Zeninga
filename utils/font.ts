import { League_Spartan, Montserrat, Open_Sans, Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["700"]
});

const head = League_Spartan({
    subsets: ["latin"],
    weight: ["700"]
});

const body = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
});

const bodyBold = Montserrat({
    subsets: ["latin"],
    weight: ["600"]
});

const button = Open_Sans({
    subsets: ["latin"],
    weight: ["700"]
})

export { font, head, body, bodyBold, button}