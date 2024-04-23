import { useState, useEffect, Children } from "react"
import { EVENTS } from '../consts';

export function Router({ children, routes = [ ], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routeParams = { }

    const childrenRoutes = Children.map(children, ({ props, type }) => {
        const { name } = type
        return name === 'Route' ? props : null
    })

    const routesToUse = routes.concat(childrenRoutes).filter(Boolean)

    const page = routesToUse.find(({ path }) => {
        if(path == currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params
        return true
    })?.Component

    return page ?
        <page routeParams={routeParams} /> 
        :
        <DefaultComponent routeParams={routeParams} />
}