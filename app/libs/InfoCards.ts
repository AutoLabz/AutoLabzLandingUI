import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon, SearchCheck, Users, Settings2 } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Effortless Car Search",
        bodyText: "Leverage advanced machine learning algorithms to identify the perfect car based on your preferences. Enjoy a streamlined search process that saves time and effort.",
        icon: SearchCheck,
        id: 1
    },
    {
        title: "Personalized Recommendations",
        bodyText: "Our AI-driven recommendation engine provides personalized car suggestions based on your unique needs and past search behaviors, ensuring you find the best match.",
        icon: Settings2,
        id: 2
    },
    {
        title: "Enhanced User Experience",
        bodyText: "Experience a user-friendly interface powered by cutting-edge AI, offering real-time updates, interactive features, and an intuitive search process that makes car buying hassle-free.",
        icon: Users,
        id: 3
    },
]

export default infoCards