import {HeadlessMantineProvider} from '@mantine/core'

import {theme} from './theme'

const UIProvider = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <HeadlessMantineProvider theme={theme}>
            {children}
        </HeadlessMantineProvider>
    )
}

export {UIProvider}