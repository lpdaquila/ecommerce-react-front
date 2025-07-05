import { ShoppingCart } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { forwardRef } from "react";

type Props = React.ComponentProps<typeof Button>

const ShoppingCartBtn = forwardRef<HTMLButtonElement, Props>(
    ({ children, className, ...props }, ref) => (
        <Button
            ref={ref}
            variant="soft"
            size="4"
            style={{ width: '100%' }}
            mt="2"
            mb="2"
            className={`${className ?? ""}`}
            {...props}
        >
            <ShoppingCart size={40} />{children}
        </Button>
    )
)

ShoppingCartBtn.displayName = "ShoppingCartBtn";

export default ShoppingCartBtn;