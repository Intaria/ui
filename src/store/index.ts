import {StateStorage} from 'zustand/middleware'

export const queryStorage: StateStorage = {
    getItem: (key: string): string | null => {
        //TODO: rework, when enable SSR support

        const url = new URL(window.location.href)

        //Use & as key separator in name (key storage)
        const keys = key.split('&')

        let state: Record<string, string | string[]> = {}

        for (key of keys) {
            let value = url.searchParams.get(key) || ''

            state[key] = (value.indexOf(',') !== -1) ? value.split(',') : value
        }
        
        return JSON.stringify({
            state: state,
            version: 0
        })
    },
    setItem: (key: string, value: string): void => {
        const data = JSON.parse(value)

        const url = new URL(window.location.href)
        const keys = key.split('&')

        for (key of keys) {
            if (data['state'][key]) {
                url.searchParams.set(key, data['state'][key])
            }
            else {
                url.searchParams.delete(key)
            }
        }

        history.pushState(null, '', url)
    },
    removeItem: (key: string): void => {
        const url = new URL(window.location.href)

        url.searchParams.delete(key)

        history.pushState(null, '', url)
    }
}

export {create as createStore} from 'zustand'
export {persist as persistStorage, createJSONStorage} from 'zustand/middleware'