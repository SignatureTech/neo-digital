import Header from "@/app/header";
import Footer from "@/app/footer";
import {ReactNode} from "react";


export default function LandingLayout({
                                          children,
                                      }: Readonly<{
    children: ReactNode
}>) {
    return (<>
            <Header/>
             {children}
            <Footer/>
        </>
    );
}
