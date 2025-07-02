import { CheckboxGroup, Heading, Separator } from "@radix-ui/themes";
import SectionHeader from "../components/layouts/public-layout/section";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import Header from "../components/layouts/public-layout/header";

export default function Home() {
    return (
        <>
            <Header />
            <SectionHeader />
            <Sidebar>
                <Heading as="h2" size="3">
                    Filters
                </Heading>
                <Separator orientation="horizontal" size="4" mb="2" />
                <CheckboxGroup.Root name="example">
                    <CheckboxGroup.Item value="1">Test</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="2">Example</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="3">This</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="4">That</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="5">Test</CheckboxGroup.Item>
                </CheckboxGroup.Root>
            </Sidebar>
        </>
    )
}