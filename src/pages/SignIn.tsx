/* -----------------------------------------------------------------------------
   Home.tsx ­– Landing com produtos
   Stack: React 18 · TSX · Radix Themes · Tailwind
----------------------------------------------------------------------------- */

import {
    Flex,
    Section,
    Container,
    Grid,
    Box,
    Text,
    Button,
    IconButton,
} from '@radix-ui/themes'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Collapsible from '@radix-ui/react-collapsible'
import {
    Cross1Icon,
    ViewVerticalIcon,
} from '@radix-ui/react-icons'
import { useState } from 'react'

/** --- página -------------------------------------------------------------- */
export default function HomePage() {
    /* estado controla visibilidade da sidebar em mobile/tablet ----------- */
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/* TOPBAR ­– 3 menus suspensos + toggle filtros -------------------- */}
            <Flex
                asChild
                className="w-full items-center justify-between px-4 py-2 sticky top-0 z-20 bg-background/80 backdrop-blur border-b"
            >
                <header>
                    <Flex gap="4">
                        <NavDropdown label="Categorias" />
                        <NavDropdown label="Preço" />
                        <NavDropdown label="Ordenar" />
                    </Flex>

                    <IconButton
                        variant="soft"
                        size="2"
                        highContrast
                        className="md:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Alternar filtros"
                    >
                        {sidebarOpen ? <Cross1Icon /> : <ViewVerticalIcon />}
                    </IconButton>
                </header>
            </Flex>

            {/* BANNERS / CARROSSEL -------------------------------------------- */}
            <Section size="2">
                <Box
                    className="h-48 md:h-64 w-full rounded-lg bg-accent3 flex items-center
                     justify-center select-none"
                >
                    <Text size="6" weight="medium">
                        Banner / Carousel
                    </Text>
                </Box>
            </Section>

            {/* MAIN GRID (sidebar + produtos) ---------------------------------- */}
            <Flex className="flex-1 w-full max-w-7xl mx-auto overflow-hidden">
                {/* SIDEBAR ­– filtros com colapsável ---------------------------- */}
                <Collapsible.Root
                    open={sidebarOpen}
                    onOpenChange={setSidebarOpen}
                    className="shrink-0"
                >
                    {/* wrapper visível >=md ou via toggle ------------------------ */}
                    <Collapsible.Content
                        forceMount
                        className={`
              w-64 md:relative md:translate-x-0 md:block
              fixed top-0 bottom-0 left-0 z-30 bg-background/95 backdrop-blur
              transition-transform data-[state=closed]:-translate-x-full
              md:data-[state=closed]:translate-x-0
            `}
                    >
                        <aside className="h-full overflow-y-auto border-r p-4 pt-16 md:pt-4">
                            <FilterSidebar />
                        </aside>
                    </Collapsible.Content>
                </Collapsible.Root>

                {/* CONTAINER com grade de produtos ------------------------------ */}
                <Container size="3" className="flex-1 py-4 overflow-y-auto">
                    <Grid
                        columns={{ initial: '2', sm: '2', md: '3', lg: '4' }}
                        gap={{ initial: '4', md: '5' }}
                    >
                        {/* TODO: mapear produtos reais ----------------------------- */}
                        {Array.from({ length: 12 }).map((_, i) => (
                            <ProductCard key={i} /* product={data[i]} */ />
                        ))}
                    </Grid>
                </Container>
            </Flex>
        </>
    )
}

/* ------------------------------------------------------------------------ */
/* Sub-componentes                                                          */
/* ------------------------------------------------------------------------ */

/** Dropdown via Radix – evita reescrever acessibilidade                   */
function NavDropdown({ label }: { label: string }) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button
                    variant="ghost"
                    size="2"
                    className="tracking-tight"
                >
                    {label}
                </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={4}>
                    <DropdownMenu.Item onSelect={() => { }}>Opção 1</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => { }}>Opção 2</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => { }}>Opção 3</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

/** Placeholder da área de filtros                                         */
function FilterSidebar() {
    return (
        <Flex direction="column" gap="5" className="pr-2">
            <Text weight="bold" size="4">
                Filtros
            </Text>
            {/* substitua pelos componentes reais de filtro / input / slider etc */}
            <Text color="gray">- Em construção -</Text>
        </Flex>
    )
}

/** Card de produto genérico                                               */
function ProductCard() {
    return (
        <Box
            className="rounded-lg shadow-sm bg-accent1 flex flex-col p-4 aspect-[3/4]
                 hover:shadow-md transition-shadow"
        >
            <Box className="h-40 bg-accent4 rounded-md mb-3" />
            <Text weight="medium" size="3" className="mb-1 line-clamp-2">
                Nome do Produto
            </Text>
            <Text size="3" color="gray" className="mb-auto">
                R$ 0,00
            </Text>
            <Button size="2" className="mt-3">
                Adicionar
            </Button>
        </Box>
    )
}
