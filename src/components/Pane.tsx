import { ReactNode } from "react";

type PaneProp = {
    children: ReactNode;
    classes?: string; 
}


export function Pane({children, classes}: PaneProp) {
    return (
        <div className={`pane ${classes ?? ''}`}>
            {children}
        </div>
    )
}