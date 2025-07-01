import SectionHeader from "../components/layouts/PublicLayout/Section";
import { Sidebar } from "../components/layouts/PublicLayout/Sidebar";

export default function Home() {
    return (
        <>
            <SectionHeader />
            <Sidebar>
                Filters

                Prod 1
                Prod 2
                Prod 3
                Prod N
            </Sidebar>
            <div className="bg-amber-300 mt-10 md:mt-20 p-4 text-white">TEST</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-24">
                Test Tailwind
            </button>
        </>
    )
}