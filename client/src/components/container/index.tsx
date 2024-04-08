import { ReactElement } from "react";

type Props = {
    children: ReactElement[] | ReactElement
}


const Container = ({ children }: Props) => {
    return <div className="flex max-w-screen-xl mx-auto mt-10">{children}</div>;
}

export default Container;