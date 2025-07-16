import { CheckboxGroup, Separator, Text } from "@radix-ui/themes";
import { APIGetProducts } from "../../app/types/products";
import { useState } from "react";

export function ProductFilterHandler({ products }: APIGetProducts) {
    const [filters, setFilters] = useState<Record<string, string[]>>({});

    const allFilters: Record<string, Set<string>> = {};

    products.forEach((product) => {
        const subVars = product.sub_vars;
        if (!subVars) return;

        Object.entries(subVars).forEach(([varType, options]) => {
            if (!allFilters[varType]) {
                allFilters[varType] = new Set();
            }
            (Array.isArray(options) ? options : Object.values(options)).forEach((opt) => allFilters[varType].add(opt));
        });
    });

    const groupedFilters: Record<string, string[]> = {};
    Object.entries(allFilters).forEach(([varType, opts]) => {
        groupedFilters[varType] = Array.from(opts);
    })

    const handleCheckboxChange = (varType: string, option: string) => {
        setFilters(prev => {
            const current = prev[varType] || [];
            const updated = current.includes(option)
                ? current.filter(o => o !== option)
                : [...current, option];

            const newFilters = { ...prev, [varType]: updated };

            return newFilters;
        });
    };

    return (
        <>
            {Object.entries(groupedFilters).map(([varType, options]) => (
                <>
                    <Text>{varType}</Text>
                    <Separator size="4" />
                    <CheckboxGroup.Root>
                        {Array.isArray(options) && options.map((option) => (
                            <CheckboxGroup.Item
                                key={`${varType}-${option}`}
                                value={option}
                            >
                                {option}
                            </CheckboxGroup.Item>
                        )
                        )}
                    </CheckboxGroup.Root>
                </>

            ))}
        </>
    )
}