import SectionHeader from "../components/layouts/PublicLayout/Section";
import SidebarLayout from "../components/layouts/PublicLayout/SidebarLayout";

export default function Home() {
    return (
        <>
            <SectionHeader />
            <SidebarLayout />
            <div className="bg-amber-300 mt-10 md:mt-20 p-4 text-white">TESTE</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-24">
                Testar Tailwind
            </button>
        </>
    )
}